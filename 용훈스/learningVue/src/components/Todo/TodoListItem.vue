<template>
  <v-row no-gutters>
    <v-col
      cols="12"
    >
      <v-card class="custom-todo-card mx-lg-auto">
        <div v-if="item.updateStatus" @keyup="onChangeUpdate">
          <input type="text" v-bind:value="updateValue">
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
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <font-awesome-icon
                :icon="moreIcon"
                v-bind="attrs"
                v-on="on"
              />
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
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

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
  computed: {
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
    box-shadow: 2px 2px 12px 7px #f1f1f1 !important;
    margin: 8px 16px 8px 16px;
    padding: 20px 12px;
    text-align: left;
  }
  .todo-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #000;
  }
  .d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
