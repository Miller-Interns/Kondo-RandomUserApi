<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  modelValue: number;
  totalPages: number;
}>();

const emit = defineEmits(["update:modelValue"]);

const page = ref(props.modelValue);

// Sync with parent v-model
watch(() => props.modelValue, (val) => {
  page.value = val;
});

function nextPage() {
  if (page.value < props.totalPages) {
    page.value++;
    emit("update:modelValue", page.value);
  }
}

function prevPage() {
  if (page.value > 1) {
    page.value--;
    emit("update:modelValue", page.value);
  }
}
</script>

<template>
  <div class="flex gap-3 items-center justify-center mt-6 font-montserrat">
    <!-- Prev -->
    <button @click="prevPage" :disabled="page <= 1"
      class="px-4 py-2  bg-amber text-black font-semibold rounded-xl border border-linen  transition disabled:opacity-40 disabled:cursor-not-allowed">
      Prev
    </button>

    <!-- Page indicator -->
    <span class="text-amber font-semibold tracking-wide">
      Page {{ page }} / {{ props.totalPages }}
    </span>

    <!-- Next -->
    <button @click="nextPage" :disabled="page >= props.totalPages"
      class="px-4 py-2 rounded-xl border  bg-amber text-black font-semibold border-linen  transition disabled:opacity-40 disabled:cursor-not-allowed">
      Next
    </button>
  </div>
</template>
