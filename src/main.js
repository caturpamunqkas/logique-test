import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import axios from 'axios'
import VueAxios from 'vue-axios'

import { createApp } from 'vue'
import AppView from './App.vue'
import router from './router'

let APP = createApp(AppView).use(router)

APP.use(VueAxios, axios)

APP.mount('#app')
