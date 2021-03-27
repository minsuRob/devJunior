<template>
  <v-row no-gutters>
    <v-col
      cols="11"
      class="todo-item"
    >
      <div class="todo-form">
        <v-text-field
          v-model="propNewTodo"
          @keyup="onChangeHandle"
          label="To Do"
        ></v-text-field>
        <font-awesome-icon
          :icon="plusIcon"
          class="plusIcon"
          @click="onAddHandle"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
  computed: {
    plusIcon() {
      return faPlus;
    },
  },
};
</script>

<style>
  .todo-form {
    display: flex;
    align-items: center;
  }
  .plusIcon {
    cursor: pointer;
    color: #5962fd;
  }
  .plusIcon:hover {
    opacity: 0.7;
  }
</style>
