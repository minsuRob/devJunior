<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/message.vue'; // @ is an alias to /src

@Options({
  components: {
    message,
  },
})
export default class Home extends Vue {}
</script>
