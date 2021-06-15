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
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'BillingAndInvoices' }">
                Billing and Invoices
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Transaction Details
            </li>
          </ol>
        </nav>
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <h1 class="md-title">
                Transaction Details
              </h1>
            </div>
            <div class="md-toolbar-section-end">
              <div class="links">
                <md-button class="md-raised md-info mt-4"
                  ><md-icon>save_alt</md-icon>Download Invoice</md-button
                >
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
              <md-icon>receipt_long</md-icon>
            </div>
            <h4 class="title">Transaction No: #2314</h4>
          </template>

          <template slot="content">
            <div class="md-layout">
              <div class="md-layout-item md-size-25">
                <h4 class="card-title"><b>Order Placed</b></h4>
                <p>Monday 25th January 2021 7:36 PM</p>
              </div>
              <div class="md-layout-item md-size-25">
                <h4 class="card-title"><b>Name</b></h4>
                <p>Danny Burke</p>
              </div>
              <div class="md-layout-item md-size-25">
                <h4 class="card-title"><b>Email</b></h4>
                <p>danny@bizminer.com</p>
              </div>
              <div class="md-layout-item md-size-25">
                <h4 class="card-title"><b>Phone</b></h4>
                <p>(555) 555-5555</p>
              </div>
              <div class="md-layout-item md-size-25">
                <h4 class="card-title"><b>Billing Address</b></h4>
                <p>505 Thornall St Suite 203 Edison, NJ 08837</p>
              </div>
            </div>
          </template>
        </table-card>
      </div>
    </div>

    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <table-card>
          <template slot="header">
            <div class="card-icon">
              <md-icon>dynamic_feed</md-icon>
            </div>
            <h4 class="title">Product Details</h4>
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
                    <md-table-cell md-label="Product Type">{{
                      item.productType
                    }}</md-table-cell>
                    <md-table-cell md-label="Industry">{{
                      item.industry
                    }}</md-table-cell>
                    <md-table-cell md-label="Market Area">{{
                      item.marketArea
                    }}</md-table-cell>
                    <md-table-cell md-label="Price">{{
                      item.price
                    }}</md-table-cell>
                  </md-table-row>
                </md-table>
                <br />
                <h4 class="title order-total text-right">
                  <b>Order Total: $1,544</b>
                </h4>
                <br />
              </div>
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
          productType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          price: '$299',
        },
        {
          productType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          price: '$299',
        },
        {
          productType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          price: '$299',
        },
        {
          productType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          price: '$299',
        },
        {
          productType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          price: '$299',
        },
        {
          productType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          price: '$299',
        },
        {
          productType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          price: '$299',
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
