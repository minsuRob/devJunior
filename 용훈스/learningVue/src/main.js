import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import router from './router';
import {todoStore} from "./store/TodoStore";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(fas);

new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  components: { App },
  template: '<App/>',
  store: todoStore,
});
