<script setup lang="ts">
	// TODO: 
</script>

<template>

	<h1 class="text-4xl text-center text-purple-500">
		Login Page
	</h1>
	 <div
    class="
      max-w-xl
      rounded-lg
      shadow-md shadow-blue-500/30
      lg:max-w-2xl
      mx-auto
      mt-10
      bg-white
      px-5
      space-y-10
      flex flex-col
      py-10
    "
  >
  <h1 class="text-center text-4xl font-semibold text-gray-600">Login Form</h1>
    <div class="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder=" Enter User Name"
        class="
          bg-gray-100
          py-2
          w-[500px]
          px-5
          outline-none
          border-b-2
          focus:border-blue-700
        "
      />
      <input
        type="text"
        placeholder=" Enter Password"
        class="
          bg-gray-100
          py-2
          w-[500px]
          px-5
          outline-none
          border-b-2
          focus:border-blue-700
        "
      />
      <p class="text-left w-full tracking-wider text-gray-600 hover:text-blue-500  pl-16">Forget Password ?</p>
    </div>
    <button
      class="
      bg-gradient-to-r from-green-500 to-blue-500
        px-8
        w-64
        mx-auto
        text-white
        rounded-lg
        font-bold
        tracking-widest
        py-3
        font-mono
        text-xl
        shadow-lg
      "
    >
      Sing In
    </button>
     <p class="text-left w-full tracking-wider text-gray-600   pl-16">Not a Member ? <span class="hover:text-pink-600">SingUp</span></p>
  </div>

</template>