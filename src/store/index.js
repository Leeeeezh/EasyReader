import Vue from 'vue'
import Vuex from 'vuex'
import reader from './reader/index'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    reader
  }
})
