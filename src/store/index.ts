import Vue from "vue";
import Vuex from "vuex";
import axios from "../plugins/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: ""
  },
  mutations: {
    MUTATE_NAME(state, name) {
      state.name = name;
    }
  },
  actions: {
    async getName({ commit }, name: string) {
      const res = await axios({
        url: `/search/${name}`,
        method: "GET"
      });
      return res;
    },
    async deleteName(context, name: string) {
      const res = await axios({
        url: `/delete/${name}`
      })
      return res;
    },
    async insertName(context, name: string) {
      const res = await axios({
        url: `/add/${name}`
      });
      return res;
    }
  },
  modules: {}
});
