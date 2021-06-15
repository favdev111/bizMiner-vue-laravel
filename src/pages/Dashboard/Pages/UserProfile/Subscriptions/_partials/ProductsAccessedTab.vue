<template>
  <md-tab
    id="tab-products-accessed"
    md-label="Products Accessed"
    md-icon="pie_chart_outline"
  >
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-25 md-xsmall-size-100 md-size-25"
      >
        <chart-card
          header-animation="false"
          :chart-data="productsAccessed.data"
          :chart-options="productsAccessed.options"
          chart-type="Pie"
          header-icon
          chart-inside-content
          chart-primary-number="57"
          chart-primary-color="#3b7ef1"
        >
          <template slot="footer">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <h6 class="category text-center">
                  <b>Products accessed</b>
                </h6>
              </div>
              <div class="md-layout-item text-center">
                <b><span style="color: #3b7ef1">57</span>/100</b>
              </div>
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-25 md-xsmall-size-100 md-size-25"
      >
        <chart-card
          header-animation="false"
          :chart-data="retailValue.data"
          :chart-options="retailValue.options"
          chart-type="Pie"
          header-icon
          chart-inside-content
          chart-primary-number="$5.7k"
          chart-primary-color="#408c25"
        >
          <template slot="footer">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <h6 class="category text-center">
                  <b>Retail value</b>
                </h6>
              </div>
              <div class="md-layout-item text-center">
                <b><span style="color: #408c25">90</span>/10</b>
              </div>
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-25 md-xsmall-size-100 md-size-25"
      >
        <chart-card
          header-animation="false"
          :chart-data="daysLeft.data"
          :chart-options="daysLeft.options"
          chart-type="Pie"
          header-icon
          chart-inside-content
          chart-primary-number="284"
          chart-primary-color="#199696"
        >
          <template slot="footer">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <h6 class="category text-center">
                  <b>Days left</b>
                </h6>
              </div>
              <div class="md-layout-item text-center">
                <b><span style="color: #199696">260</span>/365</b>
              </div>
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-25 md-xsmall-size-100 md-size-25"
      >
        <chart-card
          header-animation="false"
          :chart-data="teamMembers.data"
          :chart-options="teamMembers.options"
          chart-type="Pie"
          header-icon
          chart-inside-content
          chart-primary-number="7"
          chart-primary-color="#fc1c4e"
        >
          <template slot="footer">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <h6 class="category text-center">
                  <b>Team members</b>
                </h6>
              </div>
              <div class="md-layout-item text-center">
                <b><span style="color: #fc1c4e">7</span>/20</b>
              </div>
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100 card-buttons"
      >
        <div class="button-container">
          <md-button class="md-primary md-block" :href="'/'" target="_blank"
            >UPGRADE ACCOUNT
          </md-button>
        </div>
      </div>
    </div>
  </md-tab>
</template>
<script>
import { ChartCard } from '@/components';

export default {
  name: 'renew-upgrade-tab',
  props: {},
  components: {
    ChartCard,
  },
  data() {
    return {
      productsAccessed: {
        data: {
          labels: ['57%', '43%'],
          series: [
            { value: 57, className: 'secondary' },
            { value: 43, className: 'secondary-light' },
          ],
        },
        options: {
          height: '230px',
          donut: true,
          donutWidth: 10,
          startAngle: 0,
          total: 100,
          showLabel: false,
        },
      },
      retailValue: {
        data: {
          labels: ['90', '10'],
          series: [
            { value: 90, className: 'green' },
            { value: 10, className: 'green-light' },
          ],
        },
        options: {
          height: '230px',
          donut: true,
          donutWidth: 10,
          startAngle: 0,
          total: 100,
          showLabel: false,
        },
      },
      daysLeft: {
        data: {
          labels: ['265', '100'],
          series: [
            { value: 265, className: 'aqua' },
            { value: 100, className: 'aqua-light' },
          ],
        },
        options: {
          height: '230px',
          donut: true,
          donutWidth: 10,
          startAngle: 0,
          total: 365,
          showLabel: false,
        },
      },
      teamMembers: {
        data: {
          labels: ['7', '13'],
          series: [
            { value: 7, className: 'red' },
            { value: 13, className: 'red-light' },
          ],
        },
        options: {
          height: '230px',
          donut: true,
          donutWidth: 10,
          startAngle: 0,
          total: 20,
          showLabel: false,
        },
      },
    };
  },
  methods: {},
};
</script>
<style></style>
