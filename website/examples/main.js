import Vue from 'vue'
import App from './App.vue'
import foolUI from '../../packages'
Vue.config.productionTip = false
Vue.use(foolUI)
new Vue({
    render: h => h(App)
}).$mount('#app')