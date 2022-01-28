import Vue from 'vue'
import Home from './Test.vue'

import store from '../../store/index.js';


//eventBus
let bus = new Vue;
Vue.prototype.$bus = bus;

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Home)
}).$mount('#app');



