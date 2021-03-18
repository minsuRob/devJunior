<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/todo">todo</router-link>
    <router-link to="/counter">counter</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
</style>
