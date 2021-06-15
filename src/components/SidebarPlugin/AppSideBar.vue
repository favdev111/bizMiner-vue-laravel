<template>
  <div
    class="sidebar app-sidebar"
    :data-color="activeColor"
    :data-image="backgroundImage"
    :data-background-color="backgroundColor"
    :style="sidebarStyle"
    :class="[{ expanded: hover, collapsed: !hover }]"
  >
    <div class="logo">
      <a href="/dashboard" class="simple-text logo-mini" target="_blank">
        <img src="/img/logo-sm.png" class="simple-text logo-mini" />
      </a>
    </div>
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <slot></slot>
      <md-list class="nav">
        <slot name="links">
          <sidebar-item
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :link="link"
          >
            <sidebar-item
              v-for="(subLink, index) in link.children"
              :key="subLink.name + index"
              :link="subLink"
            >
            </sidebar-item>
          </sidebar-item>
        </slot>
      </md-list>
      <slot name="footer"> </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  props: {
    mini: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'BizMiner',
    },
    activeColor: {
      type: String,
      default: 'green',
      validator: (value) => {
        let acceptedValues = [
          '',
          'purple',
          'azure',
          'green',
          'orange',
          'danger',
          'rose',
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    backgroundImage: {
      type: String,
      default: `${process.env.VUE_APP_BASE_URL}/img/sidebar-2.jpg`,
    },
    backgroundColor: {
      type: String,
      default: 'grey',
      validator: (value) => {
        let acceptedValues = ['', 'black', 'white', 'red', 'grey'];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    logo: {
      type: String,
      default: `${process.env.VUE_APP_BASE_URL}/img/vue-logo.png`,
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    // this.$sidebar.toggleMinimize();
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    },
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
      };
    },
  },
  beforeDestroy() {
    // if (this.$sidebar.showSidebar) {
    //   this.$sidebar.showSidebar = false;
    // }
    this.$sidebar.isMinimized = true;
    this.$sidebar.showSidebar = false;
  },
};
</script>
<style>
@media (min-width: 992px) {
  .navbar-search-form-mobile,
  .nav-mobile-menu {
    display: none;
  }
}
</style>
