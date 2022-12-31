export default defineNuxtConfig({
	css: ["~/assets/css/tailwind.css"],
	buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
	colorMode: {
		classSuffix: "",
	},
	app: {
		head: {
			charset: "utf-16",
			viewport: "width=500, initial-scale=1",
			title: "Amos Dev",
			meta: [{ name: "description", content: "Trying to showcase my programming skills." }],
		},
		pageTransition: { name: "page", mode: "out-in" },
	},
});
