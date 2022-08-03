<template>
    <div class="w-full h-full gap-8 sm:pl-4 pr-2 sm:pr-6 lg:pr-20 flex flex-row justify-between items-center">
        <NuxtLink to="/" class="logo h-full flex items-center">
            <img src="@/assets/img/signature.png" alt="i" class="w-[6rem] sm:w-[8rem] h-[3rem]">
        </NuxtLink>
        <div class="right flex flex-row items-center gap-6 sm:gap-8">
            <div class="essential-links flex flex-row items-center gap-6 sm:gap-8 text-slate-300">
                <NuxtLink to="/projects" class="link">
                    <div class="i-mdi-lightbulb" />
                    <h4>Projects</h4>
                    <div class="drop-down-link">
                        <span>Projects</span>
                    </div>
                </NuxtLink>
                <div class="link">
                    <div class="i-mdi-post" />
                    <h4>Notes</h4>
                    <div class="drop-down-link">
                        <span>Notes</span>
                    </div>
                </div>
                <div class="link">
                    <div class="i-mdi-monitor-screenshot" />
                    <h4>Demos</h4>
                    <div class="drop-down-link">
                        <span>Demos</span>
                    </div>
                </div>
            </div>
            <div class="other-links flex flex-row items-center gap-6 sm:gap-8">
                <NuxtLink to="https://github.com/Amos-Ditto" class="link" target="_blank">
                    <div class="i-mdi-github" />
                    <div class="drop-down-link">
                        <span>github</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="https://twitter.com/_ditto1" class="link" target="_blank">
                    <div class="i-mdi-twitter" />
                    <div class="drop-down-link">
                        <span>twitter</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/amos-kipyegon-584435224" class="link" target="_blank">
                    <div class="i-mdi-linkedin" />
                    <div class="drop-down-link">
                        <span>linkedin</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

.router-link-active.link {
    @apply text-slate-100;
}

.essential-links .link {
    @apply relative flex items-center justify-center font-normal tracking-wider cursor-pointer;
    @apply hover:text-slate-100;
}
.essential-links .link div:first-child {
    @apply block sm:hidden text-xl;
}
.essential-links .link h4 {
    @apply hidden sm:block;
    font-family: serif;
}

.essential-links .link .drop-down-link {
    @apply px-3 py-2 bg-slate-800 border border-slate-700 rounded;
    @apply absolute bottom-0 translate-y-[150%] opacity-0 invisible text-sm font-serif tracking-wide;
    transition: visibility 300ms ease , opacity 300ms ease;
}
.essential-links .link:hover .drop-down-link {
    @apply opacity-100 visible sm:invisible;
}
.other-links .link {
    @apply relative text-xl cursor-pointer text-slate-300 hover:text-slate-100 flex items-center justify-center;
}

.other-links .link .drop-down-link {
    @apply invisible absolute bottom-0 opacity-0 translate-y-[150%] rounded  px-3 py-2 text-sm bg-slate-800 text-slate-200;
    @apply tracking-wide border border-slate-700 font-serif;
    transition: visibility 300ms ease , opacity 300ms ease;
}
.other-links .link:hover  .drop-down-link {
    @apply visible opacity-100;
}
</style>