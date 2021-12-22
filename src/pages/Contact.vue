<script setup lang="ts">
</script>

<template>
  <div class="flex md:space-x-6 px-5 md:px-16 py-16 items-center">
    <div class="hidden md:block flex-1">
      <img class="object-cover" src="/images/contact.svg" alt="Image" />
    </div>

    <div class="flex-1">
      <div
        class="bg-gray-50 rounded-md shadow-lg shadow-cyan-300/50 block max-w-96 p-8 border-2 border-cyan-500"
      >
        <h1 class="font-semibold text-2xl text-gray-500 p-4">Contact Us</h1>

        <form class="md:mt-8 flex flex-col space-y-4">
          <div>
            <input
              class="outline-none w-full p-4 rounded ring-1 focus:ring"
              placeholder="Your Name"
              type="email"
            />
          </div>

          <div>
            <input
              class="outline-none w-full p-4 rounded ring-1 focus:ring"
              placeholder="Your Email"
              type="password"
            />
          </div>
          <div>
            <textarea
              class="w-full outline-none py-4 ring-1 focus:ring rounded px-5"
              placeholder="Your Question or Comment"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button class="w-full text-white button-form">Send</button>
        </form>
      </div>

      <div class="flex flex-col space-y-5 items-center md:items-start py-14 px-5 md:px-20">
        <h1 class="text-3xl font-semibold font-mono text-cyan-600">Follow Us</h1>
        <div class="flex space-x-4">
          <i
            class="fab fa-twitter text-3xl text-[#1d9bf0] cursor-pointer hover:scale-110"
          ></i>
          <i
            class="fab fa-instagram text-3xl text-[#8134AF] cursor-pointer hover:scale-110"
          ></i>
          <i
            class="fab fa-facebook text-3xl text-gray-500 cursor-pointer hover:scale-110"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>