<script setup lang="ts">
import DoctorsCard from "../components/DoctorsCard.vue";
 // Logic.

</script>

<template>
	<h1 class="text-4xl text-center py-2">Doctor List</h1>
  <div class="grid md:grid-cols-3 mt-5 md:mx-5 gap-y-3">
    <DoctorsCard Name="Dr.Gaboose" specialty="( Maskaxda  )">
      <img
        src="public/images/gaboose.jpg"
        class="
          transform
          hover:scale-105
          ob
          duration-500
          w-full
          object-cover object-right
          h-full
          filter
          brightness-90
          hover:brightness-100
        "
        alt=""
      />
    </DoctorsCard>
    <DoctorsCard Name="Dr.Maria" specialty=" ( Ilkaha ) ">
      <img
        src="public/images/Dr.ilkaha.jpg"
        class="
          transform
          hover:scale-105
          duration-500
          object-cover object-center
          h-full
          w-full
          filter
          brightness-90
          hover:brightness-100
        "
        alt=""
      />
    </DoctorsCard>
    <DoctorsCard Name="Dr.Hassan" specialty=" ( Wadnaha ) " >
        <img
        src="public/images/Dr.wadnaha.jpg"
        class="
          transform
          hover:scale-105
          object-cover object-left
          duration-500
          h-full
          w-full
          filter
          brightness-90
          hover:brightness-100
        "
        alt=""
      />
    </DoctorsCard>
  </div>
</template>