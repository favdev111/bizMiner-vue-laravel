<template>
  <profile-card header-color="blue" class="map-sidebar">
    <template slot="header">
      <div class="card-icon"><md-icon>location_on</md-icon></div>
    </template>
    <template slot="content">
      <div class="info-wrap">
        <h5 class="sidebar-title">
          Map Center Point
        </h5>
        <label class="sidebar-title-label">(Optional)</label>
      </div>
      <md-field>
        <label>Street Address</label>
        <md-input v-model="streetAddress" type="text"></md-input>
      </md-field>
      <md-field>
        <label>ZIP Code</label>
        <md-input v-model="zipCode" type="text"></md-input>
      </md-field>
    </template>
    <template slot="footer">
      <md-button
        class="md-info md-block access-button btn-sm"
        :href="'/'"
        target="_blank"
        >Access Now
      </md-button>
    </template>
  </profile-card>
</template>

<script>
import { ProfileCard } from '@/components';

export default {
  name: 'sidebar-map',
  props: {},
  components: { ProfileCard },
  data() {
    return {
      streetAddress: '',
      zipCode: '',
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
