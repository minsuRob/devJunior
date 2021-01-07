<template>
  <div>
    <div>
      <p>{{ alertMsg }}</p>
      {{ parentMessage }}
    </div>
  </div>
</template> <script lang="ts">
//1. ts명시
import { Component, Prop, Vue, Watch } from "vue-property-decorator"; //2. import
@Component
export default class Children extends Vue {
  @Prop() parentMessage?: string;
  alertMsg: string = '';
  
  @Watch('parentMessage', {immediate: false, deep: true})
  update(val: string, oldVal : string) {
    this.alertMsg = 'complete update msg'
  }
}
</script> <style>
</style>

