<script setup lang="ts">
  import Message from './components/Message.vue';
import Button from './components/Button.vue';

  // All JavaScript logic will go here.

  let message = 'Vue is Amazing! 😃';

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <h1 title="Some information">Hello Real VueJS!</h1>
  <h1>This thing is amazing!</h1>
  <h4>{{ message }}</h4>

  <Message message="This is a new message from the other side of the world!" />

  <Button text="Say Hi" />

  <Button text="alert" color="bg-green-500" />

  <Button text="Tada"></Button>
</template>
