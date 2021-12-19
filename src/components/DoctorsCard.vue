<script setup lang="ts">
defineProps<{ name: string, specialty: string }>();
</script>

<template>
	<div class="mx-8 mt-2 mb-12 md:max-w-lg md:my-12 bg-cyan-50 rounded-lg shadow-lg shadow-cyan-300/50">
		<div class="px-9 md:px-8 py-4">
			<slot>
				<img
					class="shadow-md rounded-lg object-cover transition duration-300 hover:scale-90"
					src="images/stoc.jpg"
				/>
			</slot>
		</div>

		<div class="flex flex-col">
			<span class="font-semibold text-2xl px-8">{{ name }}</span>
			<span
				class="block text-gray-500 text-sm px-8 mt-2"
			>{{ specialty }}</span>
		</div>
		<div class="text-center">
			<button
				class="rounded-lg text-white bg-cyan-500 transition hover:bg-cyan-400 my-10 px-10 lg:px-28 py-1"
			>Book Now</button>
		</div>
	</div>
</template>