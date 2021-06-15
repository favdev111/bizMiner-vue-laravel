<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <div class="md-layout">
          <div class="md-layout-item">
            <nav aria-label="breadcrumb" role="navigation">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link :to="{ name: 'Home' }">
                    Home
                  </router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Search
                </li>
              </ol>
            </nav>
            <md-card class="welcome-card-wrap">
              <md-card-header class="md-card-header-icon">
                <div class="card-icon">
                  <md-icon>perm_identity</md-icon>
                </div>
                <h4 class="title text-center">
                  <div>
                    Welcome to the new Bizminer Danny! <br />
                    <small
                      >Select New Profile or New Report to begin your search
                      process.</small
                    >
                  </div>
                </h4>
              </md-card-header>
              <md-card-content class="welcome-card-container">
                <div id="typography">
                  <div class="row">
                    <div class="md-layout">
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <router-link :to="{ name: 'NewProfiles' }">
                          <stats-card header-color="blue" class="welcome-card">
                            <template slot="header">
                              <div class="card-icon">
                                <i
                                  class="icon-primary md-icon md-icon-font md-theme-default"
                                  >post_add</i
                                >
                              </div>
                              <h4 class="title">
                                <div
                                  class="md-layout-item md-medium-size-100 md-size-100 card-title"
                                >
                                  New Profile
                                </div>
                                <div class="card-icon-right card-help-icon">
                                  <md-icon>info</md-icon>
                                </div>
                              </h4>
                            </template>
                            <template slot="footer">
                              <div class="stats">
                                Profile an Industry, Market, or Company
                              </div>
                            </template>
                          </stats-card>
                        </router-link>

                        <div
                          class="md-layout-item md-size-100 md-medium-size-100 md-small-size-100 mr-auto"
                          slot="content-right"
                        >
                          <div class="text-right">
                            <md-button
                              class="md-info md-round mb-4 md-theme-default"
                              type="submit"
                            >
                              <i
                                class="icon-primary md-icon md-icon-font md-theme-default"
                                >play_lesson</i
                              >
                              Tour
                            </md-button>
                          </div>
                        </div>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <router-link :to="{ name: 'NewReport' }">
                          <stats-card header-color="blue" class="welcome-card">
                            <template slot="header">
                              <div class="card-icon">
                                <i
                                  class="icon-primary md-icon md-icon-font md-theme-default"
                                  >addchart</i
                                >
                              </div>
                              <h4 class="title">
                                <div
                                  class="md-layout-item md-medium-size-100 md-size-100 card-title"
                                >
                                  New Report
                                </div>
                                <div class="card-icon-right card-help-icon">
                                  <md-icon>info</md-icon>
                                </div>
                              </h4>
                            </template>
                            <template slot="footer">
                              <div class="stats">
                                Create a report using your data with
                                benchmarcking tools.
                              </div>
                            </template>
                          </stats-card>
                        </router-link>

                        <div
                          class="md-layout-item md-size-100 md-medium-size-100 md-small-size-100 mr-auto"
                          slot="content-right"
                        >
                          <div class="text-left">
                            <md-button
                              class="md-info md-round mb-4 md-theme-default"
                              type="submit"
                            >
                              <i class="md-icon md-icon-font md-theme-default"
                                >play_circle_filled</i
                              >
                              Videos
                            </md-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </div>
          <div class="md-layout-item md-size-100">
            <table-card>
              <template slot="header">
                <div class="card-icon">
                  <md-icon>search</md-icon>
                </div>
                <h4 class="title">Recent Searches</h4>
              </template>

              <template slot="content">
                <div class="md-layout">
                  <div class="md-layout-item md-size-100">
                    <md-table v-model="tableData" table-header-color="blue">
                      <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="Product Type">{{
                          item.productType
                        }}</md-table-cell>
                        <md-table-cell md-label="Industry">{{
                          item.industry
                        }}</md-table-cell>
                        <md-table-cell md-label="Market Area">{{
                          item.marketArea
                        }}</md-table-cell>
                        <md-table-cell
                          md-label="Search"
                          class="td-actions text-right"
                        >
                          <button
                            type="button"
                            class="md-button md-raised md-info table-action-button md-theme-default"
                          >
                            <div class="md-ripple">
                              <div class="md-button-content">
                                <md-icon>manage_search</md-icon>
                              </div>
                            </div>
                          </button>
                        </md-table-cell>
                      </md-table-row>
                    </md-table>
                  </div>
                </div>
              </template>
            </table-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  // SignupCard,
  StatsCard,
  TableCard,
} from '@/components';

export default {
  components: {
    // SignupCard,
    StatsCard,
    TableCard,
  },
  data() {
    return {
      selected: [],
      tableData: [
        {
          productType: 'Industry Financial Profile',
          industry: '[325326362] Plumbing',
          marketArea: 'New York, NY',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: 'Industry Financial Profile',
          industry: '[325326362] Plumbing',
          marketArea: 'New York, NY',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: 'Industry Financial Profile',
          industry: '[325326362] Plumbing',
          marketArea: 'New York, NY',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: 'Industry Financial Profile',
          industry: '[325326362] Plumbing',
          marketArea: 'New York, NY',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: 'Industry Financial Profile',
          industry: '[325326362] Plumbing',
          marketArea: 'New York, NY',
          search: '<md-icon>manage_search</md-icon>',
        },
      ],
    };
  },
};
</script>