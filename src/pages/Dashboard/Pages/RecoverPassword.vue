<template>
  <div class="md-layout text-center">
    <div
      class="
        md-layout-item
        md-size-100
        md-medium-size-100
        md-small-size-100
        md-xsmall-size-100
      "
    >
      <h1 slot="title" class="title login-title">Password Recover</h1>
    </div>
    <div
      class="
        md-layout-item
        md-size-50
        md-medium-size-50
        md-small-size-70
        md-xsmall-size-100
        login-page-fix
      "
    >
      <form @submit.prevent="send">
        <login-card>
          <div
            class="
              md-layout-item md-size-100 md-medium-size-100 md-small-size-100
              mr-auto
            "
            slot="content"
          >
            <div class="md-layout text-left">
              <p>Please enter a new password for your account</p>
            </div>
            <md-field
              :class="{ 'md-invalid': $v.password.$error }"
              style="margin-bottom: 1rem"
            >
              <md-icon>lock_outline</md-icon>
              <label>New Password</label>
              <md-input v-model="$v.password.$model" type="password" />
              <span class="md-error" v-if="!$v.password.required">
                This field is required
              </span>
            </md-field>

            <md-field
              :class="{ 'md-invalid': $v.password_confirmation.$error }"
            >
              <md-icon>lock_outline</md-icon>
              <label>Confirm Password</label>
              <md-input
                v-model="$v.password_confirmation.$model"
                type="password"
              />
              <span class="md-error" v-if="!$v.password_confirmation.required">
                This field is required
              </span>
              <span
                class="md-error"
                v-if="!$v.password_confirmation.sameAsPassword"
                style="bottom: -20px"
              >
                Passwords must be identical
              </span>
            </md-field>

            <div class="button-container">
              <md-button
                class="md-info md-round mt-4"
                type="submit"
                slot="footer"
              >
                Send
              </md-button>
            </div>
          </div>
        </login-card>
      </form>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import formMixin from "@/mixins/form-mixin";
import { required, sameAs } from "vuelidate/lib/validators";
import sha256 from "crypto-js/sha256";

export default {
  components: {
    LoginCard,
  },
  mixins: [formMixin],
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated();
    },
  },
  data: () => ({
    password: null,
    password_confirmation: null,
  }),
  validations: {
    password: {
      required,
    },
    password_confirmation: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    async send() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        await this.$store.dispatch("alerts/error", "Please enter inputs!");
        return false;
      } else {
        if (this.$route.query.hash) {
          await this.$store.dispatch("recoverPassword", {
            new_password: sha256(this.password).toString(),
            recovery_hash: this.$route.query.hash,
          });
        } else {
          this.$store.dispatch("alerts/error", "You can't reset password");
        }
      }
    },
  },
};
</script>
<style scoped>
.login-fix-page {
  padding-bottom: 7em;
  padding-top: 4em;
}
</style>
