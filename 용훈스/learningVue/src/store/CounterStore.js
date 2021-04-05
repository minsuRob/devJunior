import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const counterStore = new Vuex.Store({
  state: {
    number: 0
  },
});
