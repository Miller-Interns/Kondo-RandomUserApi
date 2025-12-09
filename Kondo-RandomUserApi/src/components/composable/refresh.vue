<template>
    <button @click="$emit('refresh')"
        class="px-4 py-2 bg-amber text-black font-semibold rounded-lg shadow hover:bg-amber/80 transition">
        Refresh
    </button>
</template>

<script setup>
defineEmits(['refresh'])
</script>
