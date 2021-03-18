<template>
  <div>
    <input type="text" v-model="newTodo">
    <button type="button">추가</button>
    <div>{{newTodo}}</div>
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
    newTodo: String,
  },
};
</script>
