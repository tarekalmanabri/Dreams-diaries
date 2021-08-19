import axios from "axios";
export const auth = {
  namspaced: true,

  state: () => ({
    token: null,
  }),
  mutations: {
    SET_TOKEN(state, token) {
      console.log(state, token);
      state.token = token;
    },
  },
  actions: {
    async signIn({ commit }, credentials) {
      const res = await axios.post("login", credentials);
      commit("SET_TOKEN", res.data.token);
    },
  },
};
