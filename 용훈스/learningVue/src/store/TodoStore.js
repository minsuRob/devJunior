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
      state.newTodo = '';
      state.sequence = state.sequence + 1;
    },

    deleteTodo(state, id) {
      state.todoList = state.todoList.filter(v => v.id !== id);
    },

    updateToggle(state, id) {
      state.updateValue = state.todoList.find(v => v.id === id).todo;
      state.todoList = state.todoList.map(v =>
        (v.id === id ? { ...v, updateStatus: !v.updateStatus } : v),
      );
    },

    updateChangeHandle(state, value) {
      state.updateValue = value;
    },

    updateTodo(state, id) {
      state.todoList = state.todoList.map(v =>
        (v.id === id ? { ...v, todo: state.updateValue, updateStatus: !v.updateStatus } : v),
      );
    },

    completeTodo(state, id) {
      state.todoList = state.todoList.map(v =>
        (v.id === id ? { ...v, completionStatus: !v.completionStatus } : v),
      );
    },
  },

  actions: {
    getData: async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log(data);
    }
  },

  getters: {
    getTodoList: (state) => {
      return state.todoList;
    },

    getUpdateValue: (state) => {
      return state.updateValue;
    },

    getNewTodo: (state) => {
      return state.newTodo;
    }
  },
});
