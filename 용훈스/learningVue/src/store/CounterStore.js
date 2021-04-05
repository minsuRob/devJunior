import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const counterStore = new Vuex.Store({
  state: {
    number: 0
  },
  mutations: {
    increase: (state, payload) => {
      return state.number++;
    },
    decrease: (state, payload) => {
      return state.number--;
    },
  },
  getters: {
    getNumber: (state) => {
      return state.number;
    }
  },
});
