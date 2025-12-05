<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <div class="max-w-5xl mx-auto px-4 py-12 mt-20">
      <!-- Hero Section -->
      <div
        class="
          bg-white/10
          backdrop-blur-md
          border border-white/20
          rounded-2xl
          p-8
          shadow-lg
          text-center
        "
      >
        <h1
          class="
            font-playfair
            text-4xl
            text-yellow-700
            mb-4
          "
        >
          API Exercise
        </h1>

        <p class="text-gray-200 mb-6">
          This app demonstrates API fetching, pagination, composables, and Vue stores using the Booze API.
        </p>

        <button
          @click="goCocktails"
          class="
            inline-block
            px-6
            py-3
            rounded-xl
            border
            border-yellow-700
            text-yellow-700
            font-semibold
            hover:bg-yellow-700/20
            transition
          "
        >
          View Cocktails →
        </button>
      </div>

      <!-- Category List -->
      <category-list class="mt-12" />
    </div>
  </div>
</template>

<script setup lang="ts">

import Navbar from "../composable/navbar.vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Navigate programmatically using router.push
const goCocktails = () => {
  router.push({ name: "Cocktails" });
};
</script>
