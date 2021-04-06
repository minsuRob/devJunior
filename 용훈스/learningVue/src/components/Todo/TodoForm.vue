<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      class="todo-item"
    >
      <div class="todo-form">
        <v-text-field
          v-model="newTodo"
          label="Add To Do"
          outlined
          clearable
        >
          <template v-slot:append>
            <font-awesome-icon
              :icon="faPaperPlane"
              class="faPaperPlane"
              @click="addTodo"
            />
          </template>
        </v-text-field>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations([
      'addTodo',
    ]),
  },
  computed: {
    newTodo: {
      get() {
        return this.$store.state.newTodo;
      },
      set(value) {
        this.$store.commit('changeNewTodo', value);
      }
    },
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
