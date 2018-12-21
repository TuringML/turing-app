import Vue from 'vue'
import Turing from './Turing.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router/router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  el: '#turing',
  router,
  render: h => h(Turing),
})
