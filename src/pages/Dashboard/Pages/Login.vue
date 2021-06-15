<template>
  <div class="md-layout text-center">
    <div
      class="md-layout-item md-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100"
    >
      <h1 slot="title" class="title login-title">BizMiner Login</h1>
    </div>
    <div
      class="md-layout-item md-size-50 md-medium-size-50 md-small-size-70 md-xsmall-size-100 login-page-fix"
    >
      <form @submit.prevent="login">
        <login-card>
          <div
            class="md-layout-item md-size-100 md-medium-size-100 md-small-size-100 mr-auto"
            slot="content"
          >
            <md-field
              :class="{ 'md-invalid': $v.email.$error }"
              style="margin-bottom: 2rem"
            >
              <md-icon>email</md-icon>
              <label>Email</label>
              <md-input v-model="$v.email.$model" />
              <span class="md-error" v-if="!$v.email.required">
                This field is required
              </span>
            </md-field>

            <md-field
              :class="{ 'md-invalid': $v.password.$error }"
              style="margin-bottom: 1rem"
            >
              <md-icon>lock_outline</md-icon>
              <label>Password</label>
              <md-input v-model="$v.password.$model" type="password" />
              <span class="md-error" v-if="!$v.email.required">
                This field is required
              </span>
            </md-field>
            <div class="md-form-group md-invalid" style="margin-bottom: 2rem">
              <router-link
                :to="{ name: 'ForgotPassword' }"
                class="text-left forgot-pass-link"
                >Forgot password?</router-link
              >
            </div>
            <div>
              <md-button
                class="md-info md-round mt-4"
                type="submit"
                slot="footer"
              >
                Lets Go
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
import sha256 from "crypto-js/sha256";
import { required } from "vuelidate/lib/validators";

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
    email: "",
    password: "",
  }),
  validations: {
    email: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    async login() {
      this.$v.$touch();
      if (!this.email || !this.password) {
        this.$store.dispatch("alerts/error", "Please enter inputs!");
        return false;
      }
      this.$store.dispatch("getRandomString", 20).then(async (res) => {
        const user = {
          session_id: res,
          username: this.email,
          password: sha256(this.password).toString(),
        };

        const requestOptions = {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        };

        try {
          await this.$store.dispatch("login", { user, requestOptions });
        } catch (e) {
          await this.$store.dispatch("alerts/error", "Invalid credentials!");
        }
      });
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
