<script setup lang="ts">
useHead({
    title: 'Amos Kipyegon - Dev',
    meta: [{ name: 'description', content: 'Showcases of my dev skills and what I can offer.' }],
});
if (process.client) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
}
</script>
<template>
    <div class="w-full flex-col">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
