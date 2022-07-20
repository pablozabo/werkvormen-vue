import Settings from './settings'
import Exercise from './exercise'

export default interface WerkvormenState {
	exercise?: Exercise
	settings?: Settings
	ready: boolean
}
