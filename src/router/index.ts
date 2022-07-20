import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

function loadExercise(exercise: string) {
	return () => import(`@/exercises/${exercise}.vue`)
}

const routes: Array<RouteRecordRaw> = [
	{
		path: '/:ticket',
		name: 'Loader',
		props: true,
		component: () => import(/* webpackChunkName: "loader" */ '@/views/Loader.vue')
	},
	{
		path: '/exercise',
		name: 'Exercise',
		component: () => import(/* webpackChunkName: "exercise" */ '@/views/Exercise.vue'),
		children: [
			{
				path: 'groeiwoorden',
				component: loadExercise('Groeiwoorden')
			},
			{
				path: 'kleurenDictee',
				component: loadExercise('KleurenDictee')
			}
		]
	},
	{
		path: '/error',
		name: 'Error',
		component: () => import(/* webpackChunkName: "error" */ '@/views/Error.vue')
	},
	{
		path: '/404',
		name: 'NotFound',
		component: () => import(/* webpackChunkName: "notFound" */ '@/views/NotFound.vue')
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/404'
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
