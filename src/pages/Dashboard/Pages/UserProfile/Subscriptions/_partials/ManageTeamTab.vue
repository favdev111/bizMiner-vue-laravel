<template>
  <md-tab id="tab-manage-team" md-label="Manage Team" md-icon="people">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-table v-model="tableData" table-header-color="blue">
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="Date Created">{{
              item.dateCreated
            }}</md-table-cell>
            <md-table-cell md-label="Last Login">{{
              item.lastLogin
            }}</md-table-cell>
            <md-table-cell md-label="Team Member">{{
              item.teamMember
            }}</md-table-cell>
            <md-table-cell md-label="Email Address">{{
              item.emailAddress
            }}</md-table-cell>
            <md-table-cell md-label="Products"
              ><a href="#">{{ item.products }}</a></md-table-cell
            >
            <md-table-cell class="text-right" md-label="Manage">
              <button
                type="button"
                class="md-button md-raised md-danger table-action-button md-theme-default ml-5"
              >
                <div class="md-ripple">
                  <div class="md-button-content">
                    <md-icon>person_remove</md-icon>
                  </div>
                </div>
              </button>
              <button
                type="button"
                class="md-button md-raised md-info table-action-button md-theme-default ml-5"
              >
                <div class="md-ripple">
                  <div class="md-button-content">
                    <md-icon>manage_accounts</md-icon>
                  </div>
                </div>
              </button>
            </md-table-cell>
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
            >ADD TEAM MEMBER
            <md-icon class="ml-5">person_add</md-icon>
          </md-button>
        </div>
      </div>
    </div>
  </md-tab>
</template>
<script>
import { Pagination } from '@/components';

export default {
  name: 'manage-team-tab',
  props: {},
  components: {
    Pagination,
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
          dateCreated: '01/25/1996',
          lastLogin: '01/25/1996',
          teamMember: 'Nolan Walker',
          emailAddress: 'email@email.com',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          lastLogin: '01/25/1996',
          teamMember: 'Nolan Walker',
          emailAddress: 'email@email.com',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          lastLogin: '01/25/1996',
          teamMember: 'Nolan Walker',
          emailAddress: 'email@email.com',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          lastLogin: '01/25/1996',
          teamMember: 'Nolan Walker',
          emailAddress: 'email@email.com',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          lastLogin: '01/25/1996',
          teamMember: 'Nolan Walker',
          emailAddress: 'email@email.com',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          lastLogin: '01/25/1996',
          teamMember: 'Nolan Walker',
          emailAddress: 'email@email.com',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          lastLogin: '01/25/1996',
          teamMember: 'Nolan Walker',
          emailAddress: 'email@email.com',
          products: '2',
        },
      ],
    };
  },
  methods: {},
};
</script>
<style></style>
