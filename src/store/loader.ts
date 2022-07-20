import { createPinia, PiniaPlugin } from 'pinia'
import * as plugins from './plugins'

const pinia = createPinia()
pinia.use(<PiniaPlugin>(<unknown>plugins.SettingsWatcher))

export default pinia
