import { WerkvormenState } from '@/model'
import { saveSettings } from '@/services/apiService'
import { PiniaPluginContext } from 'pinia'

export default ({ store }: PiniaPluginContext<'main', WerkvormenState>) => {
	store.$subscribe(() => {
		//TODO: set a debounce time
		store.settings && saveSettings(store.settings)
	})
}
