<script setup lang="ts">
import { ref, watch } from "vue";
import { useCocktails } from '../api/use-cocktails'
import Navbar from "../composable/navbar.vue";
import Pagination from "../composable/pagination.vue";
import landscapeImg from '../../assets/landscape.png'
const { } = useCocktails();


const { cocktails, pagination, fetchCocktails } = useCocktails();
const loading = ref(true);
const page = ref(1);

fetchCocktails(1).finally(() => (loading.value = false));
watch(page, (newPage) => {
  loading.value = true;
  fetchCocktails(newPage).finally(() => (loading.value = false));
});

</script>


<template>
  <div class="
      min-h-screen
      w-full
      bg-cover bg-center bg-no-repeat
      font-montserrat
      pt-12
      relative
    " :style="{ backgroundImage: `url(${landscapeImg})` }">

    <!-- BLUR LAYER (behind everything) -->
    <div class="absolute inset-0 backdrop-blur-md z-0"></div>

    <!-- FOREGROUND CONTENT -->
    <div class="relative z-10">

      <Navbar />

      <!-- PAGINATION ABOVE GRID, CENTERED -->
      <div class="flex justify-center mt-20">
        <Pagination v-model="page" :total-pages="pagination.pages" />
      </div>

      <!-- DRINKS GRID -->
      <div class="
          grid
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-6
          max-w-[860px]
          w-full
          mx-auto
          mt-10
        ">
        <!-- Skeleton loader -->
        <template v-if="loading">
          <div v-for="n in 6" :key="n" class="
              bg-oak/30
              backdrop-blur-md
              border border-amber/30
              rounded-2xl
              p-4
              animate-pulse
              h-64
              shadow-[0_4px_20px_rgba(0,0,0,0.4)]
            "></div>
        </template>

        <!-- Drinks list -->
        <template v-else>
          <div v-for="c in cocktails" :key="c.id" class="
              relative
              rounded-2xl
              overflow-hidden
              shadow-lg
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.55)]
              hover:-translate-y-1
              transition-all
              duration-300
              h-64
            ">
            <img :src="c.image" class="absolute inset-0 w-full h-full object-cover" />

            <div class="
                absolute bottom-0 left-0 w-full h-40
                bg-gradient-to-t
                from-black/80 via-transparent to-transparent
                flex flex-col justify-end p-4
              ">
              <h3 class="text-lg font-semibold text-amber mb-1 tracking-wide">
                {{ c.name }}
              </h3>
              <p class="text-linen text-sm uppercase tracking-wide">
                Glass: {{ c.glass_type.label }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
