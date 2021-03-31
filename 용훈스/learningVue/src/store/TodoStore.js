const state = {
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
};

const mutations = {
  changeNewTodo (state, value) {
    state.newTodo = value;
  }
}

const actions = {
  onChangeNewTodo({ state, commit }, value) {
    commit('changeNewTodo', value)
    this.newTodo = value;
  },
}

const getters = {
  getNewTodo(state) {
    return state.newTodo;
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}
