<script setup lang="ts">
import { ref, watch, computed, onMounted } from "vue";
import { useCocktails } from '../api/use-cocktails'
import Navbar from "../composable/navbar.vue";
import Pagination from "../composable/pagination.vue";
import landscapeImg from '../../assets/landscape.png'
import Refresh from "../composable/refresh.vue";

const { cocktails, pagination, fetchCocktails, fetchAllCocktails, loading } = useCocktails();

const page = ref(1);
const pageSize = 9; // items per page shown in your grid (adjust to desired number)

onMounted(async () => {
  // fetch the entire dataset once, then do frontend pagination
  await fetchAllCocktails();
});

// If you still want the single-page fetch behavior (e.g., refresh button uses it),
// you can keep using fetchCocktails(page) — but the main list below uses the full set.

function refresh() {
  // refresh the full dataset
  fetchAllCocktails().then(() => {
    // stay on current page (or reset to 1 if you prefer)
  });
}

// ⭐ Global sort A → Z
const sortedCocktails = computed(() => {
  return [...cocktails.value].sort((a, b) => a.name.localeCompare(b.name));
});

// ⭐ Paginated slice of the sorted data
const paginatedCocktails = computed(() => {
  const start = (page.value - 1) * pageSize;
  return sortedCocktails.value.slice(start, start + pageSize);
});

// compute total pages for the pagination component
const totalPages = computed(() => {
  return Math.max(1, Math.ceil(sortedCocktails.value.length / pageSize));
});

// keep page within bounds if data shrinks
watch(sortedCocktails, () => {
  if (page.value > totalPages.value) page.value = totalPages.value;
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

    <!-- BLUR LAYER -->
    <div class="fixed inset-0 backdrop-blur-md z-0 pointer-events-none"></div>

    <!-- FOREGROUND CONTENT -->
    <div class="relative z-10">
      <Navbar />

      <!-- Pagination (Top) -->
      <div class="flex justify-center mt-20">
        <Pagination v-model="page" :total-pages="totalPages" />
      </div>

      <div class="relative max-w-[860px] w-full mx-auto mt-4">
        <!-- Refresh Button -->
        <div class="absolute -top-10 right-0">
          <Refresh @refresh="refresh" />
        </div>

        <!-- GRID -->
        <div class="
            grid
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-6
            mt-6
            pt-10
          ">

          <!-- Skeleton while loading -->
          <template v-if="loading">
            <div v-for="n in 6" :key="n" class="
                bg-amber 
                backdrop-blur-md
                border border-amber/30
                rounded-2xl
                p-4
                animate-pulse
                h-64
                shadow-[0_4px_20px_rgba(0,0,0,0.4)]
              "></div>
          </template>

          <!-- Drinks (Sorted A → Z, paginated) -->
          <template v-else>
            <div v-for="c in paginatedCocktails" :key="c.id" class="
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
                  absolute bottom-0 left-0 w-full h-80
                  bg-gradient-to-t
                  from-black/90 via-transparent to-transparent
                  flex flex-col justify-end p-4 
                ">
                <h3 class="text-lg font-bold text-amber mb-1 tracking-wide">
                  {{ c.name }}
                </h3>
                <p class="text-linen font-semibold text-sm uppercase tracking-wide">
                  Glass: {{ c.glass_type.label }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- Bottom Pagination -->
      <div class="flex justify-center mt-20 pb-10">
        <Pagination v-model="page" :total-pages="totalPages" />
      </div>
    </div>
  </div>
</template>
