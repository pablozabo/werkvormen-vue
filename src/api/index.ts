import { Exercise } from '@/model'
import { createServer, Factory, Model } from 'miragejs'
import seed from './seed'

export default () => {
	createServer({
		models: {
			exercise: Model.extend<Partial<Exercise>>({})
		},
		factories: {
			exercise: Factory.extend<Partial<Exercise>>({})
		},
		seeds(server) {
			seed(server)
		},
		routes() {
			this.get('/load', (schema, request) => {
				return schema.findBy('exercise', { ticket: request.queryParams?.ticket })
			})
		}
	})
}
