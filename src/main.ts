import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import BootstrapVue from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/style.css'

createApp(App).use(router).use(BootstrapVue).use(store).mount('#app')
