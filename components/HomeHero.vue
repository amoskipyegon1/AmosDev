<script setup lang="ts">
const itemref = ref<Element>(null);
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

	itemObs.observe(itemref.value);
});
</script>
<template>
	<div class="hero relative grid grid-cols-1 md:grid-cols-2 z-0">
		<div class="hero-text z-0 px-0 py-4 flex flex-col gap-y-6">
			<div class="work-status flex flex-row">
				<button
					ref="itemref"
					class="px-1 py-1.5 flex flex-row justify-start items-center gap-x-3 rounded-3xl bg-[#e741421f] transition duration-1000"
					:class="elementloader ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'"
				>
					<UtilitiesCheckIcon :bg="'w-6 h-6'" />
					<small class="text-sm font-semibold capitalize tracking-wide pr-4">available for work</small>
				</button>
			</div>
			<h3
				class="pt-2 text-2xl md:text-5xl font-semibold tracking-wide uppercase transition duration-1000"
				ref="itemref"
				:class="elementloader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
			>
				Amos Kipyegon
			</h3>
			<div class="brief-about">
				<p
					class="text-lg tracking-wide leading-8 transition duration-1000"
					ref="itemref"
					:class="elementloader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
				>
					Working on solving problems of scale and long term technology.
					<span class="text-[#e74142] uppercase">Software Engineer</span> who loves Python and JavaScript.
				</p>
			</div>
			<div
				class="socials flex flex-col gap-y-2 pt-3 transition duration-1000"
				ref="itemref"
				:class="elementloader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
			>
				<h3 class="text-xl tracking-wide uppercase">my socials</h3>
				<div class="social-links flex flex-wrap gap-y-2 gap-x-0.5">
					<NuxtLink
						to="https://twitter.com/_ditto1"
						target="_blank"
						class="text-xs py-1.5 px-3 bg-[steelblue] text-gray-50 font-serif font-bold uppercase opacity-90 hover:opacity-80 tracking-wide transition duration-200"
					>
						twitter
					</NuxtLink>
					<NuxtLink
						to="https://wa.link/2tzphn"
						target="_blank"
						class="text-xs py-1.5 px-3 bg-emerald-600 text-gray-50 font-serif font-bold uppercase opacity-90 hover:opacity-80 tracking-wide transition duration-200"
					>
						whatsapp
					</NuxtLink>
					<NuxtLink
						to="https://www.linkedin.com/in/amos-kipyegon/"
						target="_blank"
						class="text-xs py-1.5 px-3 bg-[steelblue] text-gray-50 font-serif font-bold uppercase opacity-90 hover:opacity-80 tracking-wide transition duration-200"
					>
						linkedin
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="hero-img opacity-5 sm:opacity-20 md:opacity-70 absolute md:relative top-0 right-0 -z-10 flex items-center justify-end">
			<img
				src="@/assets/Img/profile-rm.png"
				alt=""
				class="bg-inherit w-auto h-[417px] bg-contain transition duration-1000"
				ref="itemref"
				:class="elementloader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
			/>
		</div>
	</div>
</template>
