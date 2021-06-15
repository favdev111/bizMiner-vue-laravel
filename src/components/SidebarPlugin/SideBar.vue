<template>
  <div
    class="sidebar"
    :data-color="activeColor"
    :data-image="backgroundImage"
    :data-background-color="backgroundColor"
    :style="sidebarStyle"
    :class="[
      {
        expanded: (hover || !$sidebar.isMinimized) && !mini,
        collapsed: (!hover && $sidebar.isMinimized) || mini,
        mini: mini,
      },
    ]"
    @mouseover="onMouseOver()"
    @mouseout="onMouseOut()"
  >
    <div class="logo">
      <a href="/dashboard" class="simple-text logo-mini" target="_blank">
        <img src="/img/logo-sm.png" class="simple-text logo-mini" />
      </a>
    </div>
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <div class="navbar-minimize-wrap">
        <div class="navbar-minimize">
          <md-button
            id="minimizeSidebar"
            class="md-round md-just-icon md-transparent"
            @click="minimizeSidebar"
          >
            <i
              class="
                material-icons
                text_align-center
                visible-on-sidebar-regular
              "
              >more_vert</i
            >
            <i
              class="
                material-icons
                design_bullet-list-67
                visible-on-sidebar-mini
              "
              >view_list</i
            >
          </md-button>
        </div>
      </div>
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
  name: "sidebar",
  props: {
    mini: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "BizMiner",
    },
    activeColor: {
      type: String,
      default: "green",
      validator: (value) => {
        let acceptedValues = [
          "",
          "purple",
          "azure",
          "green",
          "orange",
          "danger",
          "rose",
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
      default: "grey",
      validator: (value) => {
        let acceptedValues = ["", "black", "white", "red", "grey"];
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
      sticky: this.$sidebar.isMinimized,
    };
  },
  methods: {
    minimizeSidebar() {
      if (this.$sidebar) {
        this.sticky = !this.stricky;
        this.$sidebar.toggleMinimize();
        try {
          this.$store
            .dispatch("profile/getAccountOpt", {
              'option': "isMinimized",
              'value_1': this.$sidebar.isMinimized,
            })
            .then((res) => {
              if (res.data.saved) {
                this.$store.dispatch("alerts/success", "Successfully stored.");
              } else {
                this.$app.$store.dispatch(
                  "alerts/error",
                  "Oops, something went wrong"
                );
              }
            });
        } catch (e) {}
      }
    },
    onMouseOver() {
      this.hover = true;
    },
    onMouseOut() {
      if (this.$sidebar.isMinimized) {
        this.hover = false;
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
  mounted() {
    this.$store.dispatch("authenticateUser").then((res) => {
      if(res){
        res.options.forEach((el) => {
          if(el.option == 'isMinimized'){
            if(el.value_1 == '1') {
              document.body.classList.add('sidebar-mini');
              this.$sidebar.isMinimized = true
            } else {
              document.body.classList.remove('sidebar-mini');
              this.$sidebar.isMinimized = false
            }
          }
        });
      }
    })
  },
  // beforeDestroy() {
  //   if (this.$sidebar.showSidebar) {
  //     this.$sidebar.showSidebar = false;
  //   }
  // },
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
