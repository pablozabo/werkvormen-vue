import ExerciseType from './exerciseType'
import WoordVeldStrategy from './woordVeldStrategy'
import KlankSelectionMode from './klankSelectionMode'

export default interface ExerciseSettings {
	woordenSpeed: number
	klankenSpeed: number
	soundMuted: boolean
	schrijvenTekst: string
	blokSize: number
	wordtype: string
	werkvormType: ExerciseType
	playKlankOnNext: boolean
	instructionsText: string
	wordOrVowelString: string
	woordVeldStrategy: WoordVeldStrategy
	klankSelectionMode: KlankSelectionMode
	useSpokenWords: boolean
}
