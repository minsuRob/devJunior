<template>
  <div>
    <TodoListItem
      v-for="item in todoList"
      v-bind:key="item.id"
      v-bind:item="item"
      @deleteTodo="deleteTodo"
    ></TodoListItem>
  </div>
</template>

<script>
import TodoListItem from '@/components/Todo/TodoListItem';

export default {
  components: {
    TodoListItem,
  },
  props: {
    todoList: Array,
  },
  methods: {
    deleteTodo(id) {
      this.$emit('deleteTodo', id);
    },
  },
};
</script>
