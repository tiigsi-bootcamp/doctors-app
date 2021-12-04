<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  
  <RouterLink to="/doctors" class="button mr-2">Doctors</RouterLink>
  <RouterLink to="/login" class="button">Login</RouterLink>

  <RouterView />
</template>
