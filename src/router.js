import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/ebook/Laws|2015_Book_ProtectingTheRightsOfPeopleWit'
  }, {
    path: '/ebook',
    component: () => import('./views/ebook/EbookRoot.vue'),
    children: [{
      path: ':fileName',
      component: import('./components/ebook/EbookReader.vue')
    }]
  }]
})
