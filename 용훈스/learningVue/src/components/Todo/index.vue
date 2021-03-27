<template>
  <v-container class="lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
      >
        <v-card
          class="custom-card"
          outlined
          tile
        >
          <v-card-title class="custom-title">TO DO LIST</v-card-title>
          <TodoForm
            v-bind:newTodo="newTodo"
            @onChangeNewTodo="onChangeNewTodo"
            @addTodo="addTodo"
          >
          </TodoForm>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    onChangeNewTodo(value) {
      this.newTodo = value;
    },
    addTodo() {
      const { todoList, sequence, newTodo } = this;
      const newData = {
        id: sequence + 1,
        todo: newTodo,
        updateStatus: false,
        completionStatus: false,
      };
      this.todoList = todoList.concat(newData);
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
};
</script>

<style>
  .custom-title {
    font-size: 2rem;
    font-weight: 700;
    color: #5962fd;
  }
  .custom-card {
    background-color: #fafafa !important;
  }
</style>
