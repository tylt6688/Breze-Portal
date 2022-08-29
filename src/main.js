import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from "element-ui"
import axios from '@/utils/http/axios'


import 'element-ui/lib/theme-chalk/icon.css'; 
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

Vue.prototype.BASE_API = axios.defaults.baseURL;

Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
