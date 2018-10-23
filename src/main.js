
import Vue from 'vue'
import App from './App'
import router from './router'

import ShopHeader from './components/ShopHeader/ShopHeader'

Vue.config.productionTip = false
Vue.component('ShopHeader',ShopHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
