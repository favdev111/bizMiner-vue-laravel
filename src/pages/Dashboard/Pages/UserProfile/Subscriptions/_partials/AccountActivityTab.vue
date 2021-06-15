<template>
  <md-tab
    id="tab-account-activity"
    md-label="Account Activity"
    md-icon="devices"
  >
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-end">
              <div class="links" style="max-width:nullpx;">
                <select
                  class="selectpicker"
                  data-style="btn btn-primary btn-round"
                  title="By Product Type"
                  data-size="7"
                >
                  <option disabled selected> By Product Type</option>
                  <option value="1">By Team Member</option>
                  <option value="2">By Team</option>
                </select>
                <select
                  class="selectpicker"
                  data-style="btn btn-primary btn-round"
                  title="Single Select"
                  data-size="7"
                >
                  <option disabled selected> By Team Member</option>
                  <option value="1">By Team Member</option>
                  <option value="2">By Team</option>
                </select>
                <div class="datepicker-box">
                  <datetime
                    format="MM/DD/YYYY"
                    width="300px"
                    v-model="date"
                  ></datetime>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-table v-model="tableData" table-header-color="blue">
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
            <md-table-cell md-label="Team Member">{{
              item.teamMember
            }}</md-table-cell>
            <md-table-cell md-label="Client">{{ item.client }}</md-table-cell>
            <md-table-cell md-label="Product Type">{{
              item.productType
            }}</md-table-cell>
            <md-table-cell class="text-right" md-label="Release">{{
              item.release
            }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <div class="pagin-page-info">
                Showing 1–10 of 57
              </div>
            </div>
            <div class="md-toolbar-section-end">
              <pagination
                class="pagination-no-border pagination-info"
                v-model="pagination.currentPage"
                :per-page="pagination.perPage"
                :total="pagination.total"
              >
              </pagination>
            </div>
          </div>
        </div>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100 card-buttons"
      >
        <div class="button-container">
          <md-button class="md-info md-block" :href="'/'" target="_blank"
            >EXPORT CSV
          </md-button>
        </div>
      </div>
    </div>
  </md-tab>
</template>
<script>
import { Pagination } from '@/components';
import datetime from 'vuejs-datetimepicker';

export default {
  name: 'products-accessed-tab',
  props: {},
  components: {
    Pagination,
    datetime,
  },
  data() {
    return {
      date: '11/03/2022',
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 200,
      },
      tableData: [
        {
          date: '01/25/1996',
          teamMember: 'Nolan Walker',
          client: 'Prime Plumbing',
          productType: 'Industry Finanical Profile',
          release: 'Dec 2020',
        },
        {
          date: '01/25/1996',
          teamMember: 'Nolan Walker',
          client: 'Prime Plumbing',
          productType: 'Industry Finanical Profile',
          release: 'Dec 2020',
        },
        {
          date: '01/25/1996',
          teamMember: 'Nolan Walker',
          client: 'Prime Plumbing',
          productType: 'Industry Finanical Profile',
          release: 'Dec 2020',
        },
        {
          date: '01/25/1996',
          teamMember: 'Nolan Walker',
          client: 'Prime Plumbing',
          productType: 'Industry Finanical Profile',
          release: 'Dec 2020',
        },
        {
          date: '01/25/1996',
          teamMember: 'Nolan Walker',
          client: 'Prime Plumbing',
          productType: 'Industry Finanical Profile',
          release: 'Dec 2020',
        },
      ],
    };
  },
  methods: {},
};
</script>
<style></style>
