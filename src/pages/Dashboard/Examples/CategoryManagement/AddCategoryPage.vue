<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>category</md-icon>
          </div>
          <h4 class="title">Add Category</h4>
        </md-card-header>

        <form @submit.prevent="add">
          <md-card-content>
            <div class="text-right">
              <md-button @click="goBack" class="md-primary md-dense">
                Back to List
              </md-button>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Name
              </label>
              <div class="md-layout-item">
                <md-field class="md-invalid">
                  <md-input v-model="category.name" />
                  <validation-error :errors="apiValidationErrors.name" />
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
                Description
              </label>
              <div class="md-layout-item">
                <md-field class="md-invalid">
                  <md-input v-model="category.description" />
                  <validation-error :errors="apiValidationErrors.description" />
                </md-field>
              </div>
            </div>
          </md-card-content>

          <md-card-actions md-alignment="right">
            <md-button type="submit" class="md-success">Add Category</md-button>
          </md-card-actions>
        </form>
      </md-card>
    </div>
  </div>
</template>

<script>
import { ValidationError } from "@/components";
import formMixin from "@/mixins/form-mixin";

export default {
  components: { ValidationError },

  mixins: [formMixin],

  data: () => ({
    category: {
      type: "categories",
      name: null,
      description: null,
    },
  }),

  methods: {
    async add() {
      try {
        await this.$store.dispatch("categories/add", this.category);
        await this.$store.dispatch("alerts/success","Category added successfully.");
        this.goBack();
      } catch (e) {
        if(e.response.data.errors[0]) {
          await this.$store.dispatch("alerts/error", e.response.data.errors[0].title)
          this.setApiValidation(e.response.data.errors);
        } else {
          await this.$store.dispatch("alerts/error", "Oops, something went wrong!")
        }
      }
    },

    goBack() {
      this.$router.push({ name: "List Categories" });
    },
  },
};
</script>

<style lang="scss">
.spacing {
  padding-bottom: 1rem;
}
</style>
