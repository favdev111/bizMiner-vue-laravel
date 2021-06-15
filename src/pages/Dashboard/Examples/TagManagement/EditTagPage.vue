<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>tag</md-icon>
          </div>
          <h4 class="title">Edit Tag</h4>
        </md-card-header>

        <form @submit.prevent="update">
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
                  <md-input v-model="tag.name" />
                  <validation-error :errors="apiValidationErrors.name" />
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
                Color
              </label>
              <div class="md-layout-item md-alignment-center">
                <md-field class="md-invalid">
                  <color-picker v-model="color" style="width: 100%" />
                  <validation-error :errors="apiValidationErrors.color" />
                </md-field>
              </div>
            </div>
          </md-card-content>

          <md-card-actions md-alignment="right">
            <md-button @click="update" class="md-success">Update Tag</md-button>
          </md-card-actions>
        </form>
      </md-card>
    </div>
  </div>
</template>

<script>
import { Slider } from "vue-color";
import { ValidationError } from "@/components";
import formMixin from "@/mixins/form-mixin";

export default {
  components: {
    "color-picker": Slider,
    "validation-error": ValidationError,
  },

  mixins: [formMixin],

  data: () => ({
    tag: {
      type: "tags",
      name: null,
      color: null,
    },
    color: {
      hex: "#FF0000",
    },
  }),

  created() {
    this.get();
  },

  watch: {
    color: {
      handler: "updateTagColor",
      immediate: true,
      deep: true,
    },
  },

  methods: {
    async get() {
      try {
        const id = this.$route.params.id;
        await this.$store.dispatch("tags/get", id);
        this.tag = await this.$store.getters["tags/tag"];
      } catch (e) {
        await this.$store.dispatch(
          "alerts/error",
          "Oops, something went wrong!"
        );
      }
    },

    async update() {
      if (this.$isDemo == 1 && ["1", "2"].includes(this.$route.params.id)) {
        await this.$store.dispatch(
          "alerts/error",
          "You are not allowed to change data of default tags."
        );
        return;
      }
      try {
        await this.$store.dispatch("tags/update", this.tag);
        await this.$store.dispatch(
          "alerts/success",
          "Tag updated successfully."
        );
        this.goBack();
      } catch (e) {
        if (e.response.data.errors[0]) {
          await this.$store.dispatch(
            "alerts/error",
            e.response.data.errors[0].title
          );
          this.setApiValidation(e.response.data.errors);
        } else {
          await this.$store.dispatch(
            "alerts/error",
            "Oops, something went wrong!"
          );
        }
      }
    },

    updateTagColor() {
      this.tag.color = this.color.hex;
    },

    goBack() {
      this.$router.push({ name: "List Tags" });
    },
  },
};
</script>

<style lang="scss">
.spacing {
  padding-bottom: 1rem;
}
</style>
