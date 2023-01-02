<script setup lang="ts">
const itemref = ref<HTMLDivElement>();
const loader = ref<boolean>(false);

onMounted(() => {
    const itemObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                loader.value = true;
                itemObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.5,
        }
    );

    itemObs.observe(itemref.value as Element);
});
</script>

<template>
    <nav
        ref="itemref"
        class="z-50 grid grid-cols-2 sm:grid-cols-3 gap-x-2 w-full px-4 md:px-8 lg:px-20 py-3 md:py-2.5 lg:py-4 sticky top-0 bg-tate border-b border-neutral-800 transition duration-500"
        :class="loader ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-1/3'"
    >
        <ul class="links hidden sm:flex flex-row items-center gap-x-8">
            <li @click="$emit('ScrollFunction', 'header')">home</li>
            <li @click="$emit('ScrollFunction', 'skills')">Skills</li>
            <li @click="$emit('ScrollFunction', 'experience')">Experience</li>
            <li @click="$emit('ScrollFunction', 'projects')">Projects</li>
        </ul>
        <div class="flex flex-col gap-y-2 items-start sm:items-center justify-center">
            <img src="@/assets/Img/favicon-32x32.png" alt="" class="rounded-md w-10 h-10" />
            <span class="font-light hidden sm:block text-xs tracking-wide text-center uppercase"
                >Amos <br />
                Kipyegon</span
            >
        </div>
        <div class="flex flex-row gap-x-8 items-center justify-end">
            <NuxtLink to="https://twitter.com/_ditto1" target="_blank">
                <div class="w-5 h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
                    <IconsTwitter />
                </div>
            </NuxtLink>
            <NuxtLink to="https://www.linkedin.com/in/amos-kipyegon/" target="_blank">
                <div class="w-5 h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
                    <IconsLinkedin />
                </div>
            </NuxtLink>
            <NuxtLink to="https://github.com/Amos-Ditto" target="_blank">
                <div class="w-5 h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
                    <IconsGithub />
                </div>
            </NuxtLink>
        </div>
    </nav>
</template>

<style scoped>
.links li {
    @apply text-base font-light tracking-wide capitalize hover:text-gray-50 cursor-pointer transition-colors duration-200;
}
</style>
