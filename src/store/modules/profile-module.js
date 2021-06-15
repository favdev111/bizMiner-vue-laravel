import service from "@/store/services/profile-service";
import axios from "axios";

const state = {
  me: null,
};

const mutations = {
  SET_RESOURCE: (state, me) => {
    state.me = me;
  },
};

const actions = {
  me({ commit, dispatch }, params) {
    return service.get(params).then((profile) => {
      commit("SET_RESOURCE", profile.list);
    });
  },

  update({ commit, dispatch }, params) {
    return service.update(params).then((profile) => {
      commit("SET_RESOURCE", profile);
    });
  },
  save({ commit, dispatch }, params) {
    let currentSession = localStorage.getItem("vue-authenticate.vueauth_access_token");
    if (currentSession) {
      params.session_id = currentSession;
      return service.saveMyProfile(params).then((res) => {
        if (!res.data.error && res.data.problematicFields.length == 0 && res.data.saved == true) {
          this.$app.$store.dispatch("alerts/success", "Successfully Saved.");
        } else {
          this.$app.$store.dispatch("alerts/error", "Oops, something went wrong");
        }
      });
    }
  },
  getGenInfo({ commit, dispatch }) {
    const options = {
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    };
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/info/general`, {
        params: {
          'info_ids': 'title_codes,job_functions'
        }
      }, options)
      .then((res) => {
        return res.data.information;
      });
  },
  getAccountOpt({ commit, dispatch }, params) {
    const options = {
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    };
    let currentSession = localStorage.getItem("vue-authenticate.vueauth_access_token");
    if (currentSession) {
      params.session_id = currentSession;
      return axios
        .post(`${process.env.VUE_APP_API_BASE_URL}/session/save_option`, params, options)
        .then((res) => {
          return res;
        });
    }

  }
};

const getters = {
  me: (state) => state.me,
};

const profile = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default profile;
