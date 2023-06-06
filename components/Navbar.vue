<template>
    <nav class="w-full flex justify-center text-[#ffffff]">
        <div class="w-full max-w-[1125px] grid grid-cols-3 md:grid-cols-2 px-4 md:px-0 py-5">
            <div class="md:hidden flex flex-row items-center">
                <button class="">
                    <IconsMenu class="text-stone-200" />
                </button>
            </div>
            <div class="flex flex-row items-center gap-x-8 justify-center md:justify-start">
                <div class="flex flex-row items-center font-plexmono">
                    <NuxtImg src="/imgs/logo.webp" class="rounded w-10 h-10" />
                </div>
                <div class="hidden md:flex gap-x-1.5 items-center">
                    <HeadersButtonLink name="Home" />
                    <HeadersButtonLink name="About" />
                    <HeadersButtonLink name="Projects" />
                    <HeadersButtonLink name="Blogs" />
                </div>
            </div>
            <div class="flex flex-row items-center gap-x-4 justify-end">
                <HeadersSearchField class="hidden md:block" />
                <div class="flex flex-row items-center ml-4">
                    <button class="text-stone-200 hover:text-app-gold focus:text-app-gold transition-colors">
                        <IconsShare />
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
