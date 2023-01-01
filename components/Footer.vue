<template>
	<footer class="py-2 flex flex-col md:gap-y-10 items-center justify-center w-full px-4 md:px-8 lg:px-20">
		<div class="py-3 sm:py-6 px-0 sm:px-2 md:px-4 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-3 gap-x-2 w-full">
			<div class="flex flex-row items-center text-xs tracking-wide">
				<small class="text-xs">@</small>
				<p>2022.</p>
				<p class="uppercase ml-1 truncate">All rights reserved</p>
			</div>
			<div class="hidden sm:block"></div>
			<div class="flex flex-row gap-x-5 sm:gap-x-8 items-center justify-end">
				<div class="w-4 h-4 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
					<IconsTwitter />
				</div>
				<div class="w-4 h-4 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
					<IconsLinkedin />
				</div>
				<div class="w-4 h-4 text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200">
					<IconsGithub />
				</div>
			</div>
		</div>
	</footer>
</template>
