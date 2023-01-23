<template>
    <main class="w-screen h-screen flex flex-col">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </main>
</template>

<style>
html,
body {
    overflow-x: hidden;
}
body {
    /* line-height: 1.5; */
    font-family: 'Mulish', Arial, sans-serif;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background-color: #130912;
    padding: 0;
    margin: 0;
    width: 100%;
    /* @apply bg-[#111318]; */
}

::-webkit-scrollbar {
    @apply w-[2px] sm:w-[4px] h-[5px] rounded-[4px];
}

::-webkit-scrollbar-corner {
    background-color: #f9fbff;
}

::-webkit-scrollbar-thumb {
    background-color: #ff0039;
    border-radius: 4px;
}
::-webkit-scrollbar-track {
    background-color: #f9fbff;
}
</style>
