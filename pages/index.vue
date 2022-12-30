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
	<section class="w-full flex flex-col gap-y-2 justify-center items-center">
		<div
			class="nav-bar w-full px-1.5 lg:px-4 xl:px-28 2xl:px-48 pt-5 pb-3 flex flex-row justify-between items-center border-b border-neutral-800"
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
						<UtilitiesGithubIcon
							:bg="'bg-[#484848] opacity-80 hover:opacity-100 duration-200 transition rounded-full w-6 h-6'"
						/>
					</button>
				</div>
			</div>
		</div>
		<!-- <main class="flex flex-col px-4 lg:px-8 xl:px-32 2xl:px-56">
			<div class="hero">
				<HomeHero />
			</div>
			<div class="about w-full pt-12">
				<About />
			</div>
		</main> -->
	</section>
</template>

<style scoped>
.right .links li {
	@apply text-base font-light tracking-wide capitalize;
}
.git::before {
	content: "";
	width: 1px;
	height: 20px;
	position: absolute;
	left: 0;
	background-color: #484848;
}
</style>
