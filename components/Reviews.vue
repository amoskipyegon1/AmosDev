<script setup lang="ts">
useHead({
    link: [{ rel: 'stylesheet', href: 'https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css' }],
    script: [{ src: 'https://unpkg.com/flowbite@1.5.5/dist/flowbite.js' }],
});
</script>
<template>
    <div class="w-full flex flex-col px-0 sm:px-8">
        <div id="indicators-carousel" class="relative" data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative h-72 sm:h-56 overflow-hidden rounded-lg">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <div class="w-full h-full px-4 sm:px-16 text-center flex items-start flex-col gap-y-4">
                        <p class="text-sm sm:text-xl text-center font-serif leading-8">
                            “Amos was a real pleasure to work with and we look forward to working with him again. He's definitely the kind
                            of developer you trust with a project from start to finish. Great services & Recommended!”
                        </p>
                        <div class="w-full flex flex-col items-center justify-center gap-y-2">
                            <h4 class="text-base sm:text-xl font-semibold">Jurgen Klopp</h4>
                            <small class="text-xs text-neutral-400">Client at <span class="text-super">Freelancer</span></small>
                        </div>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div class="w-full h-full px-4 sm:px-16 text-center flex items-start flex-col gap-y-4">
                        <p class="text-sm sm:text-xl text-center font-serif leading-8">
                            “Amos was a real pleasure to work with and we look forward to working with him again. He's definitely the kind
                            of developer you trust with a project from start to finish. Great services & Recommended!”
                        </p>
                        <div class="w-full flex flex-col items-center justify-center gap-y-2">
                            <h4 class="text-base sm:text-xl font-semibold">Jurgen Klopp</h4>
                            <small class="text-xs text-neutral-400">Client at <span class="text-super">Freelancer</span></small>
                        </div>
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div class="w-full h-full px-4 sm:px-16 text-center flex items-start flex-col gap-y-4">
                        <p class="text-sm sm:text-xl text-center font-serif leading-8">
                            “Amos was a real pleasure to work with and we look forward to working with him again. He's definitely the kind
                            of developer you trust with a project from start to finish. Great services & Recommended!”
                        </p>
                        <div class="w-full flex flex-col items-center justify-center gap-y-2">
                            <h4 class="text-base sm:text-xl font-semibold">Jurgen Klopp</h4>
                            <small class="text-xs text-neutral-400">Client at <span class="text-super">Freelancer</span></small>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slider indicators -->
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                ></button>
                <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                ></button>
                <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                ></button>
            </div>
            <!-- Slider controls -->
            <button
                type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
            >
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 hover:scale-110">
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
            >
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 hover:scale-110">
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
    </div>
</template>
