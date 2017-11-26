// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App1 from './App1'
import router from './router'

Vue.config.productionTip = false
Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app-1',
  router: router,
  template: '<App1/>',
  components: { App1 }
})
