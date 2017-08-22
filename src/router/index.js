import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Top = () => import('../views/top/Main.vue')
const New = () => import('../views/new/Main.vue')
const Me = () => import('../views/me/Main.vue')

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/top'
      },
      {
        path: '/top',
        component: Top
      },
      {
        path: '/new',
        component: New
      },
      {
        path: '/me',
        component: Me
      }
    ]
  })
}
