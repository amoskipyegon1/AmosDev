<script setup lang="ts">
defineProps<{
	bg: string;
}>();
</script>
<template>
	<div class="icon">
		<img src="@/assets/components/github.svg" alt="" :class="bg" />
	</div>
</template>
