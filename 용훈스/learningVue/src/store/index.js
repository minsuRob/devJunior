import Vue from 'vue';
import Vuex from 'vuex';

import TodoStore from './TodoStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TodoStore: TodoStore
  }
})
