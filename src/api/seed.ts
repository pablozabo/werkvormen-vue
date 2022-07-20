import { Exercise } from '@/model'
import { Registry, Server } from 'miragejs'
import { Assign, ModelDefinition } from 'miragejs/-types'
import { keysToLowerCase } from '@/utils'
import data from './data/exercises.json'

const exercises = keysToLowerCase(data)

export default (
	server: Server<
		Registry<
			{
				exercise: ModelDefinition<Assign<{}, Partial<Exercise>>>
			},
			{}
		>
	>
) => {
	for (const exercise of <Array<Exercise>>(<unknown>exercises)) {
		server.create('exercise', exercise)
	}
}
