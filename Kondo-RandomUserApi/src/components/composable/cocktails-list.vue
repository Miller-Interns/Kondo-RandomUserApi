<template>
    <Navbar />
   <div class="grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    gap-6
    max-w-[860px]
    w-full
    mx-auto
    font-poppins 
">
    <!-- Skeleton -->
    <template v-if="loading">
        <div
            v-for="n in 6"
            :key="n"
            class="
                bg-oak/30
                backdrop-blur-md
                border border-amber/30
                rounded-2xl
                p-4
                animate-pulse
                h-64
                shadow-[0_4px_20px_rgba(0,0,0,0.4)]
            "
        ></div>
    </template>

    <!-- Real cocktails -->
    <template v-else>
        <div
  v-for="c in cocktails"
  :key="c.id"
  class="
    relative
    rounded-2xl
    overflow-hidden
    shadow-lg
    hover:shadow-[0_10px_25px_rgba(0,0,0,0.55)]
    hover:-translate-y-1
    transition-all
    duration-300
    h-64
  "
>
  <!-- Full-cover Image -->
  <img
    :src="c.image"
    alt=""
    class="absolute inset-0 w-full h-full object-cover"
  />

  <!-- Gradient overlay at the bottom -->
  <div
    class="
      absolute
      bottom-0
      left-0
      w-full
      h-28
      bg-gradient-to-t
      from-black/70
      via-transparent
      to-transparent
      flex
      flex-col
      justify-end
      p-4
    "
  >
    <h3 class="text-lg font-poppins font-semibold text-amber mb-1 tracking-wide">
      {{ c.name }}
    </h3>
    <p class="text-linen text-sm uppercase tracking-wide">
      Glass: {{ c.glass_type.label }}
    </p>
  </div>
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
