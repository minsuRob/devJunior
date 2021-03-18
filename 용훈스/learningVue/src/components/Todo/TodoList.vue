<template>
  <div>
    <div v-for="item in todoList" v-bind:key="item.id">
      {{item.todo}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  props: {
    todoList: Array,
  },
};
</script>
