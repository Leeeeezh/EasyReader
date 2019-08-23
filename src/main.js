import Vue from 'vue'
import router from './router'
import store from './store/index.js'
import i18n from './lang/index.js'
import App from './App.vue'
import './assets/style/icon.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
