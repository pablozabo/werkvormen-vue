<template>
	<div class="exercise-view">
		<StartPanel v-if="!ready" />
		<router-view v-if="ready" />
	</div>
</template>

<script lang="ts" setup>
import { StartPanel } from '@/components'
import { storeToRefs } from 'pinia'
import { useStore } from '@/store'

const store = useStore()
const { ready } = storeToRefs(store)
</script>

<style lang="scss">
.exercise-view {
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
}
</style>
