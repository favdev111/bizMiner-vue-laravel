<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>tag</md-icon>
          </div>
          <h4 class="title">Add Role</h4>
        </md-card-header>

        <form @submit.prevent="add">
          <md-card-content>
            <div class="text-right">
              <md-button @click="goBack" class="md-primary md-dense">
                Back to List
              </md-button>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
                Name
              </label>
              <div class="md-layout-item">
                <md-field class="md-invalid">
                  <md-input v-model="role.name" />
                  <validation-error :errors="apiValidationErrors.name" />
                </md-field>
              </div>
            </div>
          </md-card-content>

          <md-card-actions md-alignment="right">
            <md-button type="submit" class="md-success">Add Role</md-button>
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
    role: {
      type: "roles",
      name: null,
    },
  }),

  methods: {
    async add() {
      try {
        await this.$store.dispatch("roles/add", this.role);
        await this.$store.dispatch("alerts/success","Role added successfully.");
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
      this.$router.push({ name: "List Roles" });
    },
  },
};
</script>
