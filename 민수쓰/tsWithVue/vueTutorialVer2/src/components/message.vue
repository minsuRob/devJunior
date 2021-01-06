<template>
  <div>
    <input type="text" v-model="message" />
    <div>{{ message }}</div>
  </div>
</template> <script lang="ts">
//1. ts명시
import { Component, Vue } from "vue-property-decorator"; //2. import 
@Component //3. Component 데코레이터 명시
export default class Message extends Vue {
  //4. 클래스 이름과 뷰 상속받기
  message: string = "메세지를 입력해주세요";
}
</script> <style>
</style>

