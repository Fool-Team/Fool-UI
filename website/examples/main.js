import Vue from 'vue'
import App from './App.vue'
import foolUI from '../../packages'

import '../../packages/theme-thalk/display.scss'
Vue.config.productionTip = false
Vue.use(foolUI)
new Vue({
  render: h => h(App)
}).$mount('#app')