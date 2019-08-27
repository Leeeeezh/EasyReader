import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/ebook/LifeSciences|2016_Book_TechnologicalAndInstitutionalI'
  }, {
    path: '/ebook',
    component: () => import('./views/ebook/EbookRoot.vue'),
    children: [{
      path: ':fileName',
      component: import('./components/ebook/EbookReader.vue')
    }]
  }]
})
