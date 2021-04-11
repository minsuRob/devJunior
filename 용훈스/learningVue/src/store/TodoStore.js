import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const todoStore = new Vuex.Store({
  state: {
    newTodo: '',
    sequence: 1,
    updateValue: '',
    todoList: [],
  },

  mutations: {
    changeNewTodo (state, value) {
      state.newTodo = value;
    },

    fetchTodo(state, { id, title }) {
      const newData = {
        id: id,
        todo: title,
        updateStatus: false,
        completionStatus: false,
      };
      state.todoList = state.todoList.concat(newData);
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
    getData: async (context) => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const { title, id } = await data.json();

        context.commit('fetchTodo', { id, title });
        console.log(title);
      } catch(e) {
        console.error(e);
      }
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
