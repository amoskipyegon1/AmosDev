<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
body {
	line-height: 1.5;
	font-family: "Mulish", Arial, sans-serif;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	position: relative;
	box-sizing: border-box;
	-webkit-tap-highlight-color: transparent;
	outline: none;
	background-color: "#130912";
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
