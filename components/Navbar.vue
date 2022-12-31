<template>
	<nav class="grid grid-cols-3 gap-x-2 w-full px-20 py-4 sticky top-0 bg-tate border-b border-neutral-800">
		<ul class="links flex flex-row items-center gap-x-8">
			<li>home</li>
			<li>Skills</li>
			<li>Projects</li>
		</ul>
		<div class="flex flex-col gap-y-2 items-center justify-center">
			<img src="@/assets/Img/favicon-32x32.png" alt="" class="rounded-md w-10 h-10" />
			<span class="font-light text-xs tracking-wide text-center uppercase"
				>Amos <br />
				Kipyegon</span
			>
		</div>
		<div class="flex flex-row gap-x-8 items-center justify-end">
			<div class="w-5 h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
				<IconsTwitter />
			</div>
			<div class="w-5 h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
				<IconsLinkedin />
			</div>
			<div class="w-5 h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
				<IconsGithub />
			</div>
		</div>
	</nav>
</template>

<style scoped>
.links li {
	@apply text-base font-light tracking-wide capitalize hover:text-gray-50 cursor-pointer transition-colors duration-200;
}
</style>
