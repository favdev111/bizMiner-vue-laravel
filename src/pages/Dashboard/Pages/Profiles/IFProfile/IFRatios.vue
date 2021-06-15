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
              <h1 class="md-title profile-title">Financial Ratios</h1>
            </div>
          <div class="md-toolbar-row">
            <nav-tabs-card no-label md-elevation="0">
              <template slot="content">
                <md-tabs md-alignment="left">
                  <md-tab md-label="Cash flow-Solvency" md-icon="money">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-100">
                        <md-card>
                          <md-card-header class="md-card-header-icon">
                            <div class="card-icon">
                              <md-icon>money</md-icon>
                            </div>
                            <h4 class="title text-left">Cash flow-Solvency</h4>
                          </md-card-header>
                          <md-card-content>
                            <div class="md-layout">
                              <div
                                class="
                                  md-layout-item md-medium-size-100 md-size-100
                                "
                              >
                                <md-table
                                  v-model="tableDataCashFlowSolvency"
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
                                    <md-table-cell md-label="2020">{{
                                      item.year2020
                                    }}</md-table-cell>
                                  </md-table-row>
                                </md-table>
                              </div>
                            </div>
                          </md-card-content>
                        </md-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">
                              Accounts Payable: Business Revenue
                            </h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Current Ratio</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Quick Ratio</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Days Payable</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">
                              Current Liabilities: Inventory
                            </h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">
                              Net Working Capital: Business Revenue
                            </h4>
                          </template>
                        </chart-card>
                      </div>
                    </div>
                  </md-tab>
                  <md-tab md-label="Profitability" md-icon="payments">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-100">
                        <md-card>
                          <md-card-header class="md-card-header-icon">
                            <div class="card-icon">
                              <md-icon>payments</md-icon>
                            </div>
                            <h4 class="title text-left">Profitability</h4>
                          </md-card-header>
                          <md-card-content>
                            <div class="md-layout">
                              <div
                                class="
                                  md-layout-item md-medium-size-100 md-size-100
                                "
                              >
                                <md-table
                                  v-model="tableDataProfitability"
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
                                    <md-table-cell md-label="2020">{{
                                      item.year2020
                                    }}</md-table-cell>
                                  </md-table-row>
                                </md-table>
                              </div>
                            </div>
                          </md-card-content>
                        </md-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">EBITDA: Business Revenue (%)</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Pre-Tax Return On Assets (%)</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">
                              Pre-Tax Return On Net Worth (%)
                            </h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">
                              Pre-Tax Return On Business Revenue (%)
                            </h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Discretionary Owner Earnings</h4>
                          </template>
                        </chart-card>
                      </div>
                    </div>
                  </md-tab>
                  <md-tab md-label="Efficiency" md-icon="pie_chart">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-100">
                        <md-card>
                          <md-card-header class="md-card-header-icon">
                            <div class="card-icon">
                              <md-icon>money</md-icon>
                            </div>
                            <h4 class="title text-left">Efficiency</h4>
                          </md-card-header>
                          <md-card-content>
                            <div class="md-layout">
                              <div
                                class="
                                  md-layout-item md-medium-size-100 md-size-100
                                "
                              >
                                <md-table
                                  v-model="tableDataEfficiency"
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
                                    <md-table-cell md-label="2020">{{
                                      item.year2020
                                    }}</md-table-cell>
                                  </md-table-row>
                                </md-table>
                              </div>
                            </div>
                          </md-card-content>
                        </md-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Assets: Business Revenue</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Days Inventory</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Days Receivables</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Current Asset Turnover</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">
                              Fixed Asset Turnover (Business Revenue/Fixed
                              Assets)
                            </h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">
                              Gross Margin: Business Revenue
                            </h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Sales Per Employee ($1000)</h4>
                          </template>
                        </chart-card>
                      </div>
                    </div>
                  </md-tab>
                  <md-tab md-label="Debt-Risk" md-icon="report">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-100">
                        <md-card>
                          <md-card-header class="md-card-header-icon">
                            <div class="card-icon">
                              <md-icon>money</md-icon>
                            </div>
                            <h4 class="title text-left">Debt-Risk</h4>
                          </md-card-header>
                          <md-card-content>
                            <div class="md-layout">
                              <div
                                class="
                                  md-layout-item md-medium-size-100 md-size-100
                                "
                              >
                                <md-table
                                  v-model="tableDataDebtRisk"
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
                                    <md-table-cell md-label="2020">{{
                                      item.year2020
                                    }}</md-table-cell>
                                  </md-table-row>
                                </md-table>
                              </div>
                            </div>
                          </md-card-content>
                        </md-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Assets: Business Revenue</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Days Inventory</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Days Receivables</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Current Asset Turnover</h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">
                              Fixed Asset Turnover (Business Revenue/Fixed
                              Assets)
                            </h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">
                              Gross Margin: Business Revenue
                            </h4>
                          </template>
                        </chart-card>
                      </div>
                      <div class="md-layout-item md-medium-size-100 md-size-50">
                        <chart-card
                          header-animation="false"
                          :chart-data="colouredLineChart.data"
                          :chart-options="colouredLineChart.options"
                          chart-type="Line"
                          header-icon
                          chart-inside-content
                          no-footer
                          background-color="blue"
                        >
                          <template slot="chartInsideHeader">
                            <div class="card-icon">
                              <md-icon>timeline</md-icon>
                            </div>
                            <h4 class="title">Sales Per Employee ($1000)</h4>
                          </template>
                        </chart-card>
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
      view: "cash-flow-solvency",
      pieChart: {
        data: {
          labels: ["42%", "20%", "28%", "6%", "4%"],
          series: [42, 20, 28, 6, 4],
        },
        options: {
          height: "250px",
        },
      },
      tableDataCashFlowSolvency: [
        {
          name: "Accounts Payable: Business Revenue",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Current Ratio",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Quick Ratio",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Days Payable",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Current Liabilities: Inventory",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Net Working Capital: Business Revenue",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Cost of Sales: Accounts Payable",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Cost of Sales: Inventory",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
      ],
      tableDataProfitability: [
        {
          name: "EBITDA: Business Revenue (%)",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
        {
          name: "Pre-Tax Return on Assets (%)",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
        {
          name: "Pre-Tax Return on Net Worth (%)",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
        {
          name: "Pre-Tax Return on Business Revenue (%)",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
        {
          name: "Discretionary Owner Earnings",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
        {
          name: "After Tax Return on Assets (%)",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
        {
          name: "After Tax Return on Net Worth (%)",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
        {
          name: "After Tax Return on Business Revenue (%)",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
        {
          name: "Profit/Employee",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
        {
          name: "Profit/Employee",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
        {
          name: "Owner Earnings/Employee",
          year2015: "12",
          year2016: "14",
          year2017: "15",
          year2018: "2",
          year2019: "23",
          year2020: "12",
        },
      ],
      tableDataEfficiency: [
        {
          name: "Assets: Business Revenue",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Days Inventory",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Days Receivables",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Current Asset Turnover",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Fixed Asset Turnover (Business Revenue/Fixed Assets)",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Gross Margin: Business Revenue",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Sales Per Employee",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Inventory Turnover",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Receivables Turnover",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Total Asset Turnover",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Working Capital Turnover",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Days Working Capital",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Cash Turnover",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Efficiency Index",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
      ],
      tableDataDebtRisk: [
        {
          name: "Interest Coverage",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Current Liabilities: Net Worth",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Long-Term Liabilities: Net Worth",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Loans-Notes Payable/Net Worth",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Modified Z-Score",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Total Liabilities: Net Worth",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
        {
          name: "Fixed Assets: Net Worth",
          year2015: "124",
          year2016: "24",
          year2017: "124",
          year2018: "6",
          year2019: "467",
          year2020: "34",
        },
      ],
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
          height: "300px",
        },
      },
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
      section = "cash-flow-solvency";
    }

    this.switchView(section);
  },
  watch: {
    "$route.query.section"() {
      let section = this.$route.query.section;

      if (!section) {
        section = "cash-flow-solvency";
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
