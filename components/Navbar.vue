<script setup lang="ts">
const itemref = ref<HTMLDivElement>();
const loader = ref<boolean>(false);

const openSocialLinks = ref<boolean>(false);
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
        class="z-50 sticky top-0 grid grid-cols-2 sm:grid-cols-3 gap-x-2 w-full px-4 md:px-8 lg:px-20 py-2 md:py-2.5 lg:py-3 bg-tate border-b border-neutral-800 transition duration-500"
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
        <div class="flex sm:hidden justify-end items-center px-4 relative">
            <div
                @click="openSocialLinks = !openSocialLinks"
                class="w-6 h-6 text-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
                <IconsConnect />
            </div>
            <Transition name="drop-down">
                <div
                    v-if="openSocialLinks"
                    class="drop-down fixed z-50 top-0 left-0 right-0 px-3 py-6 bg-tate shadow-lg flex justify-center items-center flex-col gap-y-8"
                >
                    <div class="close absolute top-4 right-8">
                        <div
                            @click="openSocialLinks = !openSocialLinks"
                            class="w-7 h-7 text-gray-500 hover:text-gray-50 cursor-pointer transition-colors duration-200"
                        >
                            <IconsClose />
                        </div>
                    </div>
                    <NuxtLink to="https://twitter.com/_ditto1" target="_blank" class="flex flex-col gap-y-1 items-center justify-center">
                        <div class="w-5 h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
                            <IconsTwitter />
                        </div>
                        <small class="text-sm capitalize tracking-wide">twitter</small>
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.linkedin.com/in/amos-kipyegon/"
                        target="_blank"
                        class="flex flex-col gap-y-1 items-center justify-center"
                    >
                        <div class="w-5 h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
                            <IconsLinkedin />
                        </div>
                        <small class="text-sm capitalize tracking-wide">linkedin</small>
                    </NuxtLink>
                    <NuxtLink to="https://github.com/Amos-Ditto" target="_blank" class="flex flex-col gap-y-1 items-center justify-center">
                        <div class="w-5 h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
                            <IconsGithub />
                        </div>
                        <small class="text-sm capitalize tracking-wide">github</small>
                    </NuxtLink>
                </div>
            </Transition>
            <div
                v-if="openSocialLinks"
                class="toggling-bg fixed top-0 bottom-0 left-0 right-0 card-tate z-20"
                @click="openSocialLinks = !openSocialLinks"
            ></div>
        </div>
        <div class="hidden sm:flex flex-row gap-x-8 items-center justify-end">
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

.drop-down-enter-from,
.drop-down-leave-to {
    @apply -translate-y-full opacity-0;
}

.drop-down-enter-active,
.drop-down-leave-active {
    @apply transition duration-500;
}
</style>
