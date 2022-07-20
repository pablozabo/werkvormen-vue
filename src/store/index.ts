import { defineStore } from 'pinia'
import { Exercise, WerkvormenState, Word, ExerciseSettings, Settings } from '@/model'

export const useStore = defineStore('main', {
	state: (): WerkvormenState => ({ exercise: undefined, settings: undefined, ready: false }),
	getters: {
		words(state): Array<Word> {
			return state.exercise?.words || []
		},
		exerciseSettings(state): ExerciseSettings | undefined {
			return state.exercise?.settings
		},
		localSettings(state): Settings | undefined {
			return state.settings
		}
	},
	actions: {
		start(): void {
			this.ready = true
		},
		load(exercise: Exercise): void {
			this.exercise = exercise
			// TODO: set settings
		}
	}
})
