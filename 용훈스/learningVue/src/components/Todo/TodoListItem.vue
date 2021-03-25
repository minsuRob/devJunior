<template>
  <div>
    {{item.todo}}
    <button @click="() => onDeleteHandle(item.id)">삭제</button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
    };
  },
  methods: {
    onDeleteHandle(id) {
      this.$emit('deleteTodo', id);
    },
  },
};
</script>
