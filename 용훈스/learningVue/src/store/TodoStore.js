import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const todoStore = new Vuex.Store({
  state: {
    newTodo: '',
    sequence: 2,
    updateValue: '',
    todoList: [{
      id: 0,
      todo: '문화콘텐츠 과제 제출',
      updateStatus: false,
      completionStatus: false,
    }, {
      id: 1,
      todo: '현대사회와 윤리 퀴즈 제출',
      updateStatus: false,
      completionStatus: false,
    }],
  },
  mutations: {
    changeNewTodo (state, value) {
      state.newTodo = value;
    },
    addTodo (state, todo) {
      const { todoList, sequence, newTodo } = state;
      const newData = {
        id: sequence + 1,
        todo: newTodo,
        updateStatus: false,
        completionStatus: false,
      };
      state.todoList = todoList.concat(newData);
    },
  },
  getters: {
    getNewTodo: (state) => {
      return state.newTodo;
    }
  },
});
