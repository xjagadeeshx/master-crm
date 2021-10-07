import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Personal from '@/components/personal'
import education from '@/components/education'
import compliance from '@/components/compliance'
import marketing from '@/components/marketing'
import log from '@/components/log'
import AMDL from '@/components/AMDL'
Vue.use(Router)

const router = new Router({

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal,
    },
    {
      path: '/education',
      name: 'education',
      component: education,
    },
    {
      path: '/compliance',
      name: 'compliance',
      component: compliance,
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: marketing,
    },
    {
      path: '/log',
      name: 'log',
      component: log,
    },
    {
      path: '/AMDL',
      name: 'AMDL',
      component: AMDL,
    },
  ]
})



export default router