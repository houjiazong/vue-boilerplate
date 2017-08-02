import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const GroupMain = () => import('../views/group/Main.vue')
const DiscoverMain = () => import('../views/discover/Main.vue')
const MeMain = () => import('../views/me/Main.vue')

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/group'
      },
      {
        path: '/group',
        component: GroupMain
      },
      {
        path: '/discover',
        component: DiscoverMain
      },
      {
        path: '/me',
        component: MeMain
      }
    ]
  })
}
