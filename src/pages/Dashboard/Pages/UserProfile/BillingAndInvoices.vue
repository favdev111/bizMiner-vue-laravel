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
              Billing and Invoices
            </li>
          </ol>
        </nav>
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <h1 class="md-title">
                Billing and Invoices
              </h1>
            </div>
            <div class="md-toolbar-section-end">
              <div class="links">
                <div class="search-box">
                  <input
                    aria-label="Search"
                    autocomplete="off"
                    spellcheck="false"
                    value=""
                    class=""
                    placeholder="ID, name, date..."
                  />
                </div>
              </div>
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
              <md-icon>shopping_cart</md-icon>
            </div>
            <h4 class="title">Transactions</h4>
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
                    <md-table-cell md-label="">
                      <md-checkbox v-model="boolean"></md-checkbox>
                    </md-table-cell>
                    <md-table-cell md-label="Order">
                      <router-link :to="{ name: 'TransactionDetails' }">
                        {{ item.order }}
                      </router-link>
                    </md-table-cell>
                    <md-table-cell md-label="Customer Name">{{
                      item.customerName
                    }}</md-table-cell>
                    <md-table-cell md-label="Transaction Type">{{
                      item.transactionType
                    }}</md-table-cell>
                    <md-table-cell md-label="Ordered">{{
                      item.ordered
                    }}</md-table-cell>
                    <md-table-cell md-label="Total">{{
                      item.total
                    }}</md-table-cell>
                    <md-table-cell md-label="Product(s)">{{
                      item.products
                    }}</md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
            </div>
            <div class="md-layout-item md-size-100 text-left">
              <md-button class="md-raised md-info mt-4"
                ><md-icon>save_alt</md-icon>Download Invoice(s)</md-button
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
          order: '1248',
          customerName: 'Danny Burke',
          transactionType: 'Credit Card - Approved',
          ordered: '01/25/1996',
          total: '$299',
          products: 'Industry Finanical Profile',
        },
        {
          order: '1248',
          customerName: 'Danny Burke',
          transactionType: 'Credit Card - Approved',
          ordered: '01/25/1996',
          total: '$299',
          products: 'Industry Finanical Profile',
        },
        {
          order: '1248',
          customerName: 'Danny Burke',
          transactionType: 'Credit Card - Approved',
          ordered: '01/25/1996',
          total: '$299',
          products: 'Industry Finanical Profile',
        },
        {
          order: '1248',
          customerName: 'Danny Burke',
          transactionType: 'Credit Card - Approved',
          ordered: '01/25/1996',
          total: '$299',
          products: 'Industry Finanical Profile',
        },
        {
          order: '1248',
          customerName: 'Danny Burke',
          transactionType: 'Credit Card - Approved',
          ordered: '01/25/1996',
          total: '$299',
          products: 'Industry Finanical Profile',
        },
        {
          order: '1248',
          customerName: 'Danny Burke',
          transactionType: 'Credit Card - Approved',
          ordered: '01/25/1996',
          total: '$299',
          products: 'Industry Finanical Profile',
        },
        {
          order: '1248',
          customerName: 'Danny Burke',
          transactionType: 'Credit Card - Approved',
          ordered: '01/25/1996',
          total: '$299',
          products: 'Industry Finanical Profile',
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
