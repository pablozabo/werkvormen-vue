import Word from './word'
import ExerciseType from './exerciseType'
import ExerciseSettings from './exerciseSettings'

export default interface Exercise {
	ticket: string | undefined
	werkvormType: ExerciseType
	wordtype: string
	seeProgres: boolean
	werkvormId: number
	seeCustomSpeedTimer: boolean
	settings: ExerciseSettings
	words: Array<Word>
}
