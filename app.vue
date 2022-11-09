<template>
	<div>
		<main class="fixed right-0 left-0 top-0 bottom-0 overflow-y-auto bg-tate text-gray-100 py-4 px-16">
			<div class="navigation w-full"></div>
		</main>
	</div>
</template>

<style>
.navigation {
	background: rgba(255, 255, 255, 0.05);
	border-radius: 15px;
	height: 60px;
	border: 1px solid rgba(255, 255, 255, 0.1);
}
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
