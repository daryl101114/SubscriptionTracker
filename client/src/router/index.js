import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/pages/home.vue'
import Profile from '@/pages/profile/profile.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
