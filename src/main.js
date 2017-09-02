// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAMap from 'vue-amap'

import iView from 'iview'
import 'iview/dist/styles/iview.css'// 使用 CSS

Vue.use(iView)

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '020738b2c585f983bf34a5aea496ed73',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
