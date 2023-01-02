<script setup lang="ts">
const navref = ref<HTMLDivElement>();
const skills = ref<HTMLDivElement>();
const experience = ref<HTMLDivElement>();
const projects = ref<HTMLDivElement>();

const navloader = ref<boolean>(false);

onMounted(() => {
    const itemObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                navloader.value = true;
                itemObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.25,
        }
    );

    itemObs.observe(navref.value as Element);
});

const ScrollFunction = (payload: string): void => {
    if (payload === 'header') {
        navref.value?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    } else if (payload === 'skills') {
        skills.value?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    } else if (payload === 'experience') {
        experience.value?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    } else if (payload === 'projects') {
        projects.value?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    } else {
        return;
    }
};
</script>
<template>
    <section class="w-full flex flex-col gap-y-0 md:gap-y-4">
        <!-- Navbar Content -->
        <Navbar @ScrollFunction="ScrollFunction" />

        <!-- Hero -->
        <header
            ref="navref"
            class="w-full flex flex-col gap-y-3 justify-center items-center pt-6 sm:pt-8 px-2 sm:px-4 md:px-20 font-serif transition duration-700"
            :class="navloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/4'"
        >
            <div class="flex sm:hidden items-center justify-center w-[96px] h-[96px]">
                <img src="~/assets/Img/portrait.jpg" alt="" class="rounded-full h-full w-full ring-2 ring-neutral-700" />
            </div>
            <h3 class="text-4xl sm:text-6xl tracking-wide">Amos Kipyegon</h3>
            <h3 class="text-xl sm:text-4xl capitalize tracking-wide text-center">Full-stack Developer <br />based in kenya</h3>
        </header>

        <!-- Hero Container -->
        <Hero />

        <!-- Skills -->
        <div
            ref="skills"
            class="py-4 md:py-12 flex flex-col gap-y-1 sm:gap-y-5 md:gap-y-10 items-center justify-center w-full px-4 md:px-8 lg:px-20"
        >
            <div class="title w-full flex items-center justify-center py-8 border-t border-neutral-800">
                <h2 class="text-xl sm:text-4xl tracking-wider font-light uppercase">My <span class="text-super">Skills</span></h2>
            </div>
            <Skills />
        </div>

        <!-- Experience -->
        <div
            ref="experience"
            class="py-6 sm:py-12 flex flex-col gap-y-1 sm:gap-y-5 md:gap-y-10 items-center justify-center w-full px-4 md:px-8 lg:px-20"
        >
            <div class="title w-full flex items-center justify-center py-8 border-t border-neutral-800">
                <h2 class="text-xl sm:text-4xl tracking-wider font-light uppercase">
                    Education & <span class="text-super"> Experience</span>
                </h2>
            </div>
            <Experience />
        </div>

        <!-- Projects -->
        <div
            ref="projects"
            class="py-6 sm:py-12 flex flex-col gap-y-1 sm:gap-y-5 md:gap-y-10 items-center justify-center w-full px-4 md:px-8 lg:px-20"
        >
            <div class="title w-full flex items-center justify-center py-8 border-t border-neutral-800">
                <h2 class="text-xl sm:text-4xl tracking-wider font-light uppercase">My Latest<span class="text-super"> Projects</span></h2>
            </div>
            <Projects />
        </div>

        <!-- Reviews -->
        <div
            id="reviews"
            class="flex flex-col gap-y-1 sm:gap-y-5 md:gap-y-10 items-center justify-center w-full py-4 px-1 sm:px-4 md:px-8 lg:px-20"
        >
            <div class="title w-full flex items-center justify-center py-2 border-t border-neutral-800"></div>
            <Reviews />
            <div class="w-full flex items-center justify-center py-2 border-t border-neutral-800"></div>
        </div>

        <!-- Contact -->
        <div
            id="contact-me"
            class="flex flex-col gap-y-1 sm:gap-y-5 md:gap-y-10 items-center justify-center w-full py-5 sm:py-10 px-4 md:px-8 lg:px-20"
        >
            <Contact />
        </div>

        <!-- Footer -->
        <Footer />
    </section>
</template>

<style scoped>
.git::before {
    content: '';
    width: 1px;
    height: 20px;
    position: absolute;
    left: 0;
    background-color: #484848;
}
</style>
