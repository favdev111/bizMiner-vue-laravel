<template>
  <div class="content if-profile">
    <div class="md-layout">
      <div
        class="
          md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100
          header
        "
      >
        <div class="md-layout">
          <div
            class="
              md-layout-item md-medium-size-15 md-xsmall-size-100 md-size-15
            "
          >
            <img src="/img/image_placeholder.jpg" />
          </div>
          <div
            class="
              md-layout-item md-medium-size-65 md-xsmall-size-100 md-size-65
            "
          >
            <div>
              <h1 class="md-title profile-title">Industry Finanical Profile</h1>
            </div>
            <div>
              <small
                >[238220] Plumbing, Heating, and Air-Conditioning Contractors<br />
                Sector: Construction<br />
                Harrisburg Metro Area<br />
                Sales Class: $1m - $2.49m
              </small>
            </div>
          </div>
          <div
            class="
              md-layout-item md-medium-size-20 md-xsmall-size-100 md-size-20
            "
          >
            <div class="md-layout">
              <div
                class="
                  md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50
                "
              >
                <md-button
                  class="md-info md-block access-button"
                  :href="'/'"
                  target="_blank"
                  >CSV <md-icon class="ml-5">table_rows</md-icon>
                </md-button>
              </div>
              <div
                class="
                  md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50
                "
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
          <div>
            <h1 class="md-title profile-title">Profit & Loss</h1>
          </div>
          <div class="md-toolbar-row">
            <nav-tabs-card no-label md-elevation="0">
              <template slot="content">
                <md-tabs md-alignment="left">
                  <md-tab id="tab-Charts" md-label="Charts" md-icon="pie_chart">
                    <div class="md-layout">
                      <div class="md-layout-item">
                        <md-card>
                          <md-card-header class="md-card-header-icon">
                            <div class="card-icon">
                              <md-icon>pie_chart</md-icon>
                            </div>
                            <h4 class="title text-left">Charts</h4>
                          </md-card-header>
                          <md-card-content>
                            <div class="md-layout">
                              <div
                                class="
                                  md-layout-item md-medium-size-100 md-size-100
                                "
                              >
                                <chart-card
                                  header-animation="false"
                                  :chart-data="pieChart.data"
                                  :chart-options="pieChart.options"
                                  chart-type="Pie"
                                  header-icon
                                  chart-inside-content
                                  background-color="blue"
                                >
                                  <template slot="chartInsideHeader">
                                    <div class="card-icon">
                                      <md-icon>pie_chart</md-icon>
                                    </div>
                                    <h4 class="title">
                                      Industry Assets 2020q2
                                    </h4>
                                  </template>
                                  <template slot="footer">
                                    <div class="md-layout">
                                      <div class="md-layout-item md-size-100">
                                        <h6 class="category">Legend</h6>
                                      </div>
                                      <div class="md-layout-item">
                                        <i class="fa fa-circle text-info"></i>
                                        Cash-Receivables
                                        <i
                                          class="fa fa-circle text-warning"
                                        ></i>
                                        Inventory
                                        <i class="fa fa-circle text-danger"></i>
                                        Other Current
                                        <i
                                          class="fa fa-circle text-success"
                                        ></i>
                                        Net Fixed
                                        <i
                                          class="fa fa-circle text-primary"
                                        ></i>
                                        Other Non-Current
                                      </div>
                                    </div>
                                  </template>
                                </chart-card>
                              </div>
                              <div
                                class="
                                  md-layout-item md-medium-size-100 md-size-100
                                "
                              >
                                <chart-card
                                  header-animation="false"
                                  :chart-data="pieChart.data"
                                  :chart-options="pieChart.options"
                                  chart-type="Pie"
                                  header-icon
                                  chart-inside-content
                                  background-color="blue"
                                >
                                  <template slot="chartInsideHeader">
                                    <div class="card-icon">
                                      <md-icon>pie_chart</md-icon>
                                    </div>
                                    <h4 class="title">
                                      Industry Liabilities 2020q2
                                    </h4>
                                  </template>
                                  <template slot="footer">
                                    <div class="md-layout">
                                      <div class="md-layout-item md-size-100">
                                        <h6 class="category">Legend</h6>
                                      </div>
                                      <div class="md-layout-item">
                                        <i class="fa fa-circle text-info"></i>
                                        Payables
                                        <i
                                          class="fa fa-circle text-warning"
                                        ></i>
                                        Other Current
                                        <i class="fa fa-circle text-danger"></i>
                                        Long Term
                                        <i
                                          class="fa fa-circle text-success"
                                        ></i>
                                        Net Worth
                                      </div>
                                    </div>
                                  </template>
                                </chart-card>
                              </div>
                            </div>
                          </md-card-content>
                        </md-card>
                      </div>
                    </div>
                  </md-tab>
                  <md-tab
                    id="tab-payments"
                    md-label="Dollars"
                    md-icon="payments"
                  >
                    <div class="md-layout">
                      <div class="md-layout-item">
                        <md-card>
                          <md-card-header class="md-card-header-icon">
                            <div class="card-icon">
                              <md-icon>payments</md-icon>
                            </div>
                            <h4 class="title text-left">
                              Income & Expense-Profit & Loss (%)
                            </h4>
                          </md-card-header>
                          <md-card-content>
                            <div class="md-layout">
                              <div
                                class="
                                  md-layout-item md-medium-size-100 md-size-100
                                "
                              >
                                <md-table
                                  v-model="tableDataPercent"
                                  table-header-color="blue"
                                  class="profit-and-loss-table"
                                >
                                  <md-table-row
                                    slot="md-table-row"
                                    slot-scope="{ item }"
                                  >
                                    <md-table-cell md-label=""
                                      ><div class="md-table-side-label">
                                        {{ item.name }}
                                      </div></md-table-cell
                                    >
                                    <md-table-cell md-label="2015">{{
                                      item.year2015
                                    }}</md-table-cell>
                                    <md-table-cell md-label="2016">{{
                                      item.year2016
                                    }}</md-table-cell>
                                    <md-table-cell md-label="2017">{{
                                      item.year2017
                                    }}</md-table-cell>
                                    <md-table-cell md-label="2018">{{
                                      item.year2018
                                    }}</md-table-cell>
                                    <md-table-cell md-label="2019">{{
                                      item.year2019
                                    }}</md-table-cell>
                                    <md-table-cell md-label="2020q2">{{
                                      item.year2020
                                    }}</md-table-cell>
                                  </md-table-row>
                                </md-table>
                              </div>
                            </div>
                          </md-card-content>
                        </md-card>
                      </div>
                    </div>
                  </md-tab>
                  <md-tab id="tab-money" md-label="Percentages" md-icon="money">
                    <div class="md-layout">
                      <div class="md-layout-item">
                        <md-card>
                          <md-card-header class="md-card-header-icon">
                            <div class="card-icon">
                              <md-icon>money</md-icon>
                            </div>
                            <h4 class="title text-left">
                              Income & Expense-Profit & Loss ($)
                            </h4>
                          </md-card-header>
                          <md-card-content>
                            <div class="md-layout">
                              <div
                                class="
                                  md-layout-item md-medium-size-100 md-size-100
                                "
                              >
                                <md-table
                                  v-model="tableData"
                                  table-header-color="blue"
                                  class="profit-and-loss-table"
                                >
                                  <md-table-row
                                    slot="md-table-row"
                                    slot-scope="{ item }"
                                  >
                                    <md-table-cell md-label=""
                                      ><div class="md-table-side-label">
                                        {{ item.name }}
                                      </div></md-table-cell
                                    >
                                    <md-table-cell md-label="2015">{{
                                      item.year2015
                                    }}</md-table-cell>
                                    <md-table-cell md-label="2016">{{
                                      item.year2016
                                    }}</md-table-cell>
                                    <md-table-cell md-label="2017">{{
                                      item.year2017
                                    }}</md-table-cell>
                                    <md-table-cell md-label="2018">{{
                                      item.year2018
                                    }}</md-table-cell>
                                    <md-table-cell md-label="2019">{{
                                      item.year2019
                                    }}</md-table-cell>
                                    <md-table-cell md-label="2020q2">{{
                                      item.year2020
                                    }}</md-table-cell>
                                  </md-table-row>
                                </md-table>
                              </div>
                            </div>
                          </md-card-content>
                        </md-card>
                      </div>
                    </div>
                  </md-tab>
                </md-tabs>
              </template>
            </nav-tabs-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChartCard, NavTabsCard } from "@/components";

export default {
  components: {
    ChartCard,
    NavTabsCard,
  },
  data() {
    return {
      view: "dollar",
      pieChart: {
        data: {
          labels: ["42%", "20%", "28%", "6%", "4%"],
          series: [42, 20, 28, 6, 4],
        },
        options: {
          height: "250px",
        },
      },
      tableDataPercent: [
        {
          name: "Business Revenue",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Cost of Sales",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Cost of Sales - Labor Portion",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Gross Margin",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Officers Comp.",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Salary-Wages",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Rent",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Taxes Paid",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Advertising",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Benefits-Pensions",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Repairs",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Bad Debt",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Sales, General Admin & Misc.",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "EBITDA",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Amortization Depreciation Depletion",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Operating Expenses",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Operating Income",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Interest Income",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Interest Expense",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Other Income",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Pre-Tax Net Profit",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
        {
          name: "Discretionary Owner Earnings",
          year2015: "100%",
          year2016: "100%",
          year2017: "100%",
          year2018: "100%",
          year2019: "100%",
          year2020: "100%",
        },
      ],
      tableData: [
        {
          name: "Business Revenue",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Cost of Sales",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Cost of Sales - Labor Portion",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Gross Margin",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Officers Comp.",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Salary-Wages",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Rent",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Taxes Paid",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Advertising",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Benefits-Pensions",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Repairs",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Bad Debt",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Sales, General Admin & Misc.",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "EBITDA",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Amortization Depreciation Depletion",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Operating Expenses",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Operating Income",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Interest Income",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Interest Expense",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Other Income",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Pre-Tax Net Profit",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
        {
          name: "Discretionary Owner Earnings",
          year2015: "1",
          year2016: "1",
          year2017: "1",
          year2018: "2",
          year2019: "3",
          year2020: "4",
        },
      ],
    };
  },
  mounted() {
    let section = this.$route.query.section;

    if (!section) {
      section = "dollar";
    }

    this.switchView(section);
  },
  // watch: {
  //   '$route.query.section'() {
  //     let section = this.$route.query.section;

  //     if (!section) {
  //       section = 'dollar';
  //     }

  //     this.switchView(section);
  //   },
  // },
  methods: {
    switchView: function (type) {
      this.view = type;
    },
  },
};
</script>
<style lang="scss"></style>
