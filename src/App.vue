<script setup lang="ts">
  import Message from './components/Message.vue';

  // All JavaScript logic will go here.

  let message = 'Vue is Amazing! 😃';

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <h1>Hello Real VueJS!</h1>
  <h1>This thing is amazing!</h1>
  <h4>{{ message }}</h4>

  <Message />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: green;
}
</style>
