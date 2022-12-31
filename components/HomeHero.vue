<script setup lang="ts">
const itemref = ref<HTMLElement>();
const elementloader = ref<boolean>(false);

onMounted(() => {
	const itemObs = new IntersectionObserver(
		(entry) => {
			if (entry[0].isIntersecting) {
				elementloader.value = true;
				itemObs.unobserve(entry[0].target);
			}
		},
		{
			threshold: 0.25,
		}
	);

	itemObs.observe(itemref.value as Element);
});
</script>
<template>
	<div class="hero relative grid grid-cols-1 sm:grid-cols-3 z-0 pt-10">
		<div class="hero-text z-0 py-4 flex flex-col gap-y-6 sm:col-span-2">
			<!-- <div class="work-status flex flex-row">
				<button
					ref="itemref"
					class="px-1 py-1.5 flex flex-row justify-start items-center gap-x-3 rounded-3xl bg-[#e741421f] transition duration-1000"
					:class="elementloader ? 'opacity-100' : 'opacity-0'"
				>
					<UtilitiesCheckIcon :bg="'w-5 h-5'" />
					<small class="text-xs font-light capitalize tracking-wider pr-4">available for work</small>
				</button>
			</div> -->
			<h3
				class="pt-2 text-3xl md:text-5xl font-semibold tracking-wide uppercase transition duration-1000"
				ref="itemref"
				:class="elementloader ? 'opacity-100' : 'opacity-0'"
			>
				Amos Kipyegon
			</h3>
			<div class="brief-about">
				<p
					class="text-base sm:text-lg tracking-wide leading-7 sm:leading-8 transition duration-1000"
					ref="itemref"
					:class="elementloader ? 'opacity-100' : 'opacity-0'"
				>
					<span class="text-super uppercase">Software Developer</span> who loves Python and JavaScript.
				</p>
			</div>
			<!-- <div
				class="socials flex flex-col gap-y-4 pt-3 transition duration-1000"
				ref="itemref"
				:class="elementloader ? 'opacity-100' : 'opacity-0'"
			>
				<h3 class="text-xl tracking-wide uppercase">contact me</h3>
				<div class="social-links flex flex-wrap gap-y-2 gap-x-5 w-full">
					<NuxtLink to="https://twitter.com/_ditto1" target="_blank" class="card-tate"> twitter </NuxtLink>
					<NuxtLink to="https://wa.link/2tzphn" target="_blank" class="card-tate"> whatsapp </NuxtLink>
					<NuxtLink to="https://www.linkedin.com/in/amos-kipyegon/" target="_blank" class="card-tate"> linkedIn </NuxtLink>
				</div>
			</div> -->
		</div>
		<!-- <div class="hero-img opacity-5 sm:opacity-20 md:opacity-70 absolute md:relative top-0 right-0 -z-10 flex items-center justify-end">
			<img
				src="@/assets/Img/Group.svg"
				alt=""
				class="bg-inherit w-auto h-[417px] bg-contain transition duration-1000"
				ref="itemref"
				:class="elementloader ? 'opacity-100' : 'opacity-0'"
			/>
		</div> -->
	</div>
</template>

<style scoped>
.social-links a {
	@apply text-sm py-2 px-4 text-gray-50 font-[500] capitalize opacity-90 hover:opacity-60 tracking-wider transition duration-200 ring-1 ring-[#484848] rounded-[20px];
}
</style>
