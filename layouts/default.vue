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
    </div>
</template>