<script setup lang="ts">

const title = ref<string>('Amos_dev');
const description = ref<string>('This is my portfolio blog');

// import { isNavigationFailure } from "vue-router";
// import LoadingBar from "./components/utils/loadingBar.vue";
// const router = useRouter();
// const succesfull = ref<boolean>(true);
// const routes = ref<boolean>(false);

// router.beforeEach(to => {
//   succesfull.value = true;
//   routes.value = true;
// })
// router.afterEach((to, from, failure) => {
//   if (isNavigationFailure(failure)) {
//     succesfull.value = false;
//   }
//   setTimeout(() => {
//     routes.value = false;
//   }, 1000);
// })

useHead({
  title: title.value,
  meta: [{
    name: 'amos_dev',
    content: description.value
  }]
})

</script>
<template>
  <main class="app w-screen h-screen relative">
    <div class="page-bg absolute top-0 bottom-0 left-0 right-0">

    </div>
    <NuxtLayout class="fixed top-0 bottom-0 left-0 right-0 overflow-y-auto">
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<style>

html {
  line-height:1.5;
 -webkit-text-size-adjust:100%;
 -moz-tab-size:4;
 tab-size:4;
 font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"
}

body {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
  @apply antialiased text-slate-400 bg-slate-900;
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  text-rendering: optimizeLegibility;
}

.app {
  @apply bg-slate-900;
}
.page-bg {
  @apply bg-slate-900 opacity-80;
}
</style>