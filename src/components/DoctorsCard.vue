<script setup lang="ts">
   defineProps<{Name:string, specialty:string}>();
</script>

<template>
  <div class="bg-white px-5 max-w-lg md:max-w-md space-y-3 py-5 mx-auto rounded-lg shadow-lg">
    <div class="h-64 w-[410px] mx-auto rounded-lg overflow-hidden">
      <slot></slot>
    </div>
    <div class="flex items-center justify-between">
      <h1 class="text-3xl">{{Name}}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-blue-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
	<p class="text-gray-600 pb-5">{{specialty}}</p>
	<button class="bg-blue-500 text-center w-full py-3 text-xl font-semibold text-white transition rounded-xl border-2 tracking-widest border-blue-500 hover:bg-blue-100 hover:text-blue-500 shadow-md">Book Now</button>
  </div>
</template>