import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import http from '@/services/http'
import { AxiosInstance } from 'axios'
// import VueAxios from 'vue-axios'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
  }
  interface VueConstructor {
    $axios: AxiosInstance
  }
}

Vue.config.productionTip = false

// Vue.use(VueAxios, http)
Vue.prototype.$axios = http

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
