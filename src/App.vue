<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { RouterView, RouterLink } from 'vue-router';

let isMenuHidden = ref(true);
const toggleMenu = () => {
  isMenuHidden.value = !isMenuHidden.value;
};

const handleSearch = () => {
  console.log('Handle submit');
};

</script>

<template class="bg-gray-200">
  <div
    v-if="isMenuHidden === false"
    @click="toggleMenu"
    class="bg-gray-500 h-screen w-screen fixed md:hidden bg-opacity-25"
  ></div>

 <div class="fixed w-full md:px-20">
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

    <div
      class="bg-blue-100 w-64 transform fixed md:hidden left-0 top-0 h-screen transition duration-1000 flex flex-col space-y-10 items-center justify-center"
      :class="{ '-translate-x-64': isMenuHidden }"
    >
      <h4
        class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
      >Doctors App</h4>

      <ul class="w-64 text-center">
        <li>
          <RouterLink
            to="/"
            class="block border-b border-blue-200 py-5 px-3 font-semibold tracking-widest transition hover:bg-blue-200 rounded-2xl shadow-lg"
          >Home</RouterLink>
        </li>
        <li>
          <RouterLink
            to="/doctors"
            class="block border-b border-blue-200 py-5 px-3 font-semibold tracking-widest transition hover:bg-blue-200 rounded-2xl shadow-lg"
          >Doctor</RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="block border-b border-blue-200 py-5 px-3 font-semibold tracking-widest transition hover:bg-blue-200 rounded-2xl shadow-lg"
          >Contact</RouterLink>
        </li>
      </ul>

      <div class="flex space-x-2 pt-10">
        <RouterLink to="/login" class="button hover:bg-pink-500 hover:text-white">Login</RouterLink>
        <RouterLink to="/signup" class="button button-pink">Signup</RouterLink>
      </div>
    </div>
  </nav>
  </div>

  <div class="flex md:space-x-5 h-screen px-4 md:px-24 py-36">
    <div class="hidden md:block flex-1">
      <img src="/images/medicine.svg" />
    </div>

    <div class="flex-1">
      <div class="p-8 max-w-96 bg-gray-50 shadow-lg rounded-lg">
        <h1 class="text-2xl text-gray-600 text-center font-semibold">Book doctors</h1>

        <form @submit.prevent="handleSearch" class="mt-8 flex flex-col space-y-4">
          <div>
            <input placeholder="Location" class="py-2 px-4 w-full outline-none ring-1 rounded focus:ring">
          </div>
          
          <div>
            <select class="py-2 px-4 w-full outline-none ring-1 rounded focus:ring">
              <option selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          
          <div>
            <select class="py-2 px-4 w-full outline-none ring-1 rounded pointer-events-none focus:ring">
              <option selected>Select Specialty</option>
              <option value="Nerves">Nerves</option>
              <option value="Kaylyo">Kalyo</option>
              <option value="Wadno">Wadno</option>
              <option value="Ilko">Ilko</option>
            </select>
          </div>

          <div class="pt-4 text-center">
            <button type="submit" class="button bg-green-500 text-white w-48 tracking-widest text-lg">Search</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <RouterView />

  <!-- Footer will go here -->
</template>
