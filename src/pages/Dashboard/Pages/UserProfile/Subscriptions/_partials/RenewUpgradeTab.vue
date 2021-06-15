<template>
  <md-tab id="tab-renew-upgrade" md-label="Renew Upgrade" md-icon="desktop_mac">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33"
      >
        <pricing-card-with-list
          icon-color="icon-success"
          class="pricing-card-with-list text-dark"
        >
          <h3 slot="category" class="category text-left">Starter</h3>
          <div slot="description" class="card-description">
            <div class="pricing-list-wrapper pricing-list-wrapper-1">
              <h5 class="pricing-list-title">Profiles</h5>
              <ul class="pricing-list">
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Industry Finanical Profile
                </li>
              </ul>
            </div>
            <div class="pricing-list-wrapper pricing-list-wrapper-2">
              <h5 class="pricing-list-title">Reports</h5>
              <ul class="pricing-list">
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Finanical Report
                </li>
              </ul>
            </div>
          </div>
          <div slot="footer">
            <div class="footer-note">
              Your current plan expires in 57 days.
            </div>
            <md-button class="md-info md-block">Choose Plan</md-button>
          </div>
        </pricing-card-with-list>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33"
      >
        <pricing-card-with-list
          icon-color="icon-success"
          background-color="#0F66C5"
          class="pricing-card-with-list text-light"
        >
          <h3 slot="category" class="category text-left">Pro</h3>
          <div slot="description" class="card-description">
            <div class="pricing-list-wrapper pricing-list-wrapper-1">
              <h5 class="pricing-list-title">Profiles</h5>
              <ul class="pricing-list">
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Industry Finanical Profile
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Industry Market Profile
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Sales Per Square Foot
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Market Demographic Profile
                </li>
              </ul>
            </div>
            <div class="pricing-list-wrapper pricing-list-wrapper-2">
              <h5 class="pricing-list-title">Reports</h5>
              <ul class="pricing-list">
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Finanical Report
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Market Report
                </li>
              </ul>
            </div>
          </div>
          <div slot="footer">
            <div class="footer-note"></div>
            <md-button class="md-info md-block">Choose Plan</md-button>
          </div>
        </pricing-card-with-list>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33"
      >
        <pricing-card-with-list
          icon-color="icon-success"
          background-color="#0E3D6E"
          class="pricing-card-with-list text-light"
        >
          <h3 slot="category" class="category text-left">Premium</h3>
          <div slot="description" class="card-description">
            <div class="pricing-list-wrapper pricing-list-wrapper-1">
              <h5 class="pricing-list-title">Profiles</h5>
              <ul class="pricing-list">
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Industry Finanical Profile
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Industry Market Profile
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Sales Per Square Foot
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Industry Vestimate Profile
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Market Demographic Profile
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Company Profile
                </li>
              </ul>
            </div>
            <div class="pricing-list-wrapper pricing-list-wrapper-2">
              <h5 class="pricing-list-title">Reports</h5>
              <ul class="pricing-list">
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Finanical Report
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Market Report
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Vestimate Report
                </li>
                <li class="pricing-list-item">
                  <md-icon>check_circle</md-icon> Company Report
                </li>
              </ul>
            </div>
          </div>
          <div slot="footer">
            <div class="footer-note"></div>
            <md-button class="md-info md-block">Choose Plan</md-button>
          </div>
        </pricing-card-with-list>
      </div>
    </div>
  </md-tab>
</template>
<script>
import { PricingCardWithList } from '@/components';

export default {
  name: 'account-activity-tab',
  props: {},
  components: {
    PricingCardWithList,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>
