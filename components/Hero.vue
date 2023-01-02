<script setup lang="ts">
const imgref = ref<HTMLDivElement>();
const imgloader = ref<boolean>(false);

//
const leftaboutref = ref<HTMLDivElement>();
const leftaboutloader = ref<boolean>(false);

const rightaboutref = ref<HTMLDivElement>();
const rightaboutloader = ref<boolean>(false);

onMounted(() => {
    const itemObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                imgloader.value = true;
                itemObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.25,
        }
    );

    itemObs.observe(imgref.value as Element);

    const aboutLeftObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                leftaboutloader.value = true;
                aboutLeftObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.25,
        }
    );

    aboutLeftObs.observe(leftaboutref.value as Element);

    const aboutRightObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                rightaboutloader.value = true;
                aboutRightObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.25,
        }
    );

    aboutRightObs.observe(rightaboutref.value as Element);
});
</script>
<template>
    <div id="hero" class="w-full pt-10 sm:pt-8 px-4 md:px-8 lg:px-20 grid grid-cols-4 md:grid-cols-8 font-serif">
        <div
            ref="leftaboutref"
            class="about col-span-2 grid grid-rows-3 gap-y-4 md:gap-y-12 transition duration-1000"
            :class="leftaboutloader ? 'opacity-1 translate-x-0' : 'opacity-0 -translate-x-1/4'"
        >
            <div class="h-card">
                <div class="title">
                    <h4 class="text-sm sm:text-base uppercase text-neutral-500">biography</h4>
                </div>
                <p class="text-sm sm:text-lg">
                    I am a problem-solver at heart, and I enjoy the challenge of finding creative solutions to complex problems. I'm Amos, a
                    Full-Stack Developer working as a Freelancer.
                </p>
            </div>
            <div class="h-card">
                <div class="title">
                    <h4 class="text-sm sm:text-base uppercase text-neutral-500">contact</h4>
                </div>
                <article class="flex flex-col gap-y-2">
                    <p class="text-sm sm:text-lg tracking-wide">Nairobi, Kenya</p>
                    <p class="text-sm sm:text-lg tracking-wide">amosk7793@gmail.com</p>
                    <p class="text-sm sm:text-lg tracking-wide">+254 794 81 81 11</p>
                </article>
            </div>
            <div class="h-card">
                <div class="title">
                    <h4 class="text-sm sm:text-base uppercase text-neutral-500">services</h4>
                </div>
                <article class="flex flex-col gap-y-2">
                    <p class="text-base sm:text-lg tracking-wide capitalize">Back-end development</p>
                    <p class="text-base sm:text-lg tracking-wide capitalize">Front-end development</p>
                    <p class="text-base sm:text-lg tracking-wide capitalize">Database design</p>
                </article>
            </div>
        </div>
        <div
            ref="imgref"
            id="hero-img"
            class="col-span-4 hidden md:flex justify-center items-center transition duration-700"
            :class="imgloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-12'"
        >
            <img src="~/assets/Img/me.webp" alt="" class="max-h-[560px] rounded-3xl p-2 ring-1 ring-neutral-800" />
        </div>
        <div
            ref="rightaboutref"
            class="about col-span-2 grid grid-rows-3 gap-y-4 md:gap-y-12 transition duration-1000"
            :class="rightaboutloader ? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-1/4'"
        >
            <div class="h-card items-end">
                <div class="title">
                    <h4 class="text-sm sm:text-base uppercase text-neutral-500 text-end">years of <br />experience</h4>
                </div>
                <p class="text-3xl sm:text-5xl">2</p>
            </div>
            <div class="h-card items-end">
                <div class="title">
                    <h4 class="text-sm sm:text-base uppercase text-neutral-500 text-end">satisfication <br />clients</h4>
                </div>
                <p class="text-3xl sm:text-5xl">100%</p>
            </div>
            <div class="h-card items-end">
                <div class="title">
                    <h4 class="text-sm sm:text-base uppercase text-neutral-500 text-end">projects done</h4>
                </div>
                <p class="text-3xl sm:text-5xl">20+</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about .h-card {
    @apply flex flex-col gap-y-4;
}
</style>
