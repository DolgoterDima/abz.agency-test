export default {
  namespaced: true,
  state: {
    usersInfo: {
      users: [],
      total_pages: 0,
    },
  },
  getters: {
    getUsers: ({ usersInfo }) => {
      return usersInfo.users?.sort(
        (a, b) => a?.registration_timestamp + b?.registration_timestamp
      );
    },
    getUsersTotalPages: (state) => state.usersInfo.total_pages,
  },
  mutations: {
    SET_USERS_INFO(state, { usersInfo, pageCount }) {
      const { users = [], total_pages } = usersInfo || {};

      state.usersInfo.users =
        pageCount === 1 ? [...users] : [...state.usersInfo.users, ...users];

      state.usersInfo.total_pages = total_pages;
    },
  },
  actions: {
    async fetchUsersAction({ commit }, payload = 1) {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${payload}&count=6`
      );
      const usersInfo = await response.json();

      commit("SET_USERS_INFO", { usersInfo: usersInfo, pageCount: payload });
    },

    async sendFormData({ commit, rootGetters }, payload) {
      const formData = new FormData();
      for (const key in payload) {
        formData.append(key, payload[key]);
      }

      const { getToken } = rootGetters;
      const options = {
        method: "POST",
        body: formData,
        headers: { Token: getToken },
      };

      return await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        options
      ).then((response) => response.json());
    },
  },
};
