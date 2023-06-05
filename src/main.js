import Vue from 'vue'
import App from './App'

import ManyiCrud from './components/index'
Vue.use(ManyiCrud)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')