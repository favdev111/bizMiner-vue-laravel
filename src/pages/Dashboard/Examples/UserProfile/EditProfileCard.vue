<template>
  <form ref="profile_form" @submit.prevent="updateProfile">
    <md-card>
      <md-card-header class="md-card-header-icon">
        <div class="card-icon">
          <md-icon>perm_identity</md-icon>
        </div>
        <h4 class="title">Edit Profile</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout spacing">
          <label class="md-layout-item md-size-15 md-form-label">
            Profile Photo
          </label>
          <div class="md-layout-item">
            <div class="file-input">
              <div v-if="image">
                <div class="image-container">
                  <img :src="image" />
                </div>
              </div>
              <div class="image-container" v-else>
                <img :src="default_img" />
              </div>
              <div class="button-container">
                <md-button
                  class="md-danger md-round"
                  @click="removeImage"
                  v-if="image"
                >
                  <i class="fa fa-times" />
                  Remove
                </md-button>
                <md-button class="md-success md-fileinput">
                  <template v-if="!image">Select image</template>
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
          <label class="md-layout-item md-size-15 md-form-label"> Name </label>
          <div class="md-layout-item">
            <md-field class="md-invalid">
              <md-input v-model="user.name" />
              <validation-error :errors="apiValidationErrors.name" />
            </md-field>
          </div>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label"> Email </label>
          <div class="md-layout-item">
            <md-field class="md-invalid">
              <md-input v-model="user.email" />
              <validation-error :errors="apiValidationErrors.email" />
            </md-field>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button type="submit"> Update Profile </md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>
<script>
import { ValidationError } from '@/components';
import formMixin from '@/mixins/form-mixin';

export default {
  name: 'edit-profile-card',

  props: {
    user: Object,
  },

  components: { ValidationError },

  mixins: [formMixin],

  data() {
    return {
      image: null,
      default_img: process.env.VUE_APP_BASE_URL + '/img/placeholder.jpg',
      file: null,
    };
  },

  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },

    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
        this.file = file;
      };
      reader.readAsDataURL(file);
    },

    removeImage() {
      this.image = null;
    },

    async updateProfile() {
      if (this.$isDemo == 1 && ['1', '2', '3'].includes(this.user.id)) {
        await this.$store.dispatch(
          'alerts/error',
          'You are not allowed to change data of default users.'
        );
        return;
      }
      try {
        this.resetApiValidation();
        if (!!this.file) {
          await this.$store.dispatch('users/upload', {
            user: this.user,
            image: this.file,
          });
          this.user.profile_image = await this.$store.getters['users/url'];
        }

        await this.$store.dispatch('profile/update', this.user);
        await this.$store.dispatch(
          'alerts/success',
          'Profile updated successfully.'
        );
        // await this.$store.getters["profile/me"];
      } catch (e) {
        await this.$store.dispatch(
          'alerts/error',
          'Oops, something went wrong!'
        );
        this.setApiValidation(e.response.data.errors);
      }
    },
  },
};
</script>

<style lang="scss">
.spacing {
  padding-bottom: 1rem;
}
</style>
