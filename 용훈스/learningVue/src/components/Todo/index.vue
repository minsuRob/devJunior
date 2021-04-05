<template>
  <v-container class="lighten-5 custom-container">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        class="main-col"
      >
        <v-card
          class="custom-card"
          outlined
          tile
        >
          <v-card-title class="custom-title">
            <span class="custom-sub-title">TO DO</span>
            <span>LIST</span>
          </v-card-title>
          <TodoList
            v-bind:todoList="todoList"
            v-bind:updateValue="updateValue"
            @updateTodo="updateTodo"
            @updateToggle="updateToggle"
            @deleteTodo="deleteTodo"
            @changeHandle="changeHandle"
            @completeTodo="completeTodo"
          ></TodoList>
        </v-card>
        <TodoForm
          v-bind:newTodo="getNewTodo"
          v-bind:onChangeNewTodo="onChangeNewTodo"
          v-bind:onAddTodo="onAddTodo"
        >
        </TodoForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
import TodoForm from '@/components/Todo/TodoForm';
import TodoList from '@/components/Todo/TodoList';

export default {
  data() {
    return {
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
  },
  components: {
    TodoForm,
    TodoList,
  },
  methods: {
    onChangeNewTodo(e) {
      this.$store.dispatch('onChangeNewTodo', e.target.value);
    },
    onAddTodo() {
      this.$store.dispatch('onAddTodo');
      this.sequenceIncrement();
      this.inputClear();
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter(v => v.id !== id);
    },
    updateToggle(id) {
      this.updateValue = this.todoList.find(v => v.id === id).todo;
      this.todoList = this.todoList.map(v =>
        (v.id === id ? { ...v, updateStatus: !v.updateStatus } : v),
      );
    },
    updateTodo(id) {
      this.todoList = this.todoList.map(v =>
        (v.id === id ? { ...v, todo: this.updateValue, updateStatus: !v.updateStatus } : v),
      );
    },
    completeTodo(id) {
      this.todoList = this.todoList.map(v =>
        (v.id === id ? { ...v, completionStatus: !v.completionStatus } : v),
      );
    },
    changeHandle(value) {
      this.updateValue = value;
    },
    sequenceIncrement() {
      this.sequence = this.sequence + 1;
    },
    inputClear() {
      this.newTodo = '';
    },
  },
  computed: {
    getNewTodo() {
      return this.$store.getters.getNewTodo;
    },
  },
};
</script>

<style>
  .custom-container {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .main-col {
    margin: 0 auto;
  }
  .custom-title {
    flex-direction: column;
    align-items: start !important;
    margin-left: 12px;
    font-size: 2rem;
    font-weight: 700;
    color: #5962fd;
  }
  .custom-sub-title {
    font-size: 1.4rem;
    font-weight: 500;
  }
  .custom-card {
    background-color: #fdfdfd !important;
    border: 0 !important;
    padding: 16px 12px 28px 12px;
  }
</style>
