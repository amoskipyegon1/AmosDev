<template>
    <div
        class="w-full bg-[url('/imgs/grid.webp')] bg-app-purple bg-no-repeat text-[#ffffff] bg-blend-lighten bg-100 flex justify-center min-h-[unset]"
        style="background-position-y: bottom"
    >
        <div class="max-w-[1125px] w-full flex flex-col min-h-[18rem] md:min-h-[20rem] px-4 md:px-0 py-4 font-normal">
            <div class="w-full flex flex-col mt-10">
                <div class="flex flex-row gap-x-8 w-full max-w-full items-center">
                    <div class="flex">
                        <NuxtImg src="/imgs/upper.jpg" class="w-[7.35rem] rounded-full" />
                    </div>
                    <div class="flex flex-col py-2">
                        <h1
                            class="text-4xl uppercase font-semibold animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#FBBF24,45%,#1e293b,55%,#FBBF24)] bg-[length:250%_100%]"
                        >
                            Amos Kipyegon
                        </h1>
                        <div class="flex flex-col mt-1.5 ml-0.5">
                            <p class="text-2xl">Full-stack developer.</p>
                            <div class="flex flex-row gap-x-3 items-center mt-2.5">
                                <div class="flex flex-row items-center">
                                    <IconsMap class="text-app-gold text-xl" />
                                    <p class="leading-none text-lg font-light ml-1.5">Kenya/Remote</p>
                                </div>
                                <p class="leading-none text-base text-app-gold">.</p>
                                <div class="flex flex-row gap-x-1.5">
                                    <p class="leading-none text-lg font-light">Since 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mt-8">
                    <!-- <p class="text-stone-300">
                        I love the challenge of taking an idea from concept to reality, and I'm always looking for new ways to improve the
                        user experience. I'm also a bit of a goofball, so if you're looking for someone to have a laugh with, I'm your guy.
                    </p> -->
                </div>
            </div>
        </div>
    </div>
</template>
