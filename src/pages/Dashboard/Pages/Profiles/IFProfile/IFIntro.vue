<template>
  <div class="content if-profile">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100 header"
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
                >[238220] Plumbing, Heating, and Air-Conditioning Contractors<br />
                Sector: Construction<br />
                Harrisburg Metro Area<br />
                Sales Class: $1m - $2.49m
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
                <h1 class="md-title profile-title">Introduction</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md-layout-item">
        <md-card>
          <md-card-header class="md-card-header-icon">
            <div class="card-icon">
              <md-icon>widgets</md-icon>
            </div>
            <h4 class="title text-left">
              Your Industry Peer Group <br />
              <small
                >When you accessed your Industry Financial Report, you selected
                a comparison peer group that most closely represents the
                character of your firm.</small
              >
            </h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100 md-size-50">
                <!-- <h5 class="title text-left">Firms Analyzed</h5> -->
                <table-card>
                  <template slot="header" header-color="rose">
                    <div class="card-icon">
                      <md-icon>addchart</md-icon>
                    </div>
                    <h4 class="title">
                      <div
                        class="md-layout-item md-medium-size-100 md-size-100 card-title"
                      >
                        Firms Analyzed
                      </div>
                    </h4>
                  </template>

                  <template slot="content">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-100">
                        <md-table v-model="tableData">
                          <md-table-row
                            slot="md-table-row"
                            slot-scope="{ item }"
                          >
                            <md-table-cell md-label="Profile Year">{{
                              item.profileYear
                            }}</md-table-cell>
                            <md-table-cell md-label="Firms">{{
                              item.firms
                            }}</md-table-cell>
                          </md-table-row>
                        </md-table>
                      </div>
                    </div>
                  </template>
                </table-card>
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
                      Firms Analyzed
                    </h4>
                  </template>
                </chart-card>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100 md-size-50">
                <profile-card header-color="blue" class="text-card">
                  <template slot="header"> </template>
                  <template slot="content">
                    <h4>
                      Your Industry In Context: The NAICS Classification System
                    </h4>
                    <p>
                      The industry your selected fits within the official NAICS
                      (North American Industry Classification System) and
                      Bizminer’s proprietary taxonomy, which breaks out more
                      detailed industries classifications than NAICS by adding
                      up to eight decimal digits after the NAICS-6 code. The
                      industry you selected fits into this industry hierarchy:
                      <br /><br />- NAICS 23: Construction - NAICS 238:
                      Specialty Trade Contractors <br />- NAICS 2382: Building
                      Equipment Contractors <br />- NAICS 238220: Plumbing,
                      Heating, and Air-Conditioning Contractors
                    </p>
                  </template>
                </profile-card>
              </div>
              <div class="md-layout-item md-medium-size-100 md-size-50">
                <profile-card header-color="blue" class="text-card">
                  <template slot="header"> </template>
                  <template slot="content">
                    <h4>
                      Ratio Categories
                    </h4>
                    <p>
                      The Bizminer Industry Financial Priofile is based on
                      selected financial ratios that are typically considered to
                      be Key Performance Indicators (KPIs) which includes:
                      <br /><br />Cash Flow/Solvency: Cash Flow ratios indicate
                      a company’s ability to meet various levels of demand on
                      cash and easily obtainable cash resources against current
                      and anticipated near-term payments due.
                      <br /><br />Profitability: Profitability ratios compare
                      levels of return against various expense and balance sheet
                      components to measure your performance against reasonable
                      industry peer group standards, indicating bottom line
                      performance, <br /><br />Efficiency: Efficiency ratios
                      measure your success in marshalling resources at hand to
                      effectively manage various components of your business
                      operations. These indicators often point most specifically
                      toward actions that could enhance your bottom line.
                      <br /><br />Debt-Risk: Debt-Risk ratios assess the
                      appropriateness of a firm’s level of debt against the
                      ability to pay, as well as the risk of insolvency.
                      <br /><br />If you submit corresponding inputs, ratios
                      will be scored against industry values for the most recent
                      three calendar years.
                    </p>
                  </template>
                </profile-card>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ChartCard, TableCard, ProfileCard } from '@/components';

export default {
  components: {
    ChartCard,
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
          profileYear: '2015',
          firms: '37',
        },
        {
          profileYear: '2015',
          firms: '37',
        },
        {
          profileYear: '2015',
          firms: '37',
        },
        {
          profileYear: '2015',
          firms: '37',
        },
        {
          profileYear: '2015',
          firms: '37',
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
