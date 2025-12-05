<template>
    <Navbar />
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <!-- Skeleton while loading -->
    <template v-if="loading">
      <div
        v-for="n in 6"
        :key="n"
        class="
          bg-white/10
          backdrop-blur-md
          border border-white/20
          rounded-2xl
          p-4
          animate-pulse
          h-64
        "
      ></div>
    </template>

    <!-- Real cocktails -->
    <template v-else>
      <div
        v-for="c in cocktails"
        :key="c.id"
        class="
          bg-white/10
          backdrop-blur-md
          border border-white/20
          rounded-2xl
          overflow-hidden
          p-4
          hover:shadow-lg
          hover:-translate-y-1
          transition
        "
      >
        <img
          :src="c.image"
          alt=""
          class="
            w-full
            h-40
            object-cover
            rounded-xl
            mb-3
            border border-yellow-700/30
          "
        />

        <h3 class="text-lg font-playfair text-yellow-700 mb-1">{{ c.name }}</h3>
        <p class="text-gray-200 text-sm uppercase tracking-wide">Glass: {{ c.glass_type.label }}</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCocktails } from '../api/use-cocktails'
import Navbar from "../composable/navbar.vue";
const { cocktails, fetchCocktails } = useCocktails();
const loading = ref(true);

fetchCocktails(1).finally(() => (loading.value = false));
</script>
