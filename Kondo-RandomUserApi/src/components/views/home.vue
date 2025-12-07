<script setup lang="ts">

import Navbar from "../composable/navbar.vue";
import { useRouter } from "vue-router";
import bgImg from "../../assets/alcohol.png";
const router = useRouter();

// Navigate programmatically using router.push
const goCocktails = () => {
    router.push({ name: "Cocktails" });
};
</script>

<template>
  <div
    class="min-h-screen w-full text-ivory bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${bgImg})` }"
  >
    
    <Navbar class="relative z-10" />

    <div class="max-w-5xl mx-auto px-4 py-12 mt-24 relative z-10">
     
      <div
        class="bg-oak/40 backdrop-blur-xl border border-amber/30 rounded-2xl p-10 shadow-[0_8px_25px_rgba(0,0,0,0.4)] text-center"
      >
        <h1 class="font-playfair text-4xl text-gold mb-4 drop-shadow-lg">
          API Exercise
        </h1>

        <p class="text-linen/80 mb-8 leading-relaxed">
          This app demonstrates API fetching, composables, and Vue routing with a premium cocktail-themed interface.
        </p>

        <button
          @click="goCocktails"
          class="px-8 py-3 rounded-xl bg-bark/60 border  border-brass text-mutedbrass font-semibold hover:bg-bark/30 hover:text-amber transition-all duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg"
        >
          View Cocktails →
        </button>
      </div>

      <!-- Category List -->
      <category-list class="mt-14 relative z-10" />
    </div>
  </div>
</template>


<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-medium {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.poppins-semibold {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
}    </style>