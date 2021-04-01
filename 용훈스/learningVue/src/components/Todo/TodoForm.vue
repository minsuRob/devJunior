<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      class="todo-item"
    >
      <div class="todo-form">
        <v-text-field
          v-model="newTodo"
          @keyup="(e) => onChangeNewTodo(e)"
          label="Add To Do"
          outlined
          clearable
        >
          <template v-slot:append>
            <font-awesome-icon
              :icon="faPaperPlane"
              class="faPaperPlane"
              @click="onAddTodo"
            />
          </template>
        </v-text-field>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default {
  props: {
    newTodo: String,
    onChangeNewTodo: Function,
    onAddTodo: Function,
  },
  data() {
  },
  computed: {
    faPaperPlane() {
      return faPaperPlane;
    },
  },
};
</script>

<style>
  .todo-form {
    display: flex;
    align-items: center;
  }
  .todo-form .v-input__slot {
    background-color: #fff !important;
    border-radius: 0;
  }
  .todo-form fieldset {
    border-radius: 0;
    border: 0;
    border-top: 1px solid #eaeaea;
  }
  .faPaperPlane {
    cursor: pointer;
    color: #5962fd;
    font-size: 20px;
  }
  .faPaperPlane:hover {
    opacity: 0.7;
  }
</style>
