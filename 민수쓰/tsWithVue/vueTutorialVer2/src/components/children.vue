<template>
  <div>
    <div>
      {{ message }}
    </div>
  </div>
</template> <script lang="ts">
//1. ts명시
import { Component, Prop, Vue, Watch, Emit, Model, Inject} from "vue-property-decorator"; //2. import
@Component
export default class Children extends Vue {
  @Inject() readonly message!: string;
}
</script> <style>
</style>

