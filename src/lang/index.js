import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh-CN.js'
import en from './en-US.js'

Vue.use(VueI18n)
let locale = localStorage.getItem('locale')
if (!locale) {
  locale = 'us'
  localStorage.setItem('locale', 'us')
}
export default new VueI18n({
  locale: 'cn',
  messages: {
    cn: zh,
    us: en
  }
})
