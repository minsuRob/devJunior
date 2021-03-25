<template>
  <div>
    <div v-if="item.updateStatus" @keyup="onChangeUpdate">
      <input type="text" v-bind:value="updateValue">
      <button @click="() => onUpdateToggle(item.id)">취소</button>
      <button @click="() => onUpdateHandle(item.id)">수정</button>
    </div>
    <div v-if="!item.updateStatus">
      <div
        v-bind:class="{complete : item.completionStatus}"
        @click="() => onCheckHandle(item.id)"
      >
        {{item.todo}}
      </div>
      <button @click="() => onUpdateToggle(item.id)">수정</button>
      <button @click="() => onDeleteHandle(item.id)">삭제</button>
    </div>
  </div>
</template>

<style>
  .complete {
    text-decoration-line: line-through;
  }
</style>

<script>
export default {
  props: {
    item: Object,
    updateValue: String,
  },
  data() {
    return {
    };
  },
  methods: {
    onUpdateHandle(id) {
      this.$emit('updateHandle', id);
    },
    onUpdateToggle(id) {
      this.$emit('updateToggle', id);
    },
    onChangeUpdate(e) {
      this.$emit('changeHandle', e.target.value);
    },
    onDeleteHandle(id) {
      this.$emit('deleteTodo', id);
    },
    onCheckHandle(id) {
      this.$emit('completeTodo', id);
    },
  },
};
</script>
