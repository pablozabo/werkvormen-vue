<template>
	<div>loading...</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { getExercise } from '@/services/apiService'
import { Exercise } from '@/model'
import exerciseMapping from '@/data/exerciseMapping'

interface Props {
	ticket: string
}

const props = defineProps<Props>()
const router = useRouter()
const store = useStore()
const { load } = store

try {
	const exercise: Exercise = await getExercise(props.ticket)

	if (exercise) {
		load(exercise)
		router.push({ path: `exercise/${exerciseMapping[exercise.werkvormType]}` })
	} else {
		router.push({ path: '404' })
	}
} catch (ex) {
	console.log(ex)
	// TODO: save error
	router.push({ path: 'error' })
}
</script>
