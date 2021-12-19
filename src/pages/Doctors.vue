<<script setup lang="ts"></script>

<template>
  <div class="flex justify-center">
    <h1
      class="
        text-center
        font-bold
        bg-gradient-to-r
        from-green-500
        to-blue-500
        text-transparent
        bg-clip-text
        text-6xl
        shadow-lg
        rounded-2xl
        p-4
        hover:from-blue-500 hover:to-green-500
      "
    >
      Doctors
    </h1>
  </div>
  <div class="md:flex justify-start">
    <div class="mx-8 mt-2 mb-12 md:max-w-lg md:h-full md:my-12 bg-cyan-50">
      <div class="px-9 md:px-8 py-4">
        <img
          class="
            shadow-md
            rounded-lg
            object-cover
            transition
            duration-300
            hover:scale-90
          "
          src="images/stoc.jpg"
          alt=""
        />
      </div>

      <div class="flex flex-col">
        <span class="font-semibold text-2xl px-8">Dr. Ruby Perrin </span>
        <span class="block text-gray-500 text-sm px-8 mt-2"
          >MDS - Periodontology and Oral Implantology, BDS</span
        >
      </div>
      <div class="text-center">
        <button
          class="
            rounded-lg
            text-white
            bg-cyan-500
            transition
            hover:bg-cyan-400
            my-10
            px-28
            py-1
          "
        >
          Book Now
        </button>
      </div>
    </div>

    <div class="mx-8 mt-2 mb-12 md:max-w-lg md:h-full md:my-12 bg-cyan-50">
      <div class="px-9 md:px-8 py-4">
        <img
          class="
            shadow-md
            rounded-lg
            object-cover
            transition
            duration-300
            hover:scale-90
            h-full
            w-full
          "
          src="images/istockphoto.jpg"
          alt=""
        />
      </div>

      <div class="flex flex-col">
        <span class="font-semibold text-2xl px-8">Dr. Ruby Perrin </span>
        <span class="block text-gray-500 text-sm px-8 mt-2"
          >MDS - Periodontology and Oral Implantology, BDS</span
        >
      </div>
      <div class="text-center">
        <button
          class="
            rounded-lg
            text-white
            bg-cyan-500
            transition
            hover:bg-cyan-400
            my-10
            px-28
            py-1
          "
        >
          Book Now
        </button>
      </div>
    </div>

    <div class="mx-8 mt-2 mb-12 md:max-w-lg md:h-full md:my-12 bg-cyan-50">
      <div class="px-9 md:px-8 py-4">
        <img
          class="
            shadow-md
            rounded-lg
            object-cover
            transition
            duration-300
            hover:scale-90
            h-full
            w-full
          "
          src="images/pic.jpg"
          alt=""
        />
      </div>

      <div class="flex flex-col">
        <span class="font-semibold text-2xl px-8">Dr. Ruby Perrin </span>
        <span class="block text-gray-500 text-sm px-8 mt-2"
          >MDS - Periodontology and Oral Implantology, BDS</span
        >
      </div>
      <div class="text-center">
        <button
          class="
            rounded-lg
            text-white
            bg-cyan-500
            transition
            hover:bg-cyan-400
            my-10
            px-28
            py-1
          "
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
</template>
