<template>
	<main class="w-screen h-screen flex flex-col overflow-x-hidden">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</main>
</template>

<style>
body {
	line-height: 1.5;
	font-family: "Mulish", Arial, sans-serif;
	min-height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	position: relative;
	box-sizing: border-box;
	-webkit-tap-highlight-color: transparent;
	outline: none;
	background-color: #130912;
	overflow-x: hidden !important;
	padding: 0%;
	margin: 0%;
}

::-webkit-scrollbar {
	width: 5px;
	height: 5px;
	border-radius: 32px;
}

::-webkit-scrollbar-corner {
	background-color: #f9fbff;
}

::-webkit-scrollbar-thumb {
	background-color: #ff0039;
	border-radius: 32px;
}
::-webkit-scrollbar-track {
	background-color: #f9fbff;
}
</style>
