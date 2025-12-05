<template>
  <div>
    <Navbar />
    <h2 class="text-2xl font-playfair text-yellow-700 mb-6">Categories</h2>

    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <!-- Skeleton while loading -->
      <template v-if="loading">
        <li
          v-for="n in 6"
          :key="n"
          class="
            bg-white/10
            backdrop-blur-md
            border border-white/20
            rounded-xl
            p-4
            animate-pulse
            h-16
          "
        ></li>
      </template>

      <!-- Real categories -->
      <template v-else>
        <li
          v-for="c in categories"
          :key="c.id"
          class="
            bg-white/10
            backdrop-blur-md
            border border-white/20
            rounded-xl
            p-4
            text-gray-200
            font-medium
            hover:shadow-lg
            hover:-translate-y-1
            transition
          "
        >
          {{ c.label }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCategories } from '../api/use-categories'
import Navbar from "../composable/navbar.vue";
const { categories, fetchCategories } = useCategories();
const loading = ref(true);

fetchCategories().finally(() => (loading.value = false));
</script>
