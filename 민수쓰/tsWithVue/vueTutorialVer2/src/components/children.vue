<template>
  <div>
    <div>{{ parentMessage }}</div>
  </div>
</template> <script lang="ts">
//1. ts명시
import { Component, Prop, Vue } from "vue-property-decorator"; //2. import 
@Component 
export default class Children extends Vue {
  @Prop() parentMessage?:string;
}
</script> <style>
</style>

