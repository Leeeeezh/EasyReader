import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      // redirect: '/ebook/LifeSciences|2016_Book_TechnologicalAndInstitutionalI'
      redirect: '/store'
    },
    {
      path: '/ebook',
      component: () => import('./views/ebook/Index.vue'),
      children: [{
        path: ':fileName',
        component: import('./components/ebook/EbookReader.vue')
      }]
    },
    {
      path: '/store',
      component: () => import('./views/store/Index.vue')
    },
    {
      path: '/detail/:bookName',
       component: () => import('./views/detail/Index.vue')
    },
    {
      path: '/shelf',
      component: () => import('./views/shelf/Index.vue')
    }
  ]
})
