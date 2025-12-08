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


<template>
  <nav class="
      fixed
      top-0
      w-full
      z-50
      backdrop-blur-xl
      bg-oak/60
      border-b
      border-amber/20
      shadow-[0_4px_20px_rgba(0,0,0,0.4)]
    ">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div
        class="font-montserrat font-semibold text-2xl text-gold tracking-wide cursor-pointer hover:text-amber transition"
        @click="goHome">
        Booze Lounge
      </div>

      <!-- Links -->
      <div class="flex gap-8">
        <!-- Home -->
        <div class="relative text-linen hover:text-amber transition-all duration-300 font-medium cursor-pointer pb-1"
          @click="goHome">
          Home
          <span v-if="currentRoute === '/' || currentRoute === '/home'"
            class="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gold rounded transition-all"></span>
        </div>

        <!-- Categories -->
        <div class="relative text-linen hover:text-amber transition-all duration-300 font-medium cursor-pointer pb-1"
          @click="cocktail">
          Categories
          <span v-if="currentRoute === '/category' || currentRoute === '/categories'"
            class="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gold rounded transition-all"></span>
        </div>
      </div>
    </div>
  </nav>
</template>
