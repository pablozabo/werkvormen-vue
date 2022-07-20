import axios from 'axios'
import settings from '@/settings'
import { Exercise, Settings } from '@/model'

var httpClient = axios.create({
	baseURL: settings.apiUrl
})

export const getExercise = (ticket: string): Promise<Exercise> =>
	httpClient.get<any>(`/load?ticket=${ticket}`).then((e) => e.data?.exercise)

export const saveSettings = (settings: Settings): Promise<any> =>
	httpClient.post<Settings>(`save`, settings).then((e) => e.data)
