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
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Search' }">
                Search
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Products
            </li>
          </ol>
        </nav>
        <!-- <div class="md-layout page-wrapper">
          <div class="md-layout-item privacy-policy md-size-100">
              <h1 class="md-title">New Report</h1>
          </div>
        </div> -->
      </div>
    </div>

    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <div class="md-layout">
          <div class="md-layout-item">
            <md-card class="welcome-card-wrap">
              <md-card-header class="md-card-header-icon new-report-body">
                <router-link :to="{ name: 'CreateNewReport' }">
                  <div class="new-report ">
                      <div class="card-icon">
                        <md-icon>create_new_folder</md-icon>
                      </div>
                      <h4 class="title">New Report</h4>
                  </div>
                </router-link>
                <h4 class="title text-center">
                  <div>
                    Define your inputs<br />
                    <small>Bizminer Reports require inputs. You can choose between our <br> simple (17 inputs per year) or advanced (31 inputs per year) format.</small>
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
                                  >dns</i
                                >
                              </div>
                              <h4 class="title">
                                <div
                                  class="md-layout-item md-medium-size-100 md-size-100 card-title"
                                >
                                 Simple
                                </div>
                                <div class="card-icon-right card-help-icon">
                                  <md-icon>info</md-icon>
                                </div>
                              </h4>
                            </template>
                            <template slot="footer">
                              <div class="stats">
                                17 inputs per year.RS line items. 
                              </div>
                            </template>
                          </stats-card>
                        </router-link>

                        
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <router-link :to="{ name: 'NewReport' }">
                          <stats-card header-color="blue" class="welcome-card">
                            <template slot="header">
                              <div class="card-icon">
                                <i
                                  class="icon-primary md-icon md-icon-font md-theme-default"
                                  >storage</i
                                >
                              </div>
                              <h4 class="title">
                                <div
                                  class="md-layout-item md-medium-size-100 md-size-100 card-title"
                                >
                                  Advanced
                                </div>
                                <div class="card-icon-right card-help-icon">
                                  <md-icon>info</md-icon>
                                </div>
                              </h4>
                            </template>
                            <template slot="footer">
                              <div class="stats">
                                31 inputs per year.More detail option. 
                              </div>
                            </template>
                          </stats-card>
                        </router-link>
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
                <div class="md-card-content">
                  <h4 class="title">My Saved Client Inputs</h4>
                </div>
              </template>

              <template slot="content">
                <div class="md-layout">
                  <div class="md-layout-item md-size-100">
                    <md-table v-model="tableData" table-header-color="blue">
                      <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="Date Created">{{
                          item.productType
                        }}</md-table-cell>
                        <md-table-cell md-label="Client">{{
                          item.industry
                        }}</md-table-cell>
                        <md-table-cell md-label="Input Stype">{{
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
          productType: '01/25/1996',
          industry: 'Nolan Walker',
          marketArea: 'Advanced',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: '07/14/1984',
          industry: 'Danny Burke',
          marketArea: 'Advanced',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: '09/15/1986',
          industry: 'Danny Burke',
          marketArea: 'Advanced',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: '04/11/1982',
          industry: 'Danny Burke',
          marketArea: 'Simple',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: '08/13/1991',
          industry: 'Galen Pugh',
          marketArea: 'Simple',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: '08/12/1994',
          industry: 'ABC Plumbing',
          marketArea: 'Advanced',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: '01/25/1996',
          industry: 'Nolan Walker',
          marketArea: 'Advanced',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: '10/22/1985',
          industry: 'Taylor Rudnick',
          marketArea: 'Advanced',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: '07/03/1990',
          industry: ' Ray Pupius',
          marketArea: 'Advanced',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: '07/15/1992',
          industry: 'Nolan Walker',
          marketArea: 'Simple',
          search: '<md-icon>manage_search</md-icon>',
        },
        {
          productType: '05/19/1980',
          industry: 'Danny Burke',
          marketArea: 'Advanced',
          search: '<md-icon>manage_search</md-icon>',
        },
      ],
    };
  },
};
</script>
<style lang="scss">

.new-report-body{
  .new-report {
    display: flex;
  }
}

</style>
