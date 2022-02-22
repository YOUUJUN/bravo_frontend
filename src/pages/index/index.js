import Vue from 'vue'
import Home from './Index.vue'

import store from '../../store/index.js';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);



//eventBus
let bus = new Vue;
Vue.prototype.$bus = bus;

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Home)
}).$mount('#app');



