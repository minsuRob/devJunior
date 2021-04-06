<template>
  <div class="list-box">
    <TodoListItem
      v-for="item in getTodoList"
      v-bind:key="item.id"
      v-bind:item="item"
    ></TodoListItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoListItem from '@/components/Todo/TodoListItem';

export default {
  components: {
    TodoListItem,
  },
  computed: {
    ...mapGetters([
      'getTodoList'
    ]),
  }
};
</script>
