<script setup lang="ts">
const navref = ref<HTMLDivElement>();
const navloader = ref<boolean>(false);

onMounted(() => {
	const itemObs = new IntersectionObserver(
		(entry) => {
			if (entry[0].isIntersecting) {
				navloader.value = true;
				itemObs.unobserve(entry[0].target);
			}
		},
		{
			threshold: 0.25,
		}
	);

	itemObs.observe(navref.value as Element);
});
</script>
<template>
	<section class="w-full flex flex-col py-6 xl:max-w-[1240px] gap-y-10">
		<div
			class="navigation card-tate py-3 rounded-xl px-4 flex flex-row justify-between transition duration-1000"
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
					<!-- <UtilitiesGithubIcon :bg="'w-6 h-6 bg-gray-50 rounded-full'" /> -->
					<span class="text-base capitalize tracking-wide">github →</span>
				</NuxtLink>
			</div>
		</div>
		<div class="hero min-h-[500px] max-h-[500px]">
			<HomeHero />
		</div>
		<div class="about w-full pt-12">
			<About />
		</div>
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
</style>
