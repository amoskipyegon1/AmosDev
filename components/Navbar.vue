<template>
	<nav class="grid grid-cols-2 sm:grid-cols-3 gap-x-2 w-full px-4 sm:px-20 py-4 sticky top-0 bg-tate border-b border-neutral-800">
		<ul class="links hidden sm:flex flex-row items-center gap-x-8">
			<li>home</li>
			<li>Skills</li>
			<li>Projects</li>
		</ul>
		<div class="flex flex-col gap-y-2 items-start sm:items-center justify-center">
			<img src="@/assets/Img/favicon-32x32.png" alt="" class="rounded-md w-11 sm:w-10 h-11 sm:h-10" />
			<span class="font-light hidden sm:block text-xs tracking-wide text-center uppercase"
				>Amos <br />
				Kipyegon</span
			>
		</div>
		<div class="flex flex-row gap-x-8 items-center justify-end">
			<div class="w-7 sm:w-5 h-7 sm:h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
				<IconsTwitter />
			</div>
			<div class="w-7 sm:w-5 h-7 sm:h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
				<IconsLinkedin />
			</div>
			<div class="w-7 sm:w-5 h-7 sm:h-5 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
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
