<script setup lang="ts">
const navref = ref<HTMLDivElement>();
const navloader = ref<boolean>(false);

// onMounted(() => {
// 	const itemObs = new IntersectionObserver(
// 		(entry) => {
// 			if (entry[0].isIntersecting) {
// 				navloader.value = true;
// 				itemObs.unobserve(entry[0].target);
// 			}
// 		},
// 		{
// 			threshold: 0.25,
// 		}
// 	);

// 	itemObs.observe(navref.value as Element);
// });
</script>
<template>
	<section class="w-full flex flex-col gap-y-0 sm:gap-y-4">
		<!-- Navbar Content -->
		<Navbar />

		<!-- Hero -->
		<header class="w-full flex flex-col gap-y-3 justify-center items-center pt-6 sm:pt-8 px-4 sm:px-20 font-serif">
			<h3 class="text-5xl sm:text-6xl tracking-wide">Amos Kipyegon</h3>
			<h3 class="text-3xl sm:text-4xl capitalize tracking-wide text-center">Full-stack Developer <br />based in kenya</h3>
		</header>

		<!-- Hero Container -->
		<Hero />

		<!-- Skills -->
		<div id="skills" class="py-4 sm:py-12 flex flex-col gap-y-5 sm:gap-y-10 items-center justify-center w-full px-4 sm:px-20">
			<div class="title w-full flex items-center justify-center py-8 border-t border-neutral-800">
				<h2 class="text-3xl sm:text-4xl tracking-wider font-light uppercase">My <span class="text-super">Skills</span></h2>
			</div>
			<Skills />
		</div>

		<!-- Experience -->

		<div id="experience" class="py-12 flex flex-col gap-y-5 sm:gap-y-10 items-center justify-center w-full px-4 sm:px-20">
			<div class="title w-full flex items-center justify-center py-8 border-t border-neutral-800">
				<h2 class="text-xl sm:text-4xl tracking-wider font-light uppercase">
					Education & <span class="text-super"> Experience</span>
				</h2>
			</div>
			<Experience />
		</div>
		<Footer />
	</section>
	<!-- <section class="w-full flex flex-col gap-y-2">
		<div
			class="nav-bar w-full px-3 sm:px-4 xl:px-28 2xl:px-48 pt-5 pb-3 flex flex-row justify-between items-center border-b border-neutral-800"
		>
			<div class="left flex flex-row gap-x-3 items-center">
				<img src="@/assets/Img/favicon-32x32.png" alt="" class="rounded-md" />
				<span class="font-light text-lg tracking-wide">Dev</span>
			</div>
			<div class="right flex flex-row gap-x-8 items-center justify-end">
				<ul class="links hidden sm:flex flex-row items-center gap-x-8">
					<li>home</li>
					<li>About</li>
					<li>Skills</li>
					<li>Projects</li>
				</ul>
				<div class="git flex flex-row items-center relative px-6 sm:px-4">
					<button class="">
						<UtilitiesGithubIcon :bg="'bg-gray-400 hover:bg-gray-200 duration-200 transition rounded-full w-6 h-6'" />
					</button>
				</div>
			</div>
		</div>
		<main class="flex flex-col px-4 lg:px-8 xl:px-32 2xl:px-56 w-full">
			<div class="hero">
				<HomeHero />
			</div>
			<div class="about w-full pt-12">
				<About />
			</div>
		</main>
	</section> -->
</template>

<style scoped>
.git::before {
	content: "";
	width: 1px;
	height: 20px;
	position: absolute;
	left: 0;
	background-color: #484848;
}
</style>
