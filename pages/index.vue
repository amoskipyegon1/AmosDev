<template>
	<section class="w-full flex flex-col py-6 xl:max-w-[1240px] gap-y-10">
		<div class="navigation card-tate py-3 rounded-xl px-4 flex flex-row justify-between">
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
				<small
					class="capitalize hidden sm:block tracking-normal text-[15px] font-semibold hover:text-tomato duration-200 transition cursor-pointer"
					>email me</small
				>
			</div>
			<div class="custom-links flex flex-row items-center">
				<button class="btn hover:opacity-80">
					<!-- <UtilitiesGithubIcon :bg="'w-6 h-6 bg-gray-50 rounded-full'" /> -->
					<span class="text-base capitalize tracking-wide">github →</span>
				</button>
			</div>
		</div>

		<div class="hero relative grid grid-cols-1 md:grid-cols-2 z-0">
			<div class="hero-text z-0 px-0 py-4 flex flex-col gap-y-8">
				<div class="work-status flex flex-row">
					<button class="px-1 py-1.5 flex flex-row justify-start items-center gap-x-3 rounded-3xl bg-[#e741421f]">
						<UtilitiesCheckIcon :bg="'w-6 h-6'" />
						<small class="text-sm font-semibold capitalize tracking-wide pr-4">available for work</small>
					</button>
				</div>
				<h3 class="text-2xl md:text-5xl font-semibold tracking-wide uppercase">Amos Kipyegon</h3>
				<div class="brief-about">
					<p class="text-lg tracking-wide leading-8">
						Working on solving problems of scale and long term technology.
						<span class="text-[#e74142] uppercase">Software Engineer</span> who loves Python and JavaScript.
					</p>
				</div>
			</div>
			<div class="hero-img opacity-5 sm:opacity-20 md:opacity-60 absolute md:relative top-0 right-0 -z-10">
				<img src="@/assets/Img/profile-rm.png" alt="" class="bg-inherit" />
			</div>
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
