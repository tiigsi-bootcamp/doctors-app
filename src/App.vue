<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';

// Refactoring!

</script>

<template class="bg-gray-200">
  <Navbar />

  <div class="py-10"></div>

  <RouterView />

  <!-- Footer will go here -->
</template>
