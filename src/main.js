
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ShopHeader from './components/ShopHeader/ShopHeader'
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'
Vue.use(VueLazyload, {
  loading
})


Vue.config.productionTip = false
Vue.component('ShopHeader',ShopHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
