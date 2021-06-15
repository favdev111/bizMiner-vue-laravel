<template>
  <div class="profile-layout">
    <main-navbar></main-navbar>
    <div class="wrapper" :class="[{ 'nav-open': $sidebar.showSidebar }]">
      <notifications></notifications>
      <side-bar
        :mini="true"
        :active-color="sidebarBackground"
        :background-image="sidebarBackgroundImage"
        :data-background-color="sidebarBackgroundColor"
      >
        <mobile-menu :app="true"></mobile-menu>
        <template slot="links">
          <sidebar-item
            :link="{
              name: 'Search',
              icon: 'search',
              path: '/search',
            }"
          ></sidebar-item>
          <sidebar-item
            :link="{
              name: 'New Profile',
              icon: 'post_add',
              path: '/new-profile',
            }"
          ></sidebar-item>
          <sidebar-item
            :link="{
              name: 'New Report',
              icon: 'addchart',
              path: '/new-report',
            }"
          ></sidebar-item>
          <sidebar-item
            :link="{
              name: 'My Favorites',
              icon: 'star',
              path: '/my-favorites',
            }"
          ></sidebar-item>
        </template>
      </side-bar>
      <app-side-bar
        :mini="true"
        :active-color="sidebarBackground"
        :background-image="sidebarBackgroundImage"
        :data-background-color="sidebarBackgroundColor"
      >
        <mobile-menu></mobile-menu>
        <template slot="links">
          <sidebar-item
            :link="{
              name: 'Information',
              icon: 'chat_bubble',
              path: '/if/32523623/introduction',
            }"
          ></sidebar-item>
          <div v-popover.right="{ name: 'profit-and-loss' }">
            <sidebar-item
              :link="{
                name: 'Profit & Loss',
                icon: 'analytics',
                path: '/if/32523623/profit-and-loss',
              }"
            ></sidebar-item>
            <!-- <popover name="profit-and-loss" event="hover">
              <ul class="popover-menu">
                <li>
                  <router-link
                    :to="{
                      name: 'IFProfitAndLoss',
                      params: { uid: 123234 },
                      query: { section: 'dollar' },
                    }"
                    class="dropdown-link"
                  >
                    <md-icon class="popover-item-icon">money</md-icon
                    ><span class="ml-5 popover-item-text">Dollars</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{
                      name: 'IFProfitAndLoss',
                      params: { uid: 123234 },
                      query: { section: 'percent' },
                    }"
                    class="dropdown-link"
                  >
                    <md-icon class="popover-item-icon">payments</md-icon
                    ><span class="ml-5 popover-item-text">Percentages</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{
                      name: 'IFProfitAndLoss',
                      params: { uid: 123234 },
                      query: { section: 'chart' },
                    }"
                    class="dropdown-link"
                  >
                    <md-icon class="popover-item-icon">pie_chart</md-icon
                    ><span class="ml-5 popover-item-text">Charts</span>
                  </router-link>
                </li>
              </ul>
            </popover> -->
          </div>
          <div v-popover.right="{ name: 'balance-sheet' }">
            <sidebar-item
              :link="{
                name: 'Balance Sheet',
                icon: 'table_chart',
                path: '/if/32523623/balance-sheet',
              }"
            ></sidebar-item>
            <!-- <popover name="balance-sheet" event="hover">
              <ul class="popover-menu">
                <li>
                  <router-link
                    :to="{
                      name: 'IFBalanceSheet',
                      params: { uid: 123234 },
                      query: { section: 'dollar' },
                    }"
                    class="dropdown-link"
                  >
                    <md-icon class="popover-item-icon">money</md-icon
                    ><span class="ml-5 popover-item-text">Dollars</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{
                      name: 'IFBalanceSheet',
                      params: { uid: 123234 },
                      query: { section: 'percent' },
                    }"
                    class="dropdown-link"
                  >
                    <md-icon class="popover-item-icon">payments</md-icon
                    ><span class="ml-5 popover-item-text">Percentages</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{
                      name: 'IFBalanceSheet',
                      params: { uid: 123234 },
                      query: { section: 'chart' },
                    }"
                    class="dropdown-link"
                  >
                    <md-icon class="popover-item-icon">pie_chart</md-icon
                    ><span class="ml-5 popover-item-text">Charts</span>
                  </router-link>
                </li>
              </ul>
            </popover> -->
          </div>
          <div v-popover.right="{ name: 'ratios' }">
            <sidebar-item
              :link="{
                name: 'Ratios',
                icon: 'scatter_plot',
                path: '/if/32523623/ratios',
              }"
            ></sidebar-item>
            <!-- <popover name="ratios" event="hover">
              <ul class="popover-menu">
                <li>
                  <router-link
                    :to="{
                      name: 'IFRatios',
                      params: { uid: 123234 },
                      query: { section: 'cash-flow-solvency' },
                    }"
                    class="dropdown-link"
                  >
                    <md-icon class="popover-item-icon">money</md-icon
                    ><span class="ml-5 popover-item-text"
                      >Cash Flow-Solvency</span
                    >
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{
                      name: 'IFRatios',
                      params: { uid: 123234 },
                      query: { section: 'profitability' },
                    }"
                    class="dropdown-link"
                  >
                    <md-icon class="popover-item-icon">payments</md-icon
                    ><span class="ml-5 popover-item-text">Profitability</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{
                      name: 'IFRatios',
                      params: { uid: 123234 },
                      query: { section: 'efficiency' },
                    }"
                    class="dropdown-link"
                  >
                    <md-icon class="popover-item-icon">pie_chart</md-icon
                    ><span class="ml-5 popover-item-text">Efficiency</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{
                      name: 'IFRatios',
                      params: { uid: 123234 },
                      query: { section: 'debt-risk' },
                    }"
                    class="dropdown-link"
                  >
                    <md-icon class="popover-item-icon">report</md-icon
                    ><span class="ml-5 popover-item-text">Debt-Risk</span>
                  </router-link>
                </li>
              </ul>
            </popover> -->
          </div>
          <sidebar-item
            :link="{
              name: 'Sources Uses',
              icon: 'collections_bookmark',
              path: '/if/32523623/sources-users',
            }"
          ></sidebar-item>
          <sidebar-item
            :link="{
              name: 'Valuation Multples',
              icon: 'query_stats',
              path: '/if/32523623/valuation-multiples',
            }"
          ></sidebar-item>
          <sidebar-item
            :link="{
              name: 'About the Data',
              icon: 'help',
              path: '/if/32523623/about',
            }"
          ></sidebar-item>
        </template>
      </app-side-bar>
      <div class="main-panel">
        <div :class="{ content: !$route.meta.hideContent }">
          <zoom-center-transition :duration="200" mode="out-in">
            <!-- your content here -->
            <router-view />
          </zoom-center-transition>
        </div>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
    document.getElementsByClassName(className)[0].scrollTop = 0;
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

function reinitScrollbar() {
  let docClasses = document.body.classList;
  let isWindows = navigator.platform.startsWith('Win');
  if (isWindows) {
    // if we are on windows OS we activate the perfectScrollbar function
    initScrollbar('sidebar');
    initScrollbar('sidebar-wrapper');
    initScrollbar('main-panel');

    docClasses.add('perfect-scrollbar-on');
  } else {
    docClasses.add('perfect-scrollbar-off');
  }
}

function initSidebar() {
  document.body.classList.toggle('sidebar-mini');
}

import MainNavbar from './MainNavbar.vue';
import ContentFooter from './ContentFooter.vue';
import MobileMenu from './Extra/MobileMenu.vue';
import Vuex from 'vuex';

export default {
  components: {
    MainNavbar,
    ContentFooter,
    MobileMenu,
  },
  data() {
    return {
      sidebarBackgroundColor: 'grey',
      sidebarBackground: 'green',
      sidebarBackgroundImage:
        process.env.VUE_APP_BASE_URL + '/img/sidebar-2.jpg',
      sidebarMini: true,
      sidebarImg: true,
      image: process.env.VUE_APP_BASE_URL + '/img/laravel-vue.svg',
      roles: [],
    };
  },
  methods: {
    // minimizeSidebar() {
    //   if (this.$sidebar) {
    //     this.$sidebar.toggleMinimize();
    //   }
    // },
  },
  updated() {
    reinitScrollbar();
  },
  mounted() {
    reinitScrollbar();
    // initSidebar();
  },
  computed: {
    ...Vuex.mapState({
      me: (state) => state.profile.me,
    }),
  },
  watch: {
    me: {
      handler: function(val) {
        this.roles = val.roles.map((r) => r.name);
      },
      deep: true,
    },
    // sidebarMini() {
    //   this.minimizeSidebar();
    // },
  },
};
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}
.main-panel .zoomIn {
  animation-name: zoomIn95;
}
@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}
.main-panel .zoomOut {
  animation-name: zoomOut95;
}
</style>
