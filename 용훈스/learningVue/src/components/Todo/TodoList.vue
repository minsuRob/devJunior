<template>
  <div>
    <TodoListItem
      v-for="item in todoList"
      v-bind:key="item.id"
      v-bind:item="item"
      v-bind:updateValue="updateValue"
      @deleteTodo="deleteTodo"
      @updateToggle="updateToggle"
      @updateHandle="updateHandle"
      @changeHandle="changeHandle"
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
    updateValue: String,
  },
  methods: {
    updateHandle(id) {
      this.$emit('updateTodo', id);
    },
    updateToggle(id) {
      this.$emit('updateToggle', id);
    },
    deleteTodo(id) {
      this.$emit('deleteTodo', id);
    },
    changeHandle(value) {
      this.$emit('changeHandle', value);
    },
  },
};
</script>
