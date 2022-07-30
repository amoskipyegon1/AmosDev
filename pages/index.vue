<template>
    <main class="w-full flex justify-center pt-8">
        <section class="context w-[90%] sm:w-[500px] md:w-[500px] lg:w-[600px] flex flex-col gap-y-8">
            <div class="name text-4xl text-slate-100 font-light font-serif">
                <h2>Amos K.</h2>
            </div>
            <article class="w-full">
                <p>
                    Hey, I am Amos Kipyegon, a fanatical backend developer. Currently working on open sources & 
                    learning more tech skills.
                </p>
                <div class="social-media leading-10 w-full pt-8">
                    <p>
                        Find me on 
                        <a href="https://github.com/Amos-Ditto">GitHub</a>,
                        <a href="https://twitter.com/_ditto1">Twitter</a>,
                        <a href="https://www.linkedin.com/in/amos-kipyegon-584435224">Linkedin</a>
                    </p>
                    <p>
                        Mail me at
                        <a href="https://amosditto@gmail.com">amosditto@gmail.com</a>
                    </p>
                </div>
            </article>
        </section>
        
    </main>
</template>

<style scoped>
.context {
    transition: width 300ms ease;
}
article {
    font-family: Arial;
    @apply leading-7 flex flex-col gap-6 text-base;
}
.social-media p a {
    @apply underline text-lg decoration-slate-600 text-slate-300;
}
</style>