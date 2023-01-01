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
	<section class="w-full flex flex-col gap-y-0 md:gap-y-4">
		<!-- Navbar Content -->
		<Navbar />

		<!-- Hero -->
		<header class="w-full flex flex-col gap-y-3 justify-center items-center pt-6 sm:pt-8 px-2 sm:px-4 md:px-20 font-serif">
			<h3 class="text-4xl sm:text-6xl tracking-wide">Amos Kipyegon</h3>
			<h3 class="text-xl sm:text-4xl capitalize tracking-wide text-center">Full-stack Developer <br />based in kenya</h3>
		</header>

		<!-- Hero Container -->
		<Hero />

		<!-- Skills -->
		<div
			id="skills"
			class="py-4 md:py-12 flex flex-col gap-y-1 sm:gap-y-5 md:gap-y-10 items-center justify-center w-full px-4 md:px-8 lg:px-20"
		>
			<div class="title w-full flex items-center justify-center py-8 border-t border-neutral-800">
				<h2 class="text-xl sm:text-4xl tracking-wider font-light uppercase">My <span class="text-super">Skills</span></h2>
			</div>
			<Skills />
		</div>

		<!-- Experience -->
		<div
			id="experience"
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
			id="projects"
			class="py-6 sm:py-12 flex flex-col gap-y-1 sm:gap-y-5 md:gap-y-10 items-center justify-center w-full px-4 md:px-8 lg:px-20"
		>
			<div class="title w-full flex items-center justify-center py-8 border-t border-neutral-800">
				<h2 class="text-xl sm:text-4xl tracking-wider font-light uppercase">My Latest<span class="text-super"> Projects</span></h2>
			</div>
			<Projects />
		</div>

		<!-- Footer -->
		<Footer />
	</section>
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
