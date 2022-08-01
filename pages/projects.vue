<template>
    <main class="w-full flex items-center justify-center pt-8">
        <section class="context">
            <header class="w-full flex text-start flex-col gap-2">
                <h3 class="text-4xl font-normal text-slate-200 tracking-wide">Projects</h3>
                <p class="text-base italic text-slate-400">List of projects that I am proud of</p>
            </header>
            <article class="w-full flex flex-col gap-4">
                <div class="container w-full flex flex-col gap-2">
                    <h3 class="text-lg text-slate-300">Upcoming</h3>
                    <div class="upcoming w-full">

                    </div>
                </div>
            </article>
        </section>
    </main>
</template>

<style scoped>

.context {
    font-family: Arial;
    @apply w-[90%] sm:w-[550px] md:w-[580px] lg:w-[600px] flex flex-col gap-y-10;
    @apply text-slate-300;
    transition: width 300ms ease;
}
.context header h3 {
    font-family: 'Arial';
}
</style>