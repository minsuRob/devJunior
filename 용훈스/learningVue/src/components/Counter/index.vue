<template>
  <div>
    <p>{{ number }}</p>
    <button v-on:click="onIncrease">증가</button>
    <button v-on:click="onDecrease">감소</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    onIncrease() {
      this.number++
    },
    onDecrease() {
      this.number--
    }
  }
};
</script>
