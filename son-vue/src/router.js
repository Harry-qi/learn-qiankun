import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('./view/home'),
    meta: {
      title: 'home'
    }
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('./view/about'),
    meta: {
      title: 'about'
    }
  }
]


export default routes
