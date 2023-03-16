export default {
  namespaced: true,
  state: {
    usersInfo: {
      users: [],
      total_pages: 0,
    },
  },
  getters: {
    getUsers({ usersInfo }) {
      return usersInfo.users?.sort(
        (a, b) => a?.registration_timestamp + b?.registration_timestamp
      );
    },
    getUsersTotalPages({ usersInfo }) {
      return usersInfo.total_pages;
    },
  },
  mutations: {
    setUsersInfo(state, payload) {
      state.usersInfo.users.push(...payload?.users);
      state.usersInfo.total_pages = payload.total_pages;

      console.log("usersInfo", state.usersInfo);
      console.log("payload", payload.users);
    },
  },
  actions: {
    async fetchUsersAction({ commit }, payload = 1) {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${payload}&count=6`
      );
      const usersInfo = await response.json();

      commit("setUsersInfo", usersInfo);
    },
  },
};
