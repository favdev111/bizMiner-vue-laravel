<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100"
      >
        <nav aria-label="breadcrumb" role="navigation">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }">
                Home
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Subscriptions
            </li>
          </ol>
        </nav>
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <h1 class="md-title">
                Subscriptions
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100"
      >
        <nav-tabs-card no-label md-elevation="0">
          <template slot="content">
            <md-tabs md-alignment="left">
              <products-accessed-tab />
              <renew-upgrade-tab id="renew-upgrade" />
              <account-activity-tab />
              <manage-team-tab />
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
    </div>

    <!-- <products-accessed />
    <renew-upgrade id="renew-upgrade" />
    <account-activity />
    <manage-team /> -->
  </div>
</template>

<script>
import ProductsAccessedTab from './_partials/ProductsAccessedTab';
import RenewUpgradeTab from './_partials/RenewUpgradeTab';
import AccountActivityTab from './_partials/AccountActivityTab';
import ManageTeamTab from './_partials/ManageTeamTab';

import { NavTabsCard } from '@/components';

export default {
  components: {
    ProductsAccessedTab,
    RenewUpgradeTab,
    AccountActivityTab,
    ManageTeamTab,
    NavTabsCard,
  },
  data() {
    return {
      boolean: false,
    };
  },
  mounted: function() {
    let section = this.$route.query.s;
    this.$scrollTo('#' + section, 0);
  },
  methods: {},
};
</script>
<style lang="scss"></style>
