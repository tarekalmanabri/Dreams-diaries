import axios from "axios";

export const dreams = {
  namespaced: true,

  state: () => ({
    dreams: [],
  }),

  actions: {
    async getDreams({ commit }) {
      const response = await axios.get("dreams");

      commit("SET_DREAMS", response.data.data.dreams);
    },

    async saveDream({ commit }, dreamContent) {
      const response = await axios.post("dreams", {
        data: {
          dreams: [
            {
              content: dreamContent,
            },
          ],
        },
      });

      commit("ADD_DREAMS", response.data.data.dreams);
    },
  },

  mutations: {
    ADD_DREAMS(state, dreams) {
      state.dreams = [...state.dreams, ...dreams];
    },

    SET_DREAMS(state, dreams) {
      state.dreams = dreams;
    },
  },
};
