<template>
	<div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12">
		<div class="project flex flex-col rounded-t-md gap-y-4">
			<div class="img w-full flex max-h-[15rem]">
				<img src="~/assets/Img/projects/e-comm.webp" alt="" class="w-full h-full rounded-t-lg opacity-50" />
			</div>
			<div class="w-full flex flex-col gap-y-2">
				<div class="w-full flex flex-col gap-y-1">
					<small class="text-xs sm:text-sm font-light capitalize text-neutral-500 tracking-wider font-sans"
						>featured project</small
					>
					<h3 class="text-lg sm:text-xl tracking-wide capitalize">E-commerce store</h3>
				</div>
				<div class="card-tate rounded-sm px-1 sm:px-2 py-2 sm:py-3 shadow-lg">
					<p class="text-xs sm:text-sm">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore voluptatem iusto libero deserunt,
						repudiandae dicta porro delectus rem dolor nemo blanditiis aspernatur autem. Sint nam odit perspiciatis numquam
						sapiente?
					</p>
				</div>
				<ul class="tools w-full flex flex-row gap-x-6 gap-y-2 items-center flex-wrap mt-1">
					<li>NuxtJS</li>
					<li>Django</li>
					<li>TailwindCSS</li>
					<li>PostgreSQL</li>
				</ul>
				<div class="w-full flex flex-row items-center gap-x-4 mt-3">
					<button
						class="flex flex-row items-center gap-x-2 px-3 sm:px-4 py-2 rounded ring-1 ring-neutral-800 text-gray-300 hover:text-gray-50 transition-colors duration-200"
					>
						<div class="w-4 h-4">
							<IconsEye />
						</div>
						<span class="text-xs sm:text-sm tracking-wide">Preview</span>
					</button>
					<button
						class="flex flex-row items-center gap-x-2 px-3 sm:px-4 py-2 rounded ring-1 ring-neutral-800 text-gray-300 hover:text-gray-50 transition-colors duration-200"
					>
						<div class="w-4 h-4">
							<IconsGithub />
						</div>
						<span class="text-xs sm:text-sm tracking-wide">Github repo</span>
					</button>
				</div>
			</div>
		</div>

		<div class="project flex flex-col rounded-t-md gap-y-4">
			<div class="img w-full flex max-h-[15rem]">
				<img src="~/assets/Img/projects/portfolio.webp" alt="" class="w-full h-full rounded-t-lg opacity-50" />
			</div>
			<div class="w-full flex flex-col gap-y-2">
				<div class="w-full flex flex-col gap-y-1">
					<small class="text-xs sm:text-sm font-light capitalize text-neutral-500 tracking-wider font-sans"
						>featured project</small
					>
					<h3 class="text-lg sm:text-xl tracking-wide capitalize">This site</h3>
				</div>
				<div class="card-tate rounded-sm px-1 sm:px-2 py-2 sm:py-3 shadow-lg">
					<p class="text-xs sm:text-sm">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore voluptatem iusto libero deserunt,
						repudiandae dicta porro delectus rem dolor nemo blanditiis aspernatur autem. Sint nam odit perspiciatis numquam
						sapiente?
					</p>
				</div>
				<ul class="tools w-full flex flex-row gap-x-6 gap-y-2 items-center flex-wrap mt-1">
					<li>NuxtJS</li>
					<li>TailwindCSS</li>
				</ul>
				<div class="w-full flex flex-row items-center gap-x-4 mt-3">
					<button
						class="flex flex-row items-center gap-x-2 px-3 sm:px-4 py-2 rounded ring-1 ring-neutral-800 text-gray-300 hover:text-gray-50 transition-colors duration-200"
					>
						<div class="w-4 h-4">
							<IconsGithub />
						</div>
						<span class="text-xs sm:text-sm tracking-wide">Github repo</span>
					</button>
				</div>
			</div>
		</div>

		<div class="project flex flex-col rounded-t-md gap-y-4">
			<div class="img w-full flex max-h-[15rem]">
				<img src="~/assets/Img/projects/logistics2.webp" alt="" class="h-full rounded-t-lg opacity-50" />
			</div>
			<div class="w-full flex flex-col gap-y-2">
				<div class="w-full flex flex-col gap-y-1">
					<small class="text-xs sm:text-sm font-light capitalize text-neutral-500 tracking-wider font-sans"
						>featured project</small
					>
					<h3 class="text-lg sm:text-xl tracking-wide capitalize">This site</h3>
				</div>
				<div class="card-tate rounded-sm px-1 sm:px-2 py-2 sm:py-3 shadow-lg">
					<p class="text-xs sm:text-sm">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore voluptatem iusto libero deserunt,
						repudiandae dicta porro delectus rem dolor nemo blanditiis aspernatur autem. Sint nam odit perspiciatis numquam
						sapiente?
					</p>
				</div>
				<ul class="tools w-full flex flex-row gap-x-6 gap-y-2 items-center flex-wrap mt-1">
					<li>NuxtJS</li>
					<li>Django</li>
					<li>LeafLet JS</li>
					<li>TailwindCSS</li>
				</ul>
				<div class="w-full flex flex-row items-center gap-x-4 mt-3">
					<button
						class="flex flex-row items-center gap-x-2 px-3 sm:px-4 py-2 rounded ring-1 ring-neutral-800 text-gray-300 hover:text-gray-50 transition-colors duration-200"
					>
						<div class="w-4 h-4">
							<IconsGithub />
						</div>
						<span class="text-xs sm:text-sm tracking-wide">Github repo</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
ul.tools li {
	@apply text-xs sm:text-sm tracking-wide space-x-1 text-gray-300 font-mono;
}
</style>
