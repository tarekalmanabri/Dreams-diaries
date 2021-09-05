import axios from "axios";
export const auth = {
  namspaced: true,

  state: () => ({
    token: null,
  }),
  getters: {
    authenticated(state) {
      return state.token;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    async signIn({ commit }, credentials) {
      const res = await axios.post("login", credentials);
      commit("SET_TOKEN", res.data.token);

      axios.defaults.headers = {
        Authorization: res.data.token,
      };
    },

    signOut({ commit }) {
      commit("SET_TOKEN", null);

      axios.defaults.headers = {
        Authorization: null,
      };
    },
  },
};
