import Vue from "vue";
import Vuex from "vuex";
import users from "@/store/modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
  },
  getters: {
    getToken: (state) => state.token,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async fetchToken({ commit }) {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/token`
      );
      const token = await response.json();

      commit("SET_TOKEN", token.token);
    },
  },
  modules: {
    users,
  },
});
