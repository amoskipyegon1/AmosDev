<script setup lang="ts">
//
const firstref = ref<HTMLDivElement>();
const firstloader = ref<boolean>(false);

//
const secondref = ref<HTMLDivElement>();
const secondloader = ref<boolean>(false);

//
const thirdref = ref<HTMLDivElement>();
const thirdloader = ref<boolean>(false);

onMounted(() => {
    const firstObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                firstloader.value = true;
                firstObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.4,
        }
    );

    firstObs.observe(firstref.value as Element);

    const secondObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                secondloader.value = true;
                secondObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.5,
        }
    );

    secondObs.observe(secondref.value as Element);

    const thirdObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                thirdloader.value = true;
                thirdObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.6,
        }
    );

    thirdObs.observe(thirdref.value as Element);
});
</script>
<template>
    <div class="w-full px-2 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
        <div
            ref="firstref"
            class="x-card flex flex-col gap-y-6 transition duration-500"
            :class="firstloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/2'"
        >
            <h4 class="text-sm sm:text-base uppercase text-neutral-500">2020</h4>
            <ul class="w-full flex flex-col gap-y-7">
                <li class="flex flex-col gap-y-2 w-full">
                    <h3 class="text-base sm:text-xl tracking-wide capitalize font-serif">Bachelor of Science in Computer science</h3>
                    <small class="text-xs sm:text-sm text-neutral-400 font-serif tracking-wide">Kabarak university</small>
                </li>
            </ul>
        </div>
        <div
            ref="secondref"
            class="x-card flex flex-col gap-y-6 transition duration-500"
            :class="secondloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/2'"
        >
            <h4 class="text-sm sm:text-base uppercase text-neutral-500">2021</h4>
            <ul class="w-full flex flex-col gap-y-7">
                <li class="flex flex-col gap-y-2 w-full">
                    <h3 class="text-base sm:text-xl tracking-wide capitalize font-serif">Software development internship</h3>
                    <small class="text-xs sm:text-sm text-neutral-400 font-serif tracking-wide flex flex-row items-center gap-x-1"
                        >HealthIT,
                        <span class="flex flex-row gap-x-0.5 items-center"
                            >uonafya
                            <div class="w-4 h-4">
                                <IconsArrowRight /></div></span
                    ></small>
                </li>
                <li class="flex flex-col gap-y-2 w-full">
                    <h3 class="text-base sm:text-xl tracking-wide capitalize font-serif">Backend development</h3>
                    <small class="text-xs sm:text-sm text-neutral-400 font-serif tracking-wide">Freelancer</small>
                </li>
            </ul>
        </div>
        <div
            ref="thirdref"
            class="x-card flex flex-col gap-y-6 transition duration-500"
            :class="thirdloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/2'"
        >
            <h4 class="text-sm sm:text-base uppercase text-neutral-500">2022 - present</h4>
            <ul class="w-full flex flex-col gap-y-7">
                <li class="flex flex-col gap-y-2 w-full">
                    <h3 class="text-base sm:text-xl tracking-wide capitalize font-serif">building e-commerce</h3>
                    <small class="text-xs sm:text-sm text-neutral-400 font-serif tracking-wide">Freelancer</small>
                </li>
                <li class="flex flex-col gap-y-2 w-full">
                    <h3 class="text-base sm:text-xl tracking-wide capitalize font-serif">Working with upwork clients</h3>
                    <small class="text-xs sm:text-sm text-neutral-400 font-serif tracking-wide">Upwork</small>
                </li>
            </ul>
        </div>
    </div>
</template>
