<template>
  <div>
    <input type="text" v-model="propNewTodo" @keyup="onChangeHandle">
    <button type="button" @click="onAddHandle">추가</button>
  </div>
</template>

<script>
export default {
  props: ['newTodo'],
  data() {
    return {
      propNewTodo: this.newTodo,
    };
  },
  methods: {
    onChangeHandle(e) {
      this.$emit('onChangeNewTodo', e.target.value);
    },
    onAddHandle() {
      this.$emit('addTodo');
      this.propNewTodo = '';
    },
  },
};
</script>
