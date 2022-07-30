<template>
    <div class="w-full h-full gap-8 pr-2 sm:pr-6 lg:pr-20 flex flex-row justify-end items-center">
        <div class="essential-links flex flex-row gap-6 sm:gap-8">
            <div class="link">
                <div class="i-mdi-lightbulb" />
                <span>Projects</span>
                <div class="drop-down">
                    <span>Projects</span>
                </div>
            </div>
            <div class="link">
                <div class="i-mdi-post" />
                <span>Notes</span>
            </div>
            <div class="link">
                <div class="i-mdi-monitor-screenshot" />
                <span>Demos</span>
            </div>
        </div>
        <div class="other-links flex flex-row items-center gap-6 sm:gap-8">
            <div class="link">
                <div class="i-mdi-github" />
            </div>
            <div class="link">
                <div class="i-mdi-twitter" />
            </div>
            <div class="link">
                <div class="i-mdi-linkedin" />
            </div>
        </div>
    </div>
</template>

<style scoped>

.essential-links .link {
    @apply flex items-center flex-row font-normal tracking-wider hover:text-slate-200 cursor-pointer;
}
.essential-links .link div:first-child {
    @apply block sm:hidden text-xl;
}
.essential-links .link span {
    @apply hidden sm:block;
    font-family: serif;
}
.other-links .link {
    @apply text-xl cursor-pointer hover:text-slate-200;
}
.drop-down {
    @apply sm:hidden absolute bg-neutral-600 text-sm min-w-[4rem] h-[2rem] px-3 py-2 rounded translate-y-[110%];
}
.drop-down span {
    @apply text-base text-white;
}
.essential-links .link:hover .drop-down {
    @apply visible;
}
</style>