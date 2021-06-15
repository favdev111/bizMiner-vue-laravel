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
                <h1 class="md-title profile-title">About the Data</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md-layout-item">
        <div class="md-layout">
          <div class="md-layout-item md-medium-size-100 md-size-50">
            <profile-card header-color="blue" class="multiples-text-card">
              <template slot="header"> </template>
              <template slot="content">
                <p>
                  BizMiner data is widely accepted for industry analytical work,
                  benchmarking, valuations, forensics and litigation. BizMiner
                  content is accepted in US Tax Court (Bauer vs. IRS: T.C. Memo.
                  2012-156) and is utilized by state, provincial and national
                  taxing agencies in the US and Canada.<br /><br />

                  Raw data analyzed for BizMiner reports is sourced from an
                  array of the nation's government and private statistical
                  sources. None of these raw data sources creates the final
                  measures reflected in BizMiner industry profiles. In total,
                  BizMiner accesses over a billion sourced data points from 15
                  million business operations for each of its twice annual
                  updates covering a 3-5 year time series. Historical data and
                  BizMiner algorithms are used to inform and test projections
                  for non-reporting firms. Data elements are sourced
                  specifically from:<br /><br />

                  IRS SOI Corporation Tax Book<br />
                  IRS Statistics of Income<br />
                  US Economic Census<br />
                  US Census Quarterly Financial Reports<br />
                  US Census County Business Patterns<br />
                  Bureau of Labor Statistics Monthly Employment Reports<br />
                  Bureau of Labor Statistics Monthly Unemployment Reports<br />
                  Bureau of Labor Statistics Annual Wage Survey<br />
                  Bureau of Labor Statistics Industry Productivity Reports<br />
                  Bureau of Labor Statistics Price Indices<br />
                  National Agricultural Statistical Service<br />
                  US Census Quarterly Financial Reports<br />
                  US Census Retail Trade Report<br />
                  InfoGroup, Inc.<br />
                  Credit Reporting Agencies<br />
                  Business Directories<br />
                  American Community Survey<br />
                </p>
              </template>
              <template slot="footer">
                <div class="stats">
                  <span class="photo"
                    ><img class="user-avatar" src="https://i.pravatar.cc/300"
                  /></span>
                  <span class="date">Created Jan 17, 2021</span>
                </div>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-medium-size-100 md-size-50">
            <profile-card header-color="blue" class="multiples-text-card">
              <template slot="header"> </template>
              <template slot="content">
                <p>
                  While 100% firm coverage is desirable for analysis purposes,
                  the greatest value of BizMiner reports rests in discerning
                  patterns of activity, which are reflected in the large samples
                  used to develop our reports. The overall current coverage of
                  the databases surpasses 13 million active business operations
                  at any point in time.<br /><br />

                  As is the case with any databases this large, some errors are
                  inevitable. Some firms are missed and specific information on
                  others is lacking from the database. Not all information
                  received is uniform or complete, resulting in the need to
                  develop projection algorithms for specific industry segments
                  and metrics in some report series. No representation is made
                  as to the accuracy of the databases utilized or the results of
                  subsequent analyses. Neither the Brandow Company nor its
                  resellers has undertaken independent primary research to
                  confirm the accuracy of the data utilized in the Profile
                  analyses. Neither the Brandow Company nor its resellers are
                  responsible for conclusions drawn or decisions made based upon
                  this data or analysis. In no event will the Brandow Company or
                  its resellers be liable for any damages, direct, indirect,
                  incidental or consequential resulting from the use of the
                  information contained in BizMiner reports.
                </p>
              </template>
              <template slot="footer">
                <div class="stats">
                  <span class="photo"
                    ><img class="user-avatar" src="https://i.pravatar.cc/300"
                  /></span>
                  <span class="date">Created Jan 17, 2021</span>
                </div>
              </template>
            </profile-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileCard } from '@/components';

export default {
  components: {
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
