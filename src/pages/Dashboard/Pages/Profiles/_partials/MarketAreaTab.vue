<template>
  <md-tab id="tab-market-area" md-label="Market Area" md-icon="map">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-70"
      >
        <collapse
          :collapse="['All US (155,921 operations)']"
          icon="keyboard_arrow_down"
          color-collapse="info"
          :active="true"
        >
          <template slot="md-collapse-pane-1">
            <collapse
              :collapse="[
                'Alabama, AL (2,416 operations)',
                'Alaska, AK (372 operations)',
                'Arizona, AZ (2,845 operations)',
                'California, CA (18,584 operations)',
              ]"
              icon="keyboard_arrow_down"
              color-collapse="info"
            >
              <template slot="md-collapse-pane-1">
                <h5>Metro Areas</h5>
                <ul class="tad-data-list">
                  <li class="list-item">Chico, CA (131 operations)</li>
                  <li class="list-item">Clearlake, CA (45 operations)</li>
                  <li class="list-item">Crescent City, CA (7 operations)</li>
                  <li class="list-item">El Centro, CA (43 operations)</li>
                  <li class="list-item">Eureka, CA (44 operations)</li>
                </ul>
              </template>
              <template slot="md-collapse-pane-2">
                <h5>Metro Areas</h5>
                <ul class="tad-data-list">
                  <li class="list-item">Chico, CA (131 operations)</li>
                  <li class="list-item">Clearlake, CA (45 operations)</li>
                  <li class="list-item">Crescent City, CA (7 operations)</li>
                  <li class="list-item">El Centro, CA (43 operations)</li>
                  <li class="list-item">Eureka, CA (44 operations)</li>
                </ul>
              </template>
              <template slot="md-collapse-pane-3">
                <h5>Metro Areas</h5>
                <ul class="tad-data-list">
                  <li class="list-item">Chico, CA (131 operations)</li>
                  <li class="list-item">Clearlake, CA (45 operations)</li>
                  <li class="list-item">Crescent City, CA (7 operations)</li>
                  <li class="list-item">El Centro, CA (43 operations)</li>
                  <li class="list-item">Eureka, CA (44 operations)</li>
                </ul>
              </template>
              <template slot="md-collapse-pane-4">
                <h5>Metro Areas</h5>
                <ul class="tad-data-list">
                  <li class="list-item">Chico, CA (131 operations)</li>
                  <li class="list-item">Clearlake, CA (45 operations)</li>
                  <li class="list-item">Crescent City, CA (7 operations)</li>
                  <li class="list-item">El Centro, CA (43 operations)</li>
                  <li class="list-item">Eureka, CA (44 operations)</li>
                </ul>
              </template>
            </collapse>
          </template>
        </collapse>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-30"
      >
        <sidebar-map />
        <sidebar-search title="Favorite Market Areas" />
      </div>
    </div>
  </md-tab>
</template>

<script>
import { Collapse } from '@/components';
import SidebarMap from './../_partials/SidebarMap';
import SidebarSearch from './../_partials/SidebarSearch';

export default {
  name: 'market-area-tab',
  props: {},
  components: {
    Collapse,
    SidebarMap,
    SidebarSearch,
  },
  data() {
    return {
      selected: [],
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
