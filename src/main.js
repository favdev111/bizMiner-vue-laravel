// =========================================================
// * Vue Material Dashboard Laravel PRO - v1.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard-laravel-pro
// * Copyright Creative Tim (https://www.creative-tim.com) & UPDIVISION (https://www.updivision.com)
//
// * Coded by www.creative-tim.com & www.updivision.com
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue';
import axios from 'axios';

// Plugins
import App from './App.vue';
import Chartist from 'chartist';
import VueAxios from 'vue-axios';
import DashboardPlugin from './material-dashboard';
import VueMeta from 'vue-meta';
import IsDemo from './isDemo';
import VueScrollTo from 'vue-scrollto';
import Popover from 'vue-js-popover';
import Vuelidate from 'vuelidate'


// plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueAxios, axios);
Vue.use(IsDemo);
Vue.use(VueMeta, { keyName: 'head' });
Vue.use(VueScrollTo);
Vue.use(Popover);
Vue.use(Vuelidate)


// router & store setup
import router from './router';
import store from './store';

// global library setup
Vue.prototype.$Chartist = Chartist;

/* eslint-disable no-new */
const app = new Vue({
  router: router,
  store: store,
  el: '#app',
  render: (h) => h(App),
});

store.$app = app;
