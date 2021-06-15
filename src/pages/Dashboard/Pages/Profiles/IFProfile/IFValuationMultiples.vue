<template>
  <div class="content if-profile">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-15 md-xsmall-size-100 md-size-15"
          >
            <img src="/img/image_placeholder.jpg" />
          </div>
          <div
            class="md-layout-item md-medium-size-65 md-xsmall-size-100 md-size-65"
          >
            <div>
              <h1 class="md-title profile-title">Industry Finanical Profile</h1>
            </div>
            <div>
              <small
                >[238220] Plumbing, Heating, and Air-Conditioning Contractors
                Sector: Construction Harrisburg Metro Area Sales Class: $1m -
                $2.49m
              </small>
            </div>
          </div>
          <div
            class="md-layout-item md-medium-size-20 md-xsmall-size-100 md-size-20"
          >
            <div class="md-layout">
              <div
                class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50"
              >
                <md-button
                  class="md-info md-block access-button"
                  :href="'/'"
                  target="_blank"
                  >CSV <md-icon class="ml-5">table_rows</md-icon>
                </md-button>
              </div>
              <div
                class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50"
              >
                <md-button
                  class="md-info md-block access-button"
                  :href="'/'"
                  target="_blank"
                  >PDF <md-icon class="ml-5">picture_as_pdf</md-icon>
                </md-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <div>
                <h1 class="md-title profile-title">Valuation Multiples</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md-layout-item">
        <md-card>
          <md-card-header class="md-card-header-icon">
            <div class="card-icon">
              <md-icon>query_stats</md-icon>
            </div>
            <h4 class="title text-left">
              [238220 Plumbing, Heating, and Air Conditioning Contractors <br />
              <small
                >Vestimates® are derived from closed business sales as well as
                enterprise-level revenue and industry financial analysis
                developed by Bizminer.
              </small>
            </h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100 md-size-50">
                <!-- <h5 class="title text-left">Firms Analyzed</h5> -->
                <table-card>
                  <template slot="header" header-color="rose">
                    <div class="card-icon">
                      <i class="md-icon md-icon-font md-theme-default"
                        >receipt</i
                      >
                    </div>
                    <h4 class="title">
                      <div
                        class="md-layout-item md-medium-size-100 md-size-100 card-title"
                      >
                        Sales Group: &#60; $2.5m
                      </div>
                    </h4>
                  </template>

                  <template slot="content">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-100">
                        <md-table v-model="tableData" table-header-color="blue">
                          <md-table-row
                            slot="md-table-row"
                            slot-scope="{ item }"
                          >
                            <md-table-cell md-label="">
                              <div class="md-table-side-label">
                                {{ item.name }}
                              </div>
                            </md-table-cell>
                            <md-table-cell md-label="Sales Multiples">{{
                              item.sales
                            }}</md-table-cell>
                            <md-table-cell md-label="Earnings Multiples">{{
                              item.earnings
                            }}</md-table-cell>
                          </md-table-row>
                        </md-table>
                      </div>
                    </div>
                  </template>
                </table-card>
              </div>
              <div class="md-layout-item md-medium-size-100 md-size-50">
                <!-- <h5 class="title text-left">Firms Analyzed</h5> -->
                <table-card>
                  <template slot="header" header-color="rose">
                    <div class="card-icon">
                      <i class="md-icon md-icon-font md-theme-default"
                        >receipt</i
                      >
                    </div>
                    <h4 class="title">
                      <div
                        class="md-layout-item md-medium-size-100 md-size-100 card-title"
                      >
                        Sales Group: $2.5m - $24.9m
                      </div>
                    </h4>
                  </template>

                  <template slot="content">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-100">
                        <md-table v-model="tableData" table-header-color="blue">
                          <md-table-row
                            slot="md-table-row"
                            slot-scope="{ item }"
                          >
                            <md-table-cell md-label="">
                              <div class="md-table-side-label">
                                {{ item.name }}
                              </div>
                            </md-table-cell>
                            <md-table-cell md-label="Sales Multiples">{{
                              item.sales
                            }}</md-table-cell>
                            <md-table-cell md-label="Earnings Multiples">{{
                              item.earnings
                            }}</md-table-cell>
                          </md-table-row>
                        </md-table>
                      </div>
                    </div>
                  </template>
                </table-card>
              </div>
              <div class="md-layout-item md-medium-size-100 md-size-50">
                <!-- <h5 class="title text-left">Firms Analyzed</h5> -->
                <table-card>
                  <template slot="header" header-color="rose">
                    <div class="card-icon">
                      <i class="md-icon md-icon-font md-theme-default"
                        >receipt</i
                      >
                    </div>
                    <h4 class="title">
                      <div
                        class="md-layout-item md-medium-size-100 md-size-100 card-title"
                      >
                        Sales Group: &#62; $25m
                      </div>
                    </h4>
                  </template>

                  <template slot="content">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-100">
                        <md-table v-model="tableData" table-header-color="blue">
                          <md-table-row
                            slot="md-table-row"
                            slot-scope="{ item }"
                          >
                            <md-table-cell md-label="">
                              <div class="md-table-side-label">
                                {{ item.name }}
                              </div>
                            </md-table-cell>
                            <md-table-cell md-label="Sales Multiples">{{
                              item.sales
                            }}</md-table-cell>
                            <md-table-cell md-label="Earnings Multiples">{{
                              item.earnings
                            }}</md-table-cell>
                          </md-table-row>
                        </md-table>
                      </div>
                    </div>
                  </template>
                </table-card>
              </div>
              <div class="md-layout-item md-medium-size-100 md-size-50">
                <!-- <h5 class="title text-left">Firms Analyzed</h5> -->
                <table-card>
                  <template slot="header" header-color="rose">
                    <div class="card-icon">
                      <i class="md-icon md-icon-font md-theme-default"
                        >receipt</i
                      >
                    </div>
                    <h4 class="title">
                      <div
                        class="md-layout-item md-medium-size-100 md-size-100 card-title"
                      >
                        Sales Group: All
                      </div>
                    </h4>
                  </template>

                  <template slot="content">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-100">
                        <md-table v-model="tableData" table-header-color="blue">
                          <md-table-row
                            slot="md-table-row"
                            slot-scope="{ item }"
                          >
                            <md-table-cell md-label="">
                              <div class="md-table-side-label">
                                {{ item.name }}
                              </div>
                            </md-table-cell>
                            <md-table-cell md-label="Sales Multiples">{{
                              item.sales
                            }}</md-table-cell>
                            <md-table-cell md-label="Earnings Multiples">{{
                              item.earnings
                            }}</md-table-cell>
                          </md-table-row>
                        </md-table>
                      </div>
                    </div>
                  </template>
                </table-card>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-size-100">
        <profile-card header-color="blue" class="text-card multiples-text-card">
          <template slot="header"> </template>
          <template slot="content">
            <h4>
              About Vestimate Valuation Multiples
            </h4>
            <p>
              Search results display up to six values in all: Quartile
              1-Median-Quartile 3 multiples for each industry and sale group
              combination. You are only charged a search credit when an industry
              and sales group is selected and the industry multiple values are
              load on the page. Copy and paste into a file of your choosing to
              store.<br /><br />

              <b>Business Value Insight Terms</b>: The Bizminer Vestimate® Value
              basis is derived from projected company sales; peer group average
              earnings %; and industry valuation multiples. Median ranges
              reflect a range of market conditions and business performance at
              this revenue scale.<br /><br />

              You should not use Bizminer Vestimates® in place of a professional
              valuation or as the basis of any specific business-related or
              other financial transaction; nor to secure a business or personal
              loan.<br /><br />

              Owner Earnings (Cash Flow) Approach: Revenue/Owner Earnings market
              valuation approach<br />
              Sales Approach: Revenue/Annual Sales market value approach<br /><br />

              Note: Median is the point at which 50% of a sample is above and
              50% of the same below the value. Quartile 1 lies at the mid-point
              between the median and the lowest value; Quartile 3 between the
              median and the highest value.
            </p>
          </template>
        </profile-card>
      </div>
    </div>
  </div>
</template>

<script>
import { TableCard, ProfileCard } from '@/components';

export default {
  components: {
    TableCard,
    ProfileCard,
  },
  data() {
    return {
      colouredLineChart: {
        data: {
          labels: [
            "'06",
            "'07",
            "'08",
            "'09",
            "'10",
            "'11",
            "'12",
            "'13",
            "'14",
            "'15",
          ],
          series: [[287, 480, 290, 554, 690, 690, 500, 752, 650, 900, 944]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 10,
          }),
          axisY: {
            showGrid: true,
            offset: 40,
          },
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          showPoint: true,
          height: '300px',
        },
      },
      tableData: [
        {
          name: 'Q1',
          sales: '0.28',
          earnings: '1.60',
        },
        {
          name: 'Median',
          sales: '0.28',
          earnings: '1.60',
        },
        {
          name: 'Q3',
          sales: '0.28',
          earnings: '1.60',
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
