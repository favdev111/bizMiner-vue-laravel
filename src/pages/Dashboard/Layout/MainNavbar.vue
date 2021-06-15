<template>
  <md-toolbar
    md-elevation="0"
    class="main-navbar md-toolbar-primary md-toolbar-absolute md-white md-fixed-top"
  >
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <div class="logo">
          <router-link :to="{ name: 'Search' }" class="simple-text logo-mini">
            <img src="/img/logo-md.png" class="simple-text logo-mini" />
          </router-link>
        </div>
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

        <div class="button-container main-nav-cta" style="margin-right: 10px">
          <div class="">
            <md-button class="md-default md-block" :href="tourLink"
              >Tour
              <i class="md-icon md-icon-font md-theme-default"
                >play_circle_filled</i
              >
            </md-button>
          </div>
        </div>

        <div class="button-container main-nav-cta" style="margin-right: 10px">
          <div class="">
            <md-button class="md-default md-block" :href="helpLink"
              >Help
              <i class="md-icon md-icon-font md-theme-default">help</i>
            </md-button>
          </div>
        </div>

        <div class="button-container main-nav-cta">
          <div class="">
            <md-button class="md-info md-block" :href="'/'" target="_blank"
              >UPGRADE TO PRO
            </md-button>
          </div>
        </div>

        <div class="md-collapse">
          <md-list>
            <md-list-item class="user-avatar-item">
              <drop-down class="user-dropdown">
                <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                  <img class="user-avatar" src="https://i.pravatar.cc/300" />
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li>
                    <router-link
                      :to="{ name: 'UserPage' }"
                      class="dropdown-link"
                    >
                      <span class="dropdown-icon">
                        <md-icon>manage_accounts</md-icon>
                      </span>
                      Account</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'BillingAndInvoices' }"
                      class="dropdown-link"
                    >
                      <span class="dropdown-icon">
                        <md-icon>receipt</md-icon>
                      </span>
                      Billing/Invoices</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'Subscriptions' }"
                      class="dropdown-link"
                    >
                      <span class="dropdown-icon">
                        <md-icon>card_memberships</md-icon>
                      </span>
                      Subscriptions</router-link
                    >
                  </li>
                  <li>
                    <a href="#" class="dropdown-link" @click="logout">
                      <span class="dropdown-icon">
                        <md-icon>power_settings_new</md-icon>
                      </span>
                      Logout</a
                    >
                  </li>
                </ul>
              </drop-down>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectedEmployee: '',
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
      ],
      tourLink: '#',
      helpLink: '#',
      dashboardUrl: '/dashboard',
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
      this.$router.push({ name: 'Notifications' });
    },
    goToUsers() {
      this.$router.push({ name: 'User Page' });
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
