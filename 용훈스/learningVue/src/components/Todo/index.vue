<template>
  <v-container class="lighten-5 custom-container">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        class="main-col"
      >
        <v-card
          class="custom-card"
          outlined
          tile
        >
          <v-card-title class="custom-title">
            <span class="custom-sub-title">TO DO</span>
            <span>LIST</span>
          </v-card-title>
          <TodoList></TodoList>
        </v-card>
        <TodoForm></TodoForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoForm from '@/components/Todo/TodoForm';
import TodoList from '@/components/Todo/TodoList';

export default {
  data() {
    return {};
  },
  components: {
    TodoForm,
    TodoList,
  },
};
</script>

<style>
  .custom-container {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .main-col {
    margin: 0 auto;
  }
  .custom-title {
    flex-direction: column;
    align-items: start !important;
    margin-left: 12px;
    font-size: 2rem;
    font-weight: 700;
    color: #5962fd;
  }
  .custom-sub-title {
    font-size: 1.4rem;
    font-weight: 500;
  }
  .custom-card {
    background-color: #fdfdfd !important;
    border: 0 !important;
    padding: 16px 12px 28px 12px;
  }
</style>
