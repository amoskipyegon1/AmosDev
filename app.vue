<script setup lang="ts">
useHead({
    title: 'Amos Kipyegon - Dev',
    meta: [{ name: 'description', content: 'Showcases of my dev skills and what I can offer.' }],
    link: [
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        { href: 'https://fonts.gstatic.com', rel: 'preconnect' },
        {
            href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
            rel: 'stylesheet',
        },
    ],
})
if (process.client) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
}
</script>
<template>
    <div class="w-full flex flex-col">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
