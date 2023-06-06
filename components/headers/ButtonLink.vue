<script setup lang="ts">
defineProps({
    name: String,
});
</script>
<template>
    <button
        class="text-lg uppercase font-semibold font-plexmono px-3 py-1 hover:bg-app-dark-blue/40 focus:bg-app-dark-blue/40 transition-colors duration-200 rounded"
    >
        {{ name }}
    </button>
</template>
