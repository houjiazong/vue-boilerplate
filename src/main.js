import Vue from 'vue'
import Mint from 'mint-ui'

import createRouter from './router'
import App from './App'

Vue.use(Mint)

Vue.config.productionTip = false

const router = createRouter()

const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#root')
