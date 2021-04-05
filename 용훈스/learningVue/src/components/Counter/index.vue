<template>
  <div>
    <p>{{ getNumber }}</p>
    <button v-on:click="increase">증가</button>
    <button v-on:click="decrease">감소</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    ...mapMutations([
      'increase',
      'decrease',
    ]),
  },
  computed: {
    ...mapGetters([
      'getNumber'
    ]),
  },
};
</script>
