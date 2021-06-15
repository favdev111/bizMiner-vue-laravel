<template>
  <div class="md-layout text-center">
    <div
      class="md-layout-item md-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100"
    >
      <h1 slot="title" class="title login-title">
        BizMiner Account Regisration
      </h1>
    </div>
    <div
      class="md-layout-item md-size-50 md-medium-size-50 md-small-size-70 md-xsmall-size-100"
    >
      <form @submit.prevent="register">
        <signup-card>
          <div
            class="md-layout-item md-size-100 md-medium-size-100 md-small-size-100 mr-auto"
            slot="content"
          >
            <md-field
              :class="{ 'md-invalid': $v.firstName.$error }"
              style="margin-bottom: 2rem"
            >
              <md-icon>face</md-icon>
              <label>First Name</label>
              <md-input v-model="$v.firstName.$model" />
              <span class="md-error" v-if="!$v.firstName.required">
                This field is required
              </span>
            </md-field>

            <md-field
              :class="{ 'md-invalid': $v.lastName.$error }"
              style="margin-bottom: 2rem"
            >
              <md-icon>face</md-icon>
              <label>Last Name</label>
              <md-input v-model="$v.lastName.$model" />
              <span class="md-error" v-if="!$v.lastName.required">
                This field is required
              </span>
            </md-field>

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
            <md-checkbox v-model="$v.boolean.$model">
              I agree to the <a>terms and conditions</a>.
            </md-checkbox>
            <div
              :class="{ 'md-invalid': $v.boolean.$error }"
            >
              <span 
              class="md-error" 
              v-if="!$v.boolean.sameAs"
              style="color: #ff1744"
              >
                You need to agree with our terms and conditions.
              </span>
            </div>
            <div class="button-container">
              <md-button
                class="md-info md-round mt-4"
                type="submit"
                slot="footer"
              >
                Get Started
              </md-button>
            </div>
          </div>
        </signup-card>
      </form>
    </div>
  </div>
</template>
<script>
import { SignupCard } from "@/components";
import formMixin from "@/mixins/form-mixin";
import { required, sameAs } from "vuelidate/lib/validators";
import sha256 from "crypto-js/sha256";

export default {
  components: {
    SignupCard,
  },
  mixins: [formMixin],
  data() {
    return {
      firstName: null,
      lastName: null,
      boolean: false,
      email: null,
      password: null,
      password_confirmation: null,
    };
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    email: {
      required,
    },
    password: {
      required,
    },
    password_confirmation: {
      required,
      sameAsPassword: sameAs("password"),
    },
    boolean: {
      sameAs: sameAs(() => true),
    },
  },
  methods: {
    async register() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        await this.$store.dispatch("alerts/error", "Please enter inputs!");
        return false;
      } else {
        this.$store.dispatch("getRandomString", 20).then(async (res) => {
          const user = {
            session_id: res,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: sha256(this.password).toString(),
          };

          const requestOptions = {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
            },
          };

          try {
            await this.$store.dispatch("register", { user, requestOptions });
          } catch (e) {
            await this.$store.dispatch(
              "alerts/error",
              "Oops, something went wrong"
            );
          }
        });
      }
    },
  },
};
</script>
