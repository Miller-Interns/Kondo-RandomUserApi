<script setup lang="ts">
import { ref } from "vue";
import { useCategories } from "../api/use-categories";
import Navbar from "../composable/navbar.vue";
import bgImg from "../../assets/alcohol.png";
const { categories, fetchCategories } = useCategories();
const loading = ref(true);

fetchCategories().finally(() => (loading.value = false));
</script>

<template>
    <div  class="min-h-screen bg-cover bg-center bg-no-repeat relative"
    :style="{ backgroundImage: `url(${bgImg})` }">

        <!-- Navbar ALWAYS outside the constrained container -->
        <Navbar />

        <div class="pt-28 px-4 max-w-4xl mx-auto">

            <!-- Page Title -->
            <h2 class="text-4xl text-mutedbrass font-poppins font-semibold text-primary mb-10 tracking-wide">
                Categories
            </h2>

            <!-- Categories Grid -->
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <!-- Skeleton -->
                <template v-if="loading">
                    <li v-for="n in 6" :key="n" class="
              bg-surface-card/30
              backdrop-blur-xl
              text-beigeSoft
              border border-border/40
              rounded-xl
              p-4
              animate-pulse
              h-16
              shadow-[0_4px_15px_rgba(0,0,0,0.35)]
            "></li>
                </template>

                <!-- Live Categories -->
                <template v-else>
                    <li v-for="c in categories" :key="c.id" class="
              bg-surface-card/60
              backdrop-blur-xl
              text-mutedbrass
              text-xl
              border border-border/50
              rounded-xl
              px-5
              py-4
              text-text
              bg-card/70
              font-poppins
              font-medium
              shadow-[0_6px_20px_rgba(0,0,0,0.45)]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.55)]
              hover:bg-surface-card/70
              hover:-translate-y-1
              transition-all
              duration-300
              cursor-pointer
            ">
                        {{ c.label }}
                    </li>
                </template>

            </ul>
        </div>
    </div>
</template>
