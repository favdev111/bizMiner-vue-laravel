<template>
  <md-toolbar
    md-elevation="0"
    class="
      md-toolbar
      top-navbar
      md-toolbar-absolute md-transparent md-white md-fixed-top
    "
  >
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <md-list>
          <md-list-item class="mobile-nav">
            <router-link :to="{ name: 'Search' }">Search</router-link>
          </md-list-item>
          <md-list-item class="mobile-nav">
            <router-link :to="{ name: 'MyProfiles' }">My Profiles</router-link>
          </md-list-item>
          <md-list-item class="mobile-nav">
            <router-link :to="{ name: 'MyReports' }">My Reports</router-link>
          </md-list-item>
          <md-list-item class="mobile-nav">
            <router-link :to="{ name: 'MyInputs' }">My Inputs</router-link>
          </md-list-item>
        </md-list>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-round md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <!-- <div class="md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedEmployee"
              :md-options="employees"
              :md-open-on-focus="false"
            >
              <label v-if="$route.meta.rtlActive">بحث...</label>
              <label v-else>Search...</label>
            </md-autocomplete>
          </div> -->
          <md-list>
            <!-- <md-list-item href="#/">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item> -->

            <!-- <li class="md-list-item">
              <a
                @click="goToNotifications"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down direction="down">
                    <md-button
                      slot="title"
                      class="md-button md-just-icon md-simple"
                      data-toggle="dropdown"
                    >
                      <md-icon>notifications</md-icon>
                      <span class="notification">5</span>
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">Mike John responded to your email</a></li>
                      <li><a href="#">You have 5 new tasks</a></li>
                      <li><a href="#">You're now friend with Andrew</a></li>
                      <li><a href="#">Another Notification</a></li>
                      <li><a href="#">Another One</a></li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li> -->

            <!-- <md-list-item @click="goToUsers">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item> -->
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: "",
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone",
      ],
      documentationLink:
        "https://vue-material-dashboard-laravel-pro.creative-tim.com/documentation/",
      downloadUrl:
        "https://www.creative-tim.com/product/vue-material-dashboard-laravel-pro",
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    },
    goToNotifications() {
      this.$router.push({ name: "Notifications" });
    },
    goToUsers() {
      this.$router.push({ name: "User Page" });
    },
  },
};
</script>
<style lang="scss" >
@media only screen and (max-width: 450px) {
  .mobile-nav .md-list-item-container .md-ripple {
    padding: 10px 5px !important;
    height: 100%;
  }
  .md-toolbar.top-navbar
    .mobile-nav
    .md-list-item-content
    a.nav-item.router-link-active {
    padding-bottom: 10px;
  }
  .mobile-nav {
    height: 45px;
  }
  .md-toolbar .md-toolbar-row {
    padding-left: 0;
    padding-right: 0;
  }
}
// @media only screen and (max-width: 360px) {
  
// }
</style>