<template>
    <main class="w-full flex flex-col">
        <header class="w-full bg-app-purple">
            <Navbar></Navbar>
        </header>
        <section class="w-full">
            <slot />
        </section>
    </main>
</template>
