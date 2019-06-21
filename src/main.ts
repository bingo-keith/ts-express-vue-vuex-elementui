import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from '@/utils/http'

import { currencyFilter } from '@/utils/currency'


// 全部引入
Vue.use(MintUI)


Vue.prototype.$axios = Axios

Vue.filter('currency', currencyFilter)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
