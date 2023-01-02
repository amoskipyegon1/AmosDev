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
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12">
        <div
            ref="firstref"
            class="project flex flex-col rounded-t-md gap-y-4 transition duration-700"
            :class="firstloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/4'"
        >
            <div class="img w-full flex max-h-[15rem]">
                <img src="~/assets/Img/projects/e-comm.webp" alt="" class="w-full h-full rounded-t-lg opacity-50" />
            </div>
            <div class="w-full flex flex-col gap-y-2">
                <div class="w-full flex flex-col gap-y-1">
                    <small class="text-xs sm:text-sm font-light capitalize text-neutral-500 tracking-wider font-sans"
                        >featured project</small
                    >
                    <h3 class="text-lg sm:text-xl tracking-wide capitalize">E-commerce store</h3>
                </div>
                <div class="card-tate rounded-sm px-1 sm:px-2 py-2 sm:py-3 shadow-lg">
                    <p class="text-xs sm:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore voluptatem iusto libero deserunt,
                        repudiandae dicta porro delectus rem dolor nemo blanditiis aspernatur autem. Sint nam odit perspiciatis numquam
                        sapiente?
                    </p>
                </div>
                <ul class="tools w-full flex flex-row gap-x-4 sm:gap-x-6 gap-y-2 items-center flex-wrap mt-1">
                    <li>NuxtJS</li>
                    <li>Django</li>
                    <li>TailwindCSS</li>
                    <li>PostgreSQL</li>
                </ul>
                <div class="w-full flex flex-row items-center gap-x-4 mt-3">
                    <button
                        class="flex flex-row items-center gap-x-2 px-3 sm:px-4 py-2 rounded ring-1 ring-neutral-800 text-gray-300 hover:text-gray-50 transition-colors duration-200"
                    >
                        <div class="w-4 h-4">
                            <IconsEye />
                        </div>
                        <span class="text-xs sm:text-sm tracking-wide">Preview</span>
                    </button>
                    <button
                        class="flex flex-row items-center gap-x-2 px-3 sm:px-4 py-2 rounded ring-1 ring-neutral-800 text-gray-300 hover:text-gray-50 transition-colors duration-200"
                    >
                        <div class="w-4 h-4">
                            <IconsGithub />
                        </div>
                        <span class="text-xs sm:text-sm tracking-wide">Github repo</span>
                    </button>
                </div>
            </div>
        </div>

        <div
            ref="secondref"
            class="project flex flex-col rounded-t-md gap-y-4 transition duration-700"
            :class="secondloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/4'"
        >
            <div class="img w-full flex max-h-[15rem]">
                <img src="~/assets/Img/projects/portfolio.webp" alt="" class="w-full h-full rounded-t-lg opacity-50" />
            </div>
            <div class="w-full flex flex-col gap-y-2">
                <div class="w-full flex flex-col gap-y-1">
                    <small class="text-xs sm:text-sm font-light capitalize text-neutral-500 tracking-wider font-sans"
                        >featured project</small
                    >
                    <h3 class="text-lg sm:text-xl tracking-wide capitalize">This site</h3>
                </div>
                <div class="card-tate rounded-sm px-1 sm:px-2 py-2 sm:py-3 shadow-lg">
                    <p class="text-xs sm:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore voluptatem iusto libero deserunt,
                        repudiandae dicta porro delectus rem dolor nemo blanditiis aspernatur autem. Sint nam odit perspiciatis numquam
                        sapiente?
                    </p>
                </div>
                <ul class="tools w-full flex flex-row gap-x-4 sm:gap-x-6 gap-y-2 items-center flex-wrap mt-1">
                    <li>NuxtJS</li>
                    <li>TailwindCSS</li>
                </ul>
                <div class="w-full flex flex-row items-center gap-x-4 mt-3">
                    <button
                        class="flex flex-row items-center gap-x-2 px-3 sm:px-4 py-2 rounded ring-1 ring-neutral-800 text-gray-300 hover:text-gray-50 transition-colors duration-200"
                    >
                        <div class="w-4 h-4">
                            <IconsGithub />
                        </div>
                        <span class="text-xs sm:text-sm tracking-wide">Github repo</span>
                    </button>
                </div>
            </div>
        </div>

        <div
            ref="thirdref"
            class="project flex flex-col rounded-t-md gap-y-4 transition duration-700"
            :class="thirdloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/4'"
        >
            <div class="img w-full flex max-h-[15rem]">
                <img src="~/assets/Img/projects/logistics2.webp" alt="" class="h-full rounded-t-lg opacity-50" />
            </div>
            <div class="w-full flex flex-col gap-y-2">
                <div class="w-full flex flex-col gap-y-1">
                    <small class="text-xs sm:text-sm font-light capitalize text-neutral-500 tracking-wider font-sans"
                        >featured project</small
                    >
                    <h3 class="text-lg sm:text-xl tracking-wide capitalize">This site</h3>
                </div>
                <div class="card-tate rounded-sm px-1 sm:px-2 py-2 sm:py-3 shadow-lg">
                    <p class="text-xs sm:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore voluptatem iusto libero deserunt,
                        repudiandae dicta porro delectus rem dolor nemo blanditiis aspernatur autem. Sint nam odit perspiciatis numquam
                        sapiente?
                    </p>
                </div>
                <ul class="tools w-full flex flex-row gap-x-4 sm:gap-x-6 gap-y-2 items-center flex-wrap mt-1">
                    <li>NuxtJS</li>
                    <li>Django</li>
                    <li>LeafLet JS</li>
                    <li>TailwindCSS</li>
                </ul>
                <div class="w-full flex flex-row items-center gap-x-4 mt-3">
                    <button
                        class="flex flex-row items-center gap-x-2 px-3 sm:px-4 py-2 rounded ring-1 ring-neutral-800 text-gray-300 hover:text-gray-50 transition-colors duration-200"
                    >
                        <div class="w-4 h-4">
                            <IconsGithub />
                        </div>
                        <span class="text-xs sm:text-sm tracking-wide">Github repo</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
ul.tools li {
    @apply text-xs sm:text-sm tracking-wide space-x-1 text-gray-300 font-mono;
}
</style>
