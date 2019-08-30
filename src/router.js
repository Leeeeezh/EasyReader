import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
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
        component: () => import('./components/ebook/EbookReader.vue'),
        meta: {
          keepAlive: true
        }
      }]
    },
    {
      path: '/store',
      component: () => import('./views/store/Index.vue'),
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    {
      path: '/store/book/:bookName',
      component: () => import('./views/detail/Index.vue')
    },
    {
      path: '/shelf',
      component: () => import('./views/shelf/Index.vue')
    }
  ]
})

// router.afterEach((to, from) => {
//   console.log(to)

//   if (to.path.startsWith('/ebook')) {
//     window.location.reload()
//   }
// })

export default router
