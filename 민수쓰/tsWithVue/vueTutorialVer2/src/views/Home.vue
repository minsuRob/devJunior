<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <message></message>
    <children :parentMessage="message"></children>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import message from '@/components/message.vue'; // @ is an alias to /src
import children from '@/components/children.vue'; // @ is an alias to /src

@Component({
  components: {
    message,
    children,
  },
})
export default class Home extends Vue {
  message:string = 'hello world';

}
</script>
