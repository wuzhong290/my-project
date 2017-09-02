import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import InputDemo from '@/components/InputDemo'
import Map from '@/components/Map'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/input',
      name: 'input',
      component: InputDemo
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/update',
      name: 'update',
      component: Update
    }
  ]
})
