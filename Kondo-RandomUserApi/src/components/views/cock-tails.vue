<template>
  <Navbar />
  <div class="max-w-5xl mx-auto px-4 py-12">
    <h1
      class="
        font-playfair
        text-4xl
        text-yellow-700
        mb-8
        text-center
      "
    >
      Cocktails
    </h1>

    <cocktails-list />
  </div>
</template>

<script setup>
import CocktailsList from "../composable/cocktails-list.vue";
import Navbar from "../composable/navbar.vue";
</script>
