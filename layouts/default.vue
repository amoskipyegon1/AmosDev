<template>
    <div class="w-full h-full">
        <div class="logo fixed top-0 left-0 translate-y-[10%] z-20 translate-x-[30%]">
            <img src="@/assets/img/signature.png" alt="i" class="w-[6rem] sm:w-[8rem] h-[4rem]">
        </div>
        <header class="h-[5rem]">
            <nav class="w-full h-full px-4 flex items-center">
                <DesignsNavBar />
            </nav>
        </header>
        <main class="w-full">
            <slot></slot>
        </main>
    </div>
</template>