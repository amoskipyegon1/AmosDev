<template>
    <div class="w-full h-full overflow-x-hidden overflow-y-auto">
        <header class="h-[6rem]">
            <nav class="w-full h-full px-4 flex items-center">
                <DesignsNavBar />
            </nav>
        </header>
        <main class="w-full flex items-center justify-center">
            <slot></slot>
        </main>
        <footer class="flex justify-center items-center pt-6">
            <div class="footer-container w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px] flex items-start flex-col gap-2">
                <h3>Designed & Built by Amos Kipyegon</h3>
                <p class="text-slate-500 text-sm">@2022 - present</p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
footer {
    font-family: "Arial";
}
.footer-container {
    transition: width 300ms ease;
}
</style>