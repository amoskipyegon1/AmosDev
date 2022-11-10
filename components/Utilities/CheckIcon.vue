<script setup lang="ts">
defineProps<{
	bg: string;
}>();
</script>
<template>
	<div class="icon">
		<img src="@/assets/components/bage.png" alt="" :class="bg" />
	</div>
</template>
