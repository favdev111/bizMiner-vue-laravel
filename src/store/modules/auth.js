import Vue from "vue";
import router from "@/router";
import { VueAuthenticate } from "vue-authenticate";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: process.env.VUE_APP_API_BASE_URL,
  tokenName: "access_token",
  loginUrl: "/session/login",
  registerUrl: "/session/register",
  passwordResetUrl: "/session/password_reset",
});

export default {
  state: {
    isAuthenticated: localStorage.getItem('vue-authenticate.vueauth_access_token') !== null,
  },

  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
      // return true;
    },
  },

  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
      // return true;
    },
  },

  actions: {
    async login(context, payload) {
      return vueAuth.login(payload.user, payload.requestOptions).then(async (res) => {
        if (!res.data.error && res.data.logged_in) {
          localStorage.setItem("vue-authenticate.vueauth_access_token", payload.user.session_id);
          context.commit("isAuthenticated", {
            isAuthenticated: vueAuth.isAuthenticated(),
          });
          await this.$app.$store.dispatch("alerts/success", "Successfully login.");
          await router.push({ name: "Home" });
        } else {
          await this.$app.$store.dispatch("alerts/error", "Invalid credentials!");
        }
      });
    },

    async register(context, payload) {
      return vueAuth.register(payload.user, payload.requestOptions).then(async (res) => {
        if (!res.data.error && res.data.registered) {
          localStorage.setItem("vue-authenticate.vueauth_access_token", payload.user.session_id);

          context.commit("isAuthenticated", {
            isAuthenticated: vueAuth.isAuthenticated(),
          });

          await this.$app.$store.dispatch("alerts/success", "Successfully registered.");
          await router.push({ name: "Subscriptions", query: { s: "renew-upgrade" } });
        } else if (res.data.error && res.data.errorCode == "register_username_exists") {
          this.$app.$store.dispatch(
            "alerts/error",
            "We already have an account with this email address.please login or reset your password"
          );
          await router.push({ name: "Login" });
        } else {
          this.$app.$store.dispatch("alerts/error", "Oops, something went wrong");
        }
      });
    },

    async logout(context, payload) {
      let currentSession = localStorage.getItem("vue-authenticate.vueauth_access_token");
      if (currentSession) {
        axios
          .post(`${process.env.VUE_APP_API_BASE_URL}/session/logout`, { session_id: currentSession })
          .then((res) => {
            if (!res.data.error) {
              localStorage.removeItem("vue-authenticate.vueauth_access_token");
              context.commit("isAuthenticated", {
                isAuthenticated: false,
              });
              router.push({ name: "Login" });
            }
          });
      } else {
        router.push({ name: "Login" });
      }
    },

    async passwordReminder(context, payload) {
      axios.post(`${process.env.VUE_APP_API_BASE_URL}/session/password_reset`, payload.user).then(async (res) => {
        if (!res.data.error && res.data.reset) {
          context.commit("isAuthenticated", {
            isAuthenticated: false,
          });
          localStorage.setItem("vue-authenticate.temp_access_token", payload.user.session_id);
          this.$app.$store.dispatch("alerts/success", "We sent password reset link to your email address.");
        } else if(res.data.errorCode == 'password_reset_existing_session') {
          this.$app.$store.dispatch("alerts/error", "You are already login in with this email and trying to reset a password.");
        } else if(res.data.errorCode == 'password_reset_no_users'){
          this.$app.$store.dispatch("alerts/error", "The email you input is incorrect.");
        } else {
          this.$app.$store.dispatch("alerts/error", "Oops, something went wrong.");
        }
      });
    },

    async recoverPassword(context, payload) {
      let tmpSession = localStorage.getItem("vue-authenticate.temp_access_token");
      if (tmpSession) {
        axios
          .post(`${process.env.VUE_APP_API_BASE_URL}/session/password_recover`, {
            session_id: tmpSession,
            recovery_hash: payload.recovery_hash,
            new_password: payload.new_password
          })
          .then(async (res) => {
            if (!res.data.error && res.data.recovered) {
              localStorage.removeItem("vue-authenticate.temp_access_token");
              this.$app.$store.dispatch("alerts/success", "Password is reset successfully.");
              router.push({ name: 'Login' });
            } else if(res.data.errorCode == 'recovery_used') {
              this.$app.$store.dispatch("alerts/error", "A password has already been reset with that specific hash.");
            } else if(res.data.errorCode == 'existing_session') {
              this.$app.$store.dispatch("alerts/error", "You are already logged in.");
            } else if(res.data.errorCode == 'recovery_invalid') {
              this.$app.$store.dispatch("alerts/error", "The link from the email is invalid.");
            } else if(res.data.errorCode == 'many_users') {
              this.$app.$store.dispatch("alerts/error", "Many users with the same email were found.")
            } else {
              this.$app.$store.dispatch("alerts/error", "Oops, something went wrong.")
            }
          });
      } else {
        this.$app.$store.dispatch("alerts/error", "Oops, something went wrong.")
      }
    },

    async authenticateUser(context, payload) {
      let currentSession = localStorage.getItem("vue-authenticate.vueauth_access_token");
      return axios
        .post(`${process.env.VUE_APP_API_BASE_URL}/session/authenticate`, { session_id: currentSession })
        .then((res) => {
          if (!res.data.error) {
            return res.data.user;
          }
          return false;
        });
    },

    async getRandomString(context, length) {
      var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      return result;
    },
  },
};
