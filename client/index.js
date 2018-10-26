import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.styl'
import VueRouter from 'vue-router'

import createRouter from './config/router'

import Vuex from 'vuex'
import store from './store/store'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
