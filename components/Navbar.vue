<template>
    <nav
        class="w-full flex flex-row items-center justify-between py-4 px-48 fixed top-0 left-0 right-0 bg-white backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 shadow-sm z-40"
    >
        <div class="logo flex flex-row items-center">
            <button class="text-xl font-bold text-deep-color tracking-tight">Amos.dev</button>
        </div>
        <ul class="nav-links flex flex-row items-start gap-x-8 text-deep-color">
            <li
                class="flex items-center px-1 py-2 font-normal text-base transition duration-200 text-current cursor-pointer"
            >
                Home
            </li>
            <li
                class="flex items-center px-1 py-2 font-normal text-base transition duration-200 text-current cursor-pointer"
            >
                About
            </li>
            <li
                class="flex items-center px-1 py-2 font-normal text-base transition duration-200 text-current cursor-pointer"
            >
                Projects
            </li>
            <li
                class="flex items-center px-1 py-2 font-normal text-base transition duration-200 text-current cursor-pointer"
            >
                Blogs
            </li>
        </ul>
        <div class="flex flex-row items-center gap-x-6">
            <button>
                <Icon name="mdi:github" class="text-deep-color text-3xl" />
            </button>
            <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-sm shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] flex items-center"
            >
                Let's Talk
            </button>
        </div>
    </nav>
</template>
