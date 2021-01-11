<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <message></message>
    <button @click="changeMsg">메세지 바꿔용</button>
    <my-check-box v-model="checked" @change="change"></my-check-box>
    {{text}}!<!---->
    <children></children>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import message from "@/components/message.vue"; // @ is an alias to /src
import children from "@/components/children.vue"; // @ is an alias to /src

@Component({
  components: {
    message,
    children,
  },
})
export default class Home extends Vue {
  message: string = "hello world";
  checked: boolean = false;
  text:string = '동의X'

  @Provide('message') msg: string = "provide/index sample";

  changeMsg() {
    this.message = "change";
  }
}
</script>
