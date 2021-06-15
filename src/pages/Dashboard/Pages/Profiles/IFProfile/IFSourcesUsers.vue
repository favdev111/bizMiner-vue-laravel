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
                <h1 class="md-title profile-title">Sources & Uses of Funds</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md-layout-item md-size-100">
        <md-card>
          <md-card-header class="md-card-header-icon">
            <div class="card-icon">
              <md-icon>collections_bookmark</md-icon>
            </div>
            <h4 class="title text-left">
              Source & Uses of Funds
            </h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100 md-size-100">
                <md-table
                  v-model="tableData"
                  table-header-color="blue"
                  class="sources-users-table"
                >
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="Change In:"
                      ><div>
                        {{ item.name }}
                      </div></md-table-cell
                    >
                    <md-table-cell md-label="15-16">{{
                      item.year15_16
                    }}</md-table-cell>
                    <md-table-cell md-label="16-17">{{
                      item.year16_17
                    }}</md-table-cell>
                    <md-table-cell md-label="17-18">{{
                      item.year17_18
                    }}</md-table-cell>
                    <md-table-cell md-label="18-19">{{
                      item.year18_19
                    }}</md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {} from '@/components';

export default {
  components: {},
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
          name: 'Cash & Cash Equivalents',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Worksheet',
          year15_16: '',
          year16_17: '',
          year17_18: '',
          year18_19: '',
        },
        {
          name: 'Accounts Receivable',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Inventory',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Other Curr Assets',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Net Fixed Assets',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Other Non-Curr Assets',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Accounts Payable',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Loans/Notes Payable',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Other Current Liabilities',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Long-term Debt',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Net Worth',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Total Sources & Uses',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Cash: Beginning Period',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Cash: End Period',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
        {
          name: 'Change in Cash & Cash Equivalents',
          year15_16: 134513,
          year16_17: 1345,
          year17_18: 23553,
          year18_19: 34,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
