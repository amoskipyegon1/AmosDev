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
	<section class="w-full flex flex-col gap-y-4 pb-8">
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
		<header class="w-full flex flex-col gap-y-3 justify-center items-center pt-8 px-20 font-serif">
			<h3 class="text-6xl tracking-wide">Amos Kipyegon</h3>
			<h3 class="text-4xl capitalize tracking-wide text-center">Full-stack Developer <br />based in kenya</h3>
		</header>
		<div id="hero" class="w-full pt-8 px-20 grid grid-cols-8 font-serif">
			<div class="about col-span-2 grid grid-rows-3 gap-y-12">
				<div class="h-card">
					<div class="title">
						<h4 class="text-base uppercase text-neutral-500">biography</h4>
					</div>
					<p class="text-lg">
						I am a problem-solver at heart, and I enjoy the challenge of finding creative solutions to complex problems. I'm
						Amos, a Full-Stack Developer working as a Freelancer.
					</p>
				</div>
				<div class="h-card">
					<div class="title">
						<h4 class="text-base uppercase text-neutral-500">contact</h4>
					</div>
					<article class="flex flex-col gap-y-2">
						<p class="text-lg tracking-wide">Nairobi, Kenya</p>
						<p class="text-lg tracking-wide">amosk7793@gmail.com</p>
						<p class="text-lg tracking-wide">+254 794 81 81 11</p>
					</article>
				</div>
				<div class="h-card">
					<div class="title">
						<h4 class="text-base uppercase text-neutral-500">services</h4>
					</div>
					<article class="flex flex-col gap-y-2">
						<p class="text-lg tracking-wide capitalize">Back-end development</p>
						<p class="text-lg tracking-wide capitalize">Front-end development</p>
						<p class="text-lg tracking-wide capitalize">Database design</p>
					</article>
				</div>
			</div>
			<div id="hero-img" class="col-span-4 flex justify-center items-center">
				<img src="~/assets/Img/me.webp" alt="" class="max-h-[560px] rounded-3xl p-2 ring-1 ring-neutral-800" />
			</div>
			<div class="about col-span-2 grid grid-rows-3 gap-y-12">
				<div class="h-card items-end">
					<div class="title">
						<h4 class="text-base uppercase text-neutral-500 text-end">years of <br />experience</h4>
					</div>
					<p class="text-5xl">2</p>
				</div>
				<div class="h-card items-end">
					<div class="title">
						<h4 class="text-base uppercase text-neutral-500 text-end">satisfication <br />clients</h4>
					</div>
					<p class="text-5xl">100%</p>
				</div>
				<div class="h-card items-end">
					<div class="title">
						<h4 class="text-base uppercase text-neutral-500 text-end">projects done</h4>
					</div>
					<p class="text-5xl">20+</p>
				</div>
			</div>
		</div>
		<div id="skills" class="py-12 flex flex-col gap-y-10 items-center justify-center w-full px-20">
			<div class="title w-full flex items-center justify-center py-8 border-t border-neutral-800">
				<h2 class="text-4xl tracking-wider font-light uppercase">My <span class="text-super">Skills</span></h2>
			</div>
			<div class="w-full grid grid-cols-3 gap-x-4">
				<div id="skill-card" class="card-tate flex flex-col gap-y-2 rounded-md px-2 py-3 shadow-md">
					<div class="icon w-full flex items-center justify-center py-3">
						<img src="~/assets/components/Icons/backend.png" alt="" class="" />
					</div>
					<article class="w-full flex flex-col gap-y-2 px-2">
						<p class="text-sm leading-6 tracking-wide break-words">
							As a backend developer, I have a strong skill set in building RESTful APIs and implementing authentication
							modules. I have experience working with GraphQL to create efficient data APIs, and have a solid foundation in
							using a variety of tools and frameworks for development work.
						</p>
						<p class="text-sm leading-6 tracking-wide break-words">
							You are skilled in using Django and Python for building web applications, and have also utilized Springboot for
							creating standalone Java-based applications.
						</p>
					</article>
				</div>
			</div>
		</div>
	</section>
	<!-- <section class="w-full flex flex-col gap-y-2">
		<div
			class="nav-bar w-full px-3 sm:px-4 xl:px-28 2xl:px-48 pt-5 pb-3 flex flex-row justify-between items-center border-b border-neutral-800"
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
						<UtilitiesGithubIcon :bg="'bg-gray-400 hover:bg-gray-200 duration-200 transition rounded-full w-6 h-6'" />
					</button>
				</div>
			</div>
		</div>
		<main class="flex flex-col px-4 lg:px-8 xl:px-32 2xl:px-56 w-full">
			<div class="hero">
				<HomeHero />
			</div>
			<div class="about w-full pt-12">
				<About />
			</div>
		</main>
	</section> -->
</template>

<style scoped>
.links li {
	@apply text-base font-light tracking-wide capitalize hover:text-gray-50 cursor-pointer transition-colors duration-200;
}
.git::before {
	content: "";
	width: 1px;
	height: 20px;
	position: absolute;
	left: 0;
	background-color: #484848;
}

.about .h-card {
	@apply flex flex-col gap-y-4;
}
</style>
