import './assets/scss/themes/default.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store/loader'
import loadLocalApi from './api'

if (process.env.NODE_ENV === 'development') {
	loadLocalApi()
}

createApp(App).use(pinia).use(router).mount('#app')
