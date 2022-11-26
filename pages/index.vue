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
	<section class="w-full flex flex-col py-0 gap-y-10 justify-center items-center">
		<!-- <div
			class="navigation card-tate py-3 rounded-xl px-4 flex flex-row justify-between transition duration-1000 w-full"
			ref="navref"
			:class="navloader ? 'opacity-100' : 'opacity-0'"
		>
			<div class="links flex flex-row items-center gap-x-8">
				<small
					class="capitalize hidden sm:block tracking-normal text-[15px] font-semibold hover:text-tomato duration-200 transition cursor-pointer"
					>home</small
				>
				<small
					class="capitalize block tracking-normal text-lg sm:text-[15px] font-semibold hover:text-tomato duration-200 transition cursor-pointer"
					>about</small
				>
				<small
					class="capitalize hidden sm:block tracking-normal text-[15px] font-semibold hover:text-tomato duration-200 transition cursor-pointer"
					>skills</small
				>
				<small
					class="capitalize hidden sm:block tracking-normal text-[15px] font-semibold hover:text-tomato duration-200 transition cursor-pointer"
					>projects</small
				>
			</div>
			<div class="custom-links flex flex-row items-center">
				<NuxtLink to="https://github.com/Amos-Ditto" target="_blank" class="btn hover:opacity-80">
					<span class="text-base capitalize tracking-wide">github →</span>
				</NuxtLink>
			</div>
		</div> -->
		<div class="nav-bar w-full pt-4 pb-3 flex flex-row justify-between items-center">
			<div class="left flex flex-row gap-x-2 items-center">
				<img src="@/assets/Img/favicon-32x32.png" alt="" class="rounded-lg" />
				<span class="font-bold text-base tracking-wide">Dev</span>
			</div>
			<div class="right flex flex-row gap-x-8 items-center justify-end">
				<div class="links flex flex-row items-center gap-x-6">
					<span>About</span>
					<span>Skills</span>
					<span>Projects</span>
				</div>
				<div class="git flex flex-row items-center relative px-4">
					<button class="">
						<UtilitiesGithubIcon
							:bg="'bg-[#484848] opacity-80 hover:opacity-100 duration-200 transition rounded-full w-6 h-6'"
						/>
					</button>
				</div>
			</div>
		</div>
		<main class="flex flex-col xl:max-w-[1240px] sm:px-8 md:px-20 lg:px-28 xl:px-20">
			<div class="hero min-h-[500px] max-h-[500px]">
				<HomeHero />
			</div>
			<div class="about w-full pt-12">
				<About />
			</div>
		</main>
	</section>
</template>

<style scoped>
.btn {
	-webkit-tap-highlight-color: transparent;
	background: linear-gradient(to bottom, #e74142, #e84041);
	border-radius: 12.3429px;
	height: 40px;
	padding: 0 22px;
	color: #fff;
	font-weight: bold;
	font-size: 15px;
	display: flex;
	align-items: center;
	transition: opacity 0.2s;
}

.right .links span {
	@apply text-sm tracking-wider;
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
