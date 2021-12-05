<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { RouterView, RouterLink } from 'vue-router';

let isMenuHidden = ref(true);
const toggleMenu = () => {
  isMenuHidden.value = !isMenuHidden.value;

  console.log('Is menu hidden', isMenuHidden);
};
</script>

<template class="bg-gray-200">
  <nav class="max-w-6xl mx-auto bg-gray-100 shadow-lg">
    <div class="flex justify-between items-center px-4">
      <div class="flex space-x-8">
        <div>
          <RouterLink to="/">
            <span
              class="block py-4 text-transparent bg-clip-text text-lg font-bold bg-gradient-to-r from-green-500 to-blue-500"
            >Doctors App</span>
          </RouterLink>
        </div>

        <ul class="hidden md:flex space-x-2 items-center">
          <li>
            <RouterLink to="#" class="nav-item">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="#" class="nav-item">Doctors</RouterLink>
          </li>
          <li>
            <RouterLink to="#" class="nav-item">Contact</RouterLink>
          </li>
        </ul>
      </div>

      <div class="hidden md:flex space-x-2">
        <RouterLink to="/login" class="button hover:bg-pink-500 hover:text-white">Login</RouterLink>
        <RouterLink to="/signup" class="button button-pink">Signup</RouterLink>
      </div>

      <button class="md:hidden text-gray-600" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div class="bg-blue-400 w-64 transform fixed left-0 top-0 h-screen transition" :class="{ '-translate-x-64': isMenuHidden }">Menu</div>
  </nav>

  <RouterView />

  <!-- Footer will go here -->
</template>
