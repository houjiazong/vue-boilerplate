import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import axios from 'axios'
import Cookies from 'js-cookie'

import createRouter from './router'
import store from './store'
import App from './App'

Vue.config.productionTip = false

// create store and router instances
const router = createRouter()

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// Add a request interceptor
axios.interceptors.request.use((config) => {
  return {
    ...config,
    params: {
      ...config.params,
      Authorization: Cookies.get('Authorization')
    }
  }
}, function (error) {
  return Promise.reject(error)
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#root')
