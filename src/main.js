import Vue from 'vue'
import Bus from '../bus'
Vue.prototype.$bus = Bus
import App from './App.vue'
import router from './router'
import './assets/css/bootstrap.css'
import './index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
