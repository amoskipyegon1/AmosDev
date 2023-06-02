<template>
    <div class="h-[32px] flex items-center relative text-[#ffffff]">
        <button
            class="w-[275px] h-full bg-app-dark rounded border border-stone-700 relative py-1 px-2 flex flex-row items-center justify-start gap-x-2 !whitespace-nowrap hover:border-stone-500 transition-colors duration-200"
        >
            <div class="">
                <IconsSearch class="align-text-bottom text-stone-300" />
            </div>
            <span class="text-base text-stone-300 font-normal">Search or jump to...</span>
            <div class="absolute right-0 mr-0.5">
                <IconsSlash />
            </div>
        </button>
    </div>
</template>
