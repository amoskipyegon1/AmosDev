<template>
    <main class="w-full flex justify-center pt-8">
        <section class="context w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px] flex flex-col gap-y-8">
            <div class="name text-5xl text-slate-100 font-light font-serif">
                <h2>Amos K.</h2>
            </div>
            <article class="w-full">
                <p>
                    Hey, I am Amos Kipyegon, a fanatical software engineer specialized in backend developement (and also frontend development). Currently working on open sources & 
                    learning more tech skills.
                </p>
                <div class="tech-stacks w-full py-2 flex flex-col gap-3">
                    <h3>Here are a few technologies I’ve been working with recently:</h3>
                    <div class="languages w-[90%] sm:w-[80%] flex-col flex gap-6 px-0">
                        <ul class="frameworks grid w-full grid-cols-2 gap-y-3 decoration-slate-200 px-4">
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Typescript</li>
                            <li>Django</li>
                            <li>Spring Boot</li>
                            <li>Fast Api</li>
                            <li>Vue Js</li>
                            <li>HTML, CSS, Tailwind CSS</li>
                        </ul>
                    </div>
                </div>
                <div class="social-media leading-10 w-full pt-8">
                    <p>
                        Find me on 
                        <NuxtLink to="https://github.com/Amos-Ditto" target="_blank">GitHub</NuxtLink>,
                        <NuxtLink to="https://twitter.com/_ditto1" target="_blank">Twitter</NuxtLink>,
                        <NuxtLink to="https://www.linkedin.com/in/amos-kipyegon-584435224" target="_blank">Linkedin</NuxtLink>
                    </p>
                    <p>
                        Mail me at
                        <NuxtLink to="mailto:amosditto@gmail.com" target="_blank">amosditto@gmail.com</NuxtLink>
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
    @apply leading-7 flex flex-col gap-6 text-base sm:text-lg text-slate-400;
}
.social-media p a {
    @apply underline text-lg decoration-slate-600 text-slate-300;
    @apply hover:text-slate-100;
}
.tech-stacks .languages {
    transition: width 300ms ease;
}

.frameworks li {
    @apply relative flex items-center indent-1 text-sm sm:text-base;
}
.frameworks li::before {
    content: "▹";
    position: absolute;
    @apply text-slate-400 text-base left-[-14px] translate-y-[-10%];
}
</style>