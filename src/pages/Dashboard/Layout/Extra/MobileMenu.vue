<template>
  <div>
    <template v-if="app">
      <ul class="nav nav-mobile-menu mobile-app-menu" @click="toggleSidebar">
        <li>
          <router-link
            :to="{
              name: 'IFIntro',
              params: { uid: 123234 },
            }"
            class="dropdown-link"
          >
            <md-icon>chat_bubble</md-icon>
            <p>Information</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'IFProfitAndLoss',
              params: { uid: 123234 },
            }"
            class="dropdown-link"
          >
            <md-icon>analytics</md-icon>
            <p>Profit & Loss</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'IFBalanceSheet',
              params: { uid: 123234 },
            }"
            class="dropdown-link"
          >
            <md-icon>table_chart</md-icon>
            <p>Balance Sheet</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'IFRatios',
              params: { uid: 123234 },
            }"
            class="dropdown-link"
          >
            <md-icon>scatter_plot</md-icon>
            <p>Ratios</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'IFSourcesUsers',
              params: { uid: 123234 },
            }"
            class="dropdown-link"
          >
            <md-icon>collections_bookmark</md-icon>
            <p>Sources Users</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'IFValuationMultiples',
              params: { uid: 123234 },
            }"
            class="dropdown-link"
          >
            <md-icon>query_stats</md-icon>
            <p>Valuation Multples</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'IFAbout',
              params: { uid: 123234 },
            }"
            class="dropdown-link"
          >
            <md-icon>help</md-icon>
            <p>About the Data</p>
          </router-link>
        </li>
      </ul>
    </template>
    <template v-if="!app">
      <ul class="nav nav-mobile-menu"></ul>
    </template>
  </div>
</template>
<script>
export default {
  props: ['app'],
  data() {
    return {
      search: null,
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
