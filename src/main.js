import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus =this
  },

  render: h => h(App)
}).$mount('#app')
