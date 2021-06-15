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
            <h1 class="md-title profile-title">Balance Sheet</h1>
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
    NavTabsCard
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
          name: "Cash",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Receivables",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Inventory",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Other Current Assets",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Total Current Assets",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Gross Fixed Assets",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Accum. Depreciation-Amortization-Depltn.",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Net Fixed Assets",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Other Non-Current Assets",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Total Assets",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Accounts Payable",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Loans/Notes Payable",
          year2015: "100%",
          year2016: "100%",
        },
        {
          name: "Other Current Liabilities",
          year2015: "100%",
          year2016: "100%",
        },
      ],
      tableData: [
        {
          name: "Cash",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Receivables",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Inventory",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Other Current Assets",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Total Current Assets",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Gross Fixed Assets",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Accum. Depreciation-Amortization-Depltn.",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Net Fixed Assets",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Other Non-Current Assets",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Total Assets",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Accounts Payable",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Loans/Notes Payable",
          year2015: "1",
          year2016: "1",
        },
        {
          name: "Other Current Liabilities",
          year2015: "1",
          year2016: "1",
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
  watch: {
    "$route.query.section"() {
      let section = this.$route.query.section;

      if (!section) {
        section = "dollar";
      }

      this.switchView(section);
    },
  },
  methods: {
    switchView: function (type) {
      this.view = type;
    },
  },
};
</script>
<style lang="scss"></style>
