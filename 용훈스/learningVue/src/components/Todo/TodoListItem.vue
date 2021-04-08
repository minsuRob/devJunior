<template>
  <v-row no-gutters>
    <v-col
      cols="11"
      class="todo-item"
    >
      <v-card class="custom-todo-card mx-lg-auto">
        <div v-if="item.updateStatus">
          <input type="text" v-model="updateVal">
          <button @click="() => onUpdateToggle(item.id)">취소</button>
          <button @click="() => onUpdateHandle(item.id)">수정</button>
        </div>
        <div v-if="!item.updateStatus" class="d-flex">
          <div class="todo-title"
            v-bind:class="{complete : item.completionStatus}"
            @click="() => onCheckHandle(item.id)"
          >
            {{item.todo}}
          </div>
          <v-menu data-app offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <font-awesome-icon
                  :icon="moreIcon"
                  class="moreIcon"
                />
              </div>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <button @click="() => onUpdateToggle(item.id)">수정</button>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <button @click="() => onDeleteHandle(item.id)">삭제</button>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import { mapMutations } from "vuex";
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default {
  props: {
    item: Object,
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations({
      onUpdateToggle: "updateToggle",
      onUpdateHandle: "updateTodo",
      onDeleteHandle: "deleteTodo",
      onCheckHandle: "completeTodo",
    })
  },
  computed: {
    updateVal: {
      get() {
        return this.$store.state.updateValue;
      },
      set(value) {
        this.$store.commit('updateChangeHandle', value);
      }
    },
    moreIcon() {
      return faEllipsisV;
    },
  },
};
</script>

<style>
  .complete {
    text-decoration-line: line-through;
  }
  .custom-todo-card {
    box-shadow: 2px 2px 9px 1px #dadada !important;
    background-color: #fff !important;
    margin: 8px 16px 8px 16px;
    padding: 20px 12px;
    text-align: left;
  }
  .todo-item {
    margin: 0 auto;
  }
  .todo-title {
    font-size: 1rem;
    font-weight: 600;
    color: #000;
  }
  .d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .moreIcon {
    color: #afafaf;
  }
</style>
