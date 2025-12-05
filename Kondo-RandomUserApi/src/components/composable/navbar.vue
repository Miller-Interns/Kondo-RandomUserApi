<template>
  <nav
    class="
      fixed
      top-0
      w-full
      z-50
      backdrop-blur-md
      bg-white/10
      border-b
      border-white/20
      shadow-md
    "
  >
    <div
      class="
        max-w-6xl
        mx-auto
        px-4
        py-4
        flex
        justify-between
        items-center
      "
    >
      <!-- Logo -->
      <div
        class="
          font-playfair
          text-xl
          text-yellow-700
          tracking-wide
          cursor-pointer
        "
        @click="goHome"
      >
        Booze Lounge
      </div>

      <!-- Links -->
      <div class="flex gap-6">
        <div
          class="
            relative
            text-gray-200
            hover:text-yellow-700
            transition
            font-medium
            cursor-pointer
          "
          @click="goHome"
        >
          Home
          <span
            v-if="currentRoute === '/'"
            class="
              absolute
              -bottom-1
              left-0
              w-full
              h-0.5
              bg-yellow-700
              rounded
            "
          ></span>
        </div>

        <div
          class="
            relative
            text-gray-200
            hover:text-yellow-700
            transition
            font-medium
            cursor-pointer
          "
          @click="cocktail"
        >
          Cocktails
          <span
            v-if="currentRoute === '/cocktails'"
            class="
              absolute
              -bottom-1
              left-0
              w-full
              h-0.5
              bg-yellow-700
              rounded
            "
          ></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

// Function for Home
const goHome = () => {
  router.push({ name: 'Home' })
}

// Function for Cocktails
const cocktail = () => {
  router.push({ name: 'Cocktails' })
}

// Reactive route for active underline
const currentRoute = computed(() => route.path)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500&display=swap');

.font-playfair {
  font-family: 'Playfair Display', serif;
}
</style>
