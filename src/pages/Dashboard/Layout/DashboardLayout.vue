<template>
  <div class="dashboard-layout">
    <main-navbar></main-navbar>
    <div class="wrapper" :class="[{ 'nav-open': $sidebar.showSidebar }]">
      <notifications></notifications>
      <side-bar
        :mini="false"
        :active-color="sidebarBackground"
        :background-image="sidebarBackgroundImage"
        :data-background-color="sidebarBackgroundColor"
      >
        <user-menu></user-menu>
        <mobile-menu></mobile-menu>
        <template slot="links">
          <sidebar-item
            class="sidebar-item-plus"
            :link="{
              name: 'New Profile',
              icon: 'post_add',
              path: '/new-profile',
            }"
          ></sidebar-item>
          <sidebar-item
            class="sidebar-item-plus"
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
            <sidebar-item
            :link="{
              name: 'My Cart',
              icon: 'shopping_cart',
              path: '/cart',
            }"
          ></sidebar-item>
          <sidebar-item
            class="sidebar-footer-mobile"
            :link="{
              name: 'Blog',
              icon: 'feed',
              path: '/blog',
            }"
          ></sidebar-item>
        </template>
        <template slot="footer">
          <div
            class="sidebar-footer"
            :class="[{ expanded: $sidebar.showSidebar }]"
          >
            <div class="sidebar-blog-container">
              <div class="sidebar-footer-title">
                Bizminer Insights Blog
              </div>
              <div class="sidebar-blog-posts">
                <div class="sidebar-blog-scroller">
                  <div class="sidebar-blog-prev">
                    <i class="md-icon md-icon-font md-theme-default"
                      >expand_less</i
                    >
                  </div>
                  <div class="sidebar-blog-nr">16</div>
                  <div class="sidebar-blog-next">
                    <i class="md-icon md-icon-font md-theme-default"
                      >expand_more</i
                    >
                  </div>
                </div>
                <div>
                  <div class="sidebar-blog-post-heading">
                    How to evaluate liquidity with the Current and Quick Ratio
                  </div>
                  <div class="sidebar-blog-post-details">
                    <div class="sidebar-blog-post-image">
                      <img
                        src="https://i1.wp.com/alexiaudriste.ro/wp-content/uploads/2017/01/blog-placeholder.jpg?ssl=1"
                      />
                    </div>
                    <div class="sidebar-blog-post-toolbar">
                      <div class="comments">
                        <span class="icon">
                          <i class="md-icon md-icon-font md-theme-default"
                            >chat_bubble</i
                          ></span
                        ><span class="text"> 24k comments</span>
                      </div>
                      <div class="share">
                        <span class="icon"
                          ><i class="md-icon md-icon-font md-theme-default"
                            >share</i
                          ></span
                        ><span class="text"> Share</span>
                      </div>
                      <div class="disable">
                        <span class="icon"
                          ><i class="md-icon md-icon-font md-theme-default"
                            >hide_source</i
                          ></span
                        ><span class="text"> Disable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sidebar-blog-post-created-by">
                <span class="icon"></span
                ><span class="text"> u/Crunchstreet insights - 1 week ago</span>
              </div>
              <div class="sidebar-bottom-links">
                <div class="bottom-link">
                  <router-link to="/privacy">PRIVACY</router-link>
                </div>
                <div class="bottom-link">
                    <router-link to="/terms">
                       TERMS
                    </router-link>
                    </div>
                <div class="bottom-link">
                    <router-link to="/contact">
                       CONTACT
                    </router-link>
                </div>
              </div>
            </div>
            <div class="sidebar-blog-collapsed">
              <sidebar-item
                :link="{
                  name: '',
                  icon: 'feed',
                  path: '/blog',
                }"
              ></sidebar-item>
            </div>
          </div>
        </template>
      </side-bar>
      <div class="main-panel">
        <top-navbar></top-navbar>

        <div
          :class="{ content: !$route.meta.hideContent }"
          @click="toggleSidebar"
        >
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

import TopNavbar from './TopNavbar.vue';
import MainNavbar from './MainNavbar.vue';
import ContentFooter from './ContentFooter.vue';
import MobileMenu from './Extra/MobileMenu.vue';
import UserMenu from './Extra/UserMenu.vue';
import Vuex from 'vuex';

export default {
  components: {
    TopNavbar,
    MainNavbar,
    ContentFooter,
    MobileMenu,
    UserMenu,
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
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    },
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
    sidebarMini() {
      this.minimizeSidebar();
    },
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
