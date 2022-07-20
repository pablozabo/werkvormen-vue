<template>
	<div>Start panel animation</div>
	<div>
		<button @click="store.start">Start exercise</button>
	</div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'

const store = useStore()
const { start } = store
</script>
