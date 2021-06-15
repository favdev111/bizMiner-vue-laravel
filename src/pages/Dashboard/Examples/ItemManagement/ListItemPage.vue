<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>category</md-icon>
          </div>
          <h4 class="title">Items List</h4>
        </md-card-header>
        <md-card-content>
          <div class="text-right">
            <md-button @click="goToAdd" class="md-primary md-dense">
              Add Item
            </md-button>
          </div>
          <md-table
            :value="table"
            :md-sort.sync="sortation.field"
            :md-sort-order.sync="sortation.order"
            :md-sort-fn="customSort"
            class="paginated-table table-striped table-hover"
          >
            <md-table-toolbar>
              <md-field>
                <label>Per page</label>
                <md-select v-model="pagination.perPage" name="pages">
                  <md-option
                    v-for="item in pagination.perPageOptions"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                    {{ item }}
                  </md-option>
                </md-select>
              </md-field>

              <md-field>
                <md-input
                  v-model="query"
                  type="search"
                  class="mb-3"
                  clearable
                  style="width: 200px"
                  placeholder="Search ..."
                >
                </md-input>
              </md-field>
            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="Name" md-sort-by="name">{{
                item.name
              }}</md-table-cell>
              <md-table-cell md-label="Category" md-sort-by="category.name">{{
                item.category.name
              }}</md-table-cell>
              <md-table-cell md-label="Picture">
                <img
                  v-if="item.image"
                  :src="item.image"
                  style="width: 100px; height: auto"
                  alt="avatar"
                />
              </md-table-cell>
              <md-table-cell md-label="Tags" md-sort-by="tags.name">
                <span
                  v-for="(tag, index) in item.tags"
                  :key="'tag' + index"
                  class="badge badge-default"
                  :style="{ backgroundColor: tag.color, margin: '.1rem' }"
                >
                  {{ tag.name }}
                </span>
              </md-table-cell>
              <md-table-cell md-label="Created At" md-sort-by="created_at">{{
                item.created_at
              }}</md-table-cell>
              <md-table-cell md-label="Actions">
                <md-button
                  class="md-icon-button md-raised md-round md-info"
                  @click="goToEdit(item.id)"
                  style="margin: 0.2rem"
                >
                  <md-icon>edit</md-icon>
                </md-button>
                <md-button
                  class="md-icon-button md-raised md-round md-danger"
                  @click="destroy(item.id)"
                  style="margin: 0.2rem"
                >
                  <md-icon>delete</md-icon>
                </md-button>
              </md-table-cell>
            </md-table-row>
          </md-table>

          <div class="footer-table md-table">
            <table>
              <tfoot>
                <tr>
                  <th
                    v-for="item in footerTable"
                    :key="item.name"
                    class="md-table-head"
                  >
                    <div class="md-table-head-container md-ripple md-disabled">
                      <div class="md-table-head-label">
                        {{ item }}
                      </div>
                    </div>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </md-card-content>

        <md-card-actions md-alignment="space-between">
          <div class="">
            <p class="card-category">
              Showing {{ from + 1 }} to {{ to }} of {{ total }} entries
            </p>
          </div>
          <pagination
            class="pagination-no-border pagination-success"
            v-model="pagination.currentPage"
            :per-page="pagination.perPage"
            :total="total"
          />
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Pagination from "@/components/Pagination";
import Swal from "sweetalert2";

export default {
  components: {
    pagination: Pagination,
  },

  data: () => ({
    table: [],
    footerTable: [
      "Name",
      "Category",
      "Picture",
      "Tags",
      "Created At",
      "Actions",
    ],

    query: null,

    sortation: {
      field: "created_at",
      order: "asc",
    },

    pagination: {
      perPage: 5,
      currentPage: 1,
      perPageOptions: [5, 10, 25, 50],
    },

    total: 0,
  }),

  computed: {
    sort() {
      if (this.sortation.order === "desc") {
        return `-${this.sortation.field}`;
      }

      return this.sortation.field;
    },

    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },

    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
  },

  watch: {
    query: {
      handler: "getListDebounced",
      immediate: true,
    },
    sortation: {
      handler: "getList",
      immediate: false,
      deep: true,
    },
    pagination: {
      handler: "getList",
      immediate: false,
      deep: true,
    },
  },

  methods: {
    getListDebounced: _.debounce(function () {
      this.getList();
    }, 300),

    getList() {
      let params = {
        include: "category,tags",
        ...(this.sort ? { sort: this.sort } : {}),
        filter: {
          ...(this.query ? { name: this.query } : {}),
          ...(this.query ? { category: this.query } : {}),
          ...(this.query ? { tags: this.query } : {}),
        },
        page: {
          number: this.pagination.currentPage,
          size: this.pagination.perPage,
        },
      };

      this.$store.dispatch("items/list", params).then(() => {
        this.table = this.$store.getters["items/list"];
        this.total = this.$store.getters["items/listTotal"];
      });
    },

    async destroy(id) {
      if (this.$isDemo == 1 && ["1", "2"].includes(id)) {
        await this.$store.dispatch(
          "alerts/error",
          "You are not allowed to change data of default items."
        );
        return;
      }
      const confirmation = await Swal.fire({
        title: "Delete this item?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
        confirmButtonClass: "md-button md-success",
        cancelButtonClass: "md-button md-danger",
      });

      if (confirmation.value === true) {
        try {
          await this.$store.dispatch("items/destroy", id);
          await this.$store.dispatch(
            "alerts/success",
            "Item deleted successfully."
          );
          await this.getList();
        } catch (e) {
          if (e.response.data.errors[0]) {
            await this.$store.dispatch(
              "alerts/error",
              e.response.data.errors[0].title
            );
          } else {
            await this.$store.dispatch(
              "alerts/error",
              "Oops, something went wrong!"
            );
          }
        }
      }
    },

    goToAdd() {
      this.$router.push({ name: "Add Item" });
    },

    goToEdit(id) {
      this.$router.push({ name: "Edit Item", params: { id } });
    },

    customSort() {
      return false;
    },
  },
};
</script>
