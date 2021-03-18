<template>
  <div>
    <div>To-Do List</div>
    <TodoForm v-bind:newTodo="newTodo"></TodoForm>
    <TodoList v-bind:todoList="todoList"></TodoList>
  </div>
</template>

<script>
import TodoForm from '@/components/Todo/TodoForm';
import TodoList from '@/components/Todo/TodoList';

export default {
  data() {
    return {
      newTodo: '',
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
};
</script>
