<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>contacts</md-icon>
          </div>
          <h4 class="title">Edit User</h4>
        </md-card-header>

        <form @submit.prevent="update">
          <md-card-content>
            <div class="text-right">
              <md-button @click="goBack" class="md-primary md-dense">
                Back to List
              </md-button>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
                Profile Photo
              </label>
              <div class="md-layout-item">
                <div class="file-input">
                  <div v-if="avatar_img">
                    <div class="image-container">
                      <img :src="avatar_img" />
                    </div>
                  </div>
                  <div class="image-container" v-else>
                    <img :src="default_img" />
                  </div>
                  <div class="button-container">
                    <md-button
                      class="md-danger md-round"
                      @click="removeImage"
                      v-if="avatar_img"
                    >
                      <i class="fa fa-times" />
                      Remove
                    </md-button>
                    <md-button class="md-success md-fileinput">
                      <template v-if="!avatar_img">Select image</template>
                      <template v-else>Change</template>
                      <input type="file" @change="onFileChange" />
                    </md-button>
                  </div>
                </div>
                <md-field class="md-invalid">
                  <validation-error :errors="apiValidationErrors.attachment" />
                </md-field>
              </div>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Name
              </label>
              <div class="md-layout-item">
                <md-field class="md-invalid">
                  <md-input v-model="user.name" />
                  <validation-error :errors="apiValidationErrors.name" />
                </md-field>
              </div>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Email
              </label>
              <div class="md-layout-item">
                <md-field class="md-invalid">
                  <md-input v-model="user.email" />
                  <validation-error :errors="apiValidationErrors.email" />
                </md-field>
              </div>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Role
              </label>
              <div class="md-layout-item">
                <md-field>
                  <label>Select ...</label>
                  <md-select v-model="user.roles[0].id" name="roles">
                    <md-option
                      v-for="item in available_roles"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </md-option>
                  </md-select>
                </md-field>
              </div>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Password
              </label>
              <div class="md-layout-item">
                <md-field class="md-invalid">
                  <md-input v-model="user.password" type="password" />
                  <validation-error :errors="apiValidationErrors.password" />
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
                Confirm Password
              </label>
              <div class="md-layout-item">
                <md-field class="md-invalid">
                  <md-input
                    v-model="user.password_confirmation"
                    type="password"
                  />
                  <validation-error
                    :errors="apiValidationErrors.password_confirmation"
                  />
                </md-field>
              </div>
            </div>
          </md-card-content>

          <md-card-actions md-alignment="right">
            <md-button type="submit" class="md-success">Update User</md-button>
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
    user: {
      type: "users",
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      roles: [
        {
          id: null,
          type: "roles",
        },
      ],
      relationshipNames: ["roles"],
    },

    available_roles: [],

    avatar_img: "",
    default_img: process.env.VUE_APP_BASE_URL + "/img/placeholder.jpg",
    file: null,
  }),

  created() {
    this.get();
    this.getRoles();
  },

  methods: {
    async get() {
      try {
        const id = this.$route.params.id;
        await this.$store.dispatch("users/get", id);
        this.user = this.$store.getters["users/user"];
        this.user.password = "";
      } catch (e) {
        await this.$store.dispatch(
          "alerts/error",
          "Oops, something went wrong!"
        );
      }
    },

    async update() {
      if (
        this.$isDemo == 1 &&
        ["1", "2", "3"].includes(this.$route.params.id)
      ) {
        await this.$store.dispatch(
          "alerts/error",
          "You are not allowed to change data of default users."
        );
        return;
      }
      try {
        this.resetApiValidation();
        if (this.file) {
          await this.$store.dispatch("users/upload", {
            user: this.user,
            image: this.file,
          });
          this.user.profile_image = await this.$store.getters["users/url"];
        }
        await this.$store.dispatch("users/update", this.user);
        await this.$store.dispatch(
          "alerts/success",
          "User updated successfully."
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

    async getRoles() {
      await this.$store.dispatch("roles/list");
      this.available_roles = await this.$store.getters["roles/dropdown"];
    },

    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },

    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.avatar_img = e.target.result;
        this.file = file;
      };
      reader.readAsDataURL(file);
    },

    removeImage() {
      this.avatar_img = null;
    },

    goBack() {
      this.$router.push({ name: "List Users" });
    },
  },
};
</script>

<style lang="scss">
.spacing {
  padding-bottom: 1rem;
}
</style>
