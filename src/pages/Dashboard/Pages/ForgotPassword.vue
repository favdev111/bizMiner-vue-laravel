<template>
  <div class="md-layout text-center">
    <div
      class="md-layout-item md-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100"
    >
      <h1 slot="title" class="title login-title">Password Reminder</h1>
    </div>
    <div
      class="md-layout-item md-size-50 md-medium-size-50 md-small-size-70 md-xsmall-size-100 login-page-fix"
    >
      <form @submit.prevent="send">
        <login-card>
          <div
            class="md-layout-item md-size-100 md-medium-size-100 md-small-size-100 mr-auto"
            slot="content"
          >
            <div class="md-layout text-left">
              <p>Enter your account email to receive the password reminder</p>
            </div>
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
  }),
  validations: {
    email: {
      required,
    },
  },
  methods: {
    async send() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        await this.$store.dispatch("alerts/error", "Please enter inputs!");
        return false;
      } else {
        this.$store.dispatch("getRandomString", 20).then(async (res) => {
          const user = {
            session_id: res,
            email: this.email,
          };
          const requestOptions = {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
            },
          };

          try {
            await this.$store.dispatch("passwordReminder", {
              user,
              requestOptions,
            });
          } catch (e) {
            await this.$store.dispatch("alerts/error", "Invalid credentials!");
          }
        });
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
