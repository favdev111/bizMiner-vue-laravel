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
            <li class="breadcrumb-item active" aria-current="page">
              My Inputs
            </li>
          </ol>
        </nav>
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <h1 class="md-title">
                My Inputs
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <table-card>
          <template slot="header">
            <div class="card-icon">
              <md-icon>keyboard</md-icon>
            </div>
          </template>

          <template slot="content">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <md-table
                  v-model="tableData"
                  table-header-color="blue"
                  class="billing-and-invoices-table"
                >
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="Date Created">{{
                      item.dateCreated
                    }}</md-table-cell>
                    <md-table-cell md-label="Client">{{
                      item.client
                    }}</md-table-cell>
                    <md-table-cell md-label="Input Stype">{{
                      item.inputStype
                    }}</md-table-cell>
                    <md-table-cell md-label="Products"
                      ><a href="#">{{ item.products }}</a></md-table-cell
                    >
                    <md-table-cell class="text-right" md-label="Manage">
                      <button
                        type="button"
                        class="md-button md-raised md-danger table-action-button md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">
                            <md-icon>delete_forever</md-icon>
                          </div>
                        </div>
                      </button>
                      <router-link :to="{ name: 'EditInput' }" class="ml-5">
                        <button
                          type="button"
                          class="md-button md-raised md-primary table-action-button md-theme-default"
                        >
                          <div class="md-ripple">
                            <div class="md-button-content">
                              <md-icon>settings</md-icon>
                            </div>
                          </div>
                        </button>
                      </router-link>
                      <router-link :to="{ name: 'InputDetails' }" class="ml-5">
                        <button
                          type="button"
                          class="md-button md-raised md-info table-action-button md-theme-default"
                        >
                          <div class="md-ripple">
                            <div class="md-button-content">
                              <md-icon>visibility</md-icon>
                            </div>
                          </div>
                        </button>
                      </router-link>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-raised md-info mt-4"
                >Add Client Inputs<md-icon class="ml-5"
                  >add_to_queue</md-icon
                ></md-button
              >
            </div>
          </template>
        </table-card>
      </div>
    </div>
  </div>
</template>

<script>
import { TableCard } from '@/components';

export default {
  components: {
    TableCard,
  },
  data() {
    return {
      boolean: false,
      tableData: [
        {
          dateCreated: '01/25/1996',
          client: 'Danny Burke',
          inputStype: 'Detailed',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          client: 'Danny Burke',
          inputStype: 'Detailed',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          client: 'Danny Burke',
          inputStype: 'Detailed',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          client: 'Danny Burke',
          inputStype: 'Detailed',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          client: 'Danny Burke',
          inputStype: 'Detailed',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          client: 'Danny Burke',
          inputStype: 'Detailed',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          client: 'Danny Burke',
          inputStype: 'Detailed',
          products: '2',
        },
        {
          dateCreated: '01/25/1996',
          client: 'Danny Burke',
          inputStype: 'Detailed',
          products: '2',
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
