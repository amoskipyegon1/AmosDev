<script setup lang="ts">
//
const firstref = ref<HTMLDivElement>();
const firstloader = ref<boolean>(false);

//
const secondref = ref<HTMLDivElement>();
const secondloader = ref<boolean>(false);

//
const thirdref = ref<HTMLDivElement>();
const thirdloader = ref<boolean>(false);

onMounted(() => {
    const firstObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                firstloader.value = true;
                firstObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.4,
        }
    );

    firstObs.observe(firstref.value as Element);

    const secondObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                secondloader.value = true;
                secondObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.5,
        }
    );

    secondObs.observe(secondref.value as Element);

    const thirdObs = new IntersectionObserver(
        (entry) => {
            if (entry[0].isIntersecting) {
                thirdloader.value = true;
                thirdObs.unobserve(entry[0].target);
            }
        },
        {
            threshold: 0.6,
        }
    );

    thirdObs.observe(thirdref.value as Element);
});
</script>
<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
        <div
            ref="firstref"
            class="skill-card card-tate flex flex-col gap-y-0 sm:gap-y-1 rounded-md px-1 sm:px-2 py-2 sm:py-3 shadow-md transition duration-700"
            :class="firstloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/4'"
        >
            <div class="skill-title w-full flex flex-col gap-y-2 items-center justify-center py-2">
                <div class="img-skill w-[48px] h-[48px]">
                    <img src="~/assets/components/Icons/backend.png" alt="" class="w-full h-full" />
                </div>
                <h4 class="text-lg tracking-wide capitalize">Backend development</h4>
            </div>
            <article class="w-full flex flex-col sm:gap-y-0.5 px-2">
                <p class="text-sm leading-6 tracking-wide break-words">
                    Overall, my experience in backend development has equipped me with the skills and knowledge needed to create efficient
                    and effective solutions.
                </p>
                <p class="text-sm leading-6 tracking-wide break-words">
                    As a backend developer, I have a strong skill set in building RESTful APIs and implementing authentication modules. I
                    have a solid foundation using a variety of tools and frameworks for development.
                </p>
            </article>
            <ul class="grid grid-cols-2 w-full gap-x-3 gap-y-3 px-2 py-3">
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Python</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Java</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Django</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Springboot</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Fast Api</span>
                </li>

                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Json Web Tokens</span>
                </li>

                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Pytest/Writing Tests</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>OpenApi Documentation</span>
                </li>
            </ul>
        </div>

        <div
            ref="secondref"
            class="skill-card card-tate flex flex-col gap-y-0 sm:gap-y-1 rounded-md px-1 sm:px-2 py-2 sm:py-3 shadow-md transition duration-700"
            :class="secondloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/4'"
        >
            <div class="skill-title w-full flex flex-col gap-y-2 items-center justify-center py-2">
                <div class="img-skill w-[48px] h-[48px]">
                    <img src="~/assets/components/Icons/frontend.png" alt="" class="w-full h-full" />
                </div>
                <h4 class="text-lg tracking-wide capitalize">Frontend development</h4>
            </div>
            <article class="w-full flex flex-col sm:gap-y-0.5 px-2">
                <p class="text-sm leading-6 tracking-wide break-words">
                    Overall, my frontend development expertise has given me the abilities and knowledge required to create visually
                    appealing and user-friendly web applications.
                </p>
                <p class="text-sm leading-6 tracking-wide break-words">
                    As a frontend developer, I have a strong skill set in implementing design UIs and linking client applications with APIs.
                    I have experience creating solutions in the form of web applications and have a solid foundation using a variety of
                    tools and frameworks for development.
                </p>
            </article>
            <ul class="grid grid-cols-2 w-full gap-x-3 gap-y-3 px-2 py-3">
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>HTML</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Css</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>JavaScript</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>TypeScript</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Vue JS</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Nuxt</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>React</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>TailwindCSS</span>
                </li>
            </ul>
        </div>

        <div
            ref="thirdref"
            class="skill-card card-tate flex flex-col gap-y-0 sm:gap-y-1 rounded-md px-1 sm:px-2 py-2 sm:py-3 shadow-md transition duration-700"
            :class="thirdloader ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/4'"
        >
            <div class="skill-title w-full flex flex-col gap-y-2 items-center justify-center py-2">
                <div class="img-skill w-[48px] h-[48px]">
                    <img src="~/assets/components/Icons/database.png" alt="" class="w-full h-full" />
                </div>
                <h4 class="text-lg tracking-wide capitalize">Database development</h4>
            </div>
            <article class="w-full flex flex-col sm:gap-y-0.5 px-2">
                <p class="text-sm leading-6 tracking-wide break-words">
                    My experience in database development has equipped me with the skills and knowledge needed to create reliable and
                    scalable data storage solutions.
                </p>
                <p class="text-sm leading-6 tracking-wide break-words">
                    I have a strong understanding of how to design efficient and effective database schemas. I am also experienced in
                    writing complex SQL queries to extract and manipulate data and have worked on optimizing query performance to ensure
                    smooth and efficient data access.
                </p>
            </article>
            <ul class="grid grid-cols-2 w-full gap-x-3 gap-y-3 px-2 py-3">
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>SQL</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>PostgreSQL</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>MySQL</span>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-5 h-5 text-teal-600">
                        <IconsCheckGreen />
                    </div>
                    <span>Docker</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.skill-card ul li {
    @apply text-sm tracking-wide;
}
</style>
