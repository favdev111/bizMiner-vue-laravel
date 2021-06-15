<template>
  <div class="content new-profiles">
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
              <router-link :to="{ name: 'Search' }">
                Search
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Products
            </li>
          </ol>
        </nav>
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <h3 class="md-title">New Profile</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <profile-card header-color="blue">
          <template slot="header">
            <div class="card-icon"><md-icon>work</md-icon></div>
            <span class="category new-profile-card-title">Industry</span>
            <div class="new-profile-image-container">
              <img src="/img/image_placeholder.jpg" />
              <div class="image-toolbar">
                <div class="toolbar-left text-left">
                  <md-icon>info</md-icon>
                </div>
                <div class="toolbar-right text-right">
                  <md-icon>star_border</md-icon>
                </div>
              </div>
            </div>
          </template>
          <template slot="content">
            <div class="info-wrap">
              <h5>Industry Financial Profile</h5>
              <p><b>Now includes:</b></p>
              <ul>
                <li>US and Local</li>
                <li>Sole Proprietorship</li>
                <li>Valuation Multiples</li>
              </ul>
            </div>
            <router-link
              :to="{
                name: 'NewProfile',
                params: { id: 'industry-financial-profile' },
              }"
            >
              <md-button class="md-info md-block">Find Profiles</md-button>
            </router-link>
          </template>
        </profile-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <profile-card header-color="blue">
          <template slot="header">
            <div class="card-icon"><md-icon>work</md-icon></div>
            <span class="category new-profile-card-title">Industry</span>
            <div class="new-profile-image-container">
              <img src="/img/image_placeholder.jpg" />
              <div class="image-toolbar">
                <div class="toolbar-left text-left">
                  <md-icon>info</md-icon>
                </div>
                <div class="toolbar-right text-right">
                  <md-icon>star_border</md-icon>
                </div>
              </div>
            </div>
          </template>
          <template slot="content">
            <div class="info-wrap">
              <h5>Sales Per Square Foot</h5>
            </div>
            <router-link
              :to="{
                name: 'NewProfile',
                params: { id: 'sales-per-square-foot' },
              }"
            >
              <md-button class="md-info md-block">Add to Cart</md-button>
            </router-link>
          </template>
        </profile-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <profile-card header-color="blue">
          <template slot="header">
            <div class="card-icon"><md-icon>map</md-icon></div>
            <span class="category new-profile-card-title">Market</span>
            <div class="new-profile-image-container">
              <img src="/img/image_placeholder.jpg" />
              <div class="image-toolbar">
                <div class="toolbar-left text-left">
                  <md-icon>info</md-icon>
                </div>
                <div class="toolbar-right text-right">
                  <md-icon>star_border</md-icon>
                </div>
              </div>
            </div>
          </template>
          <template slot="content">
            <div class="info-wrap">
              <h5>Industry Market Profile</h5>
              <p><b>Now includes:</b></p>
              <ul>
                <li>Competitive Market Narratives</li>
                <li>Vestimates</li>
                <li>Demographics</li>
              </ul>
            </div>
            <router-link
              :to="{
                name: 'NewProfile',
                params: { id: 'industry-market-profile' },
              }"
            >
              <md-button class="md-info md-block">Find Profiles</md-button>
            </router-link>
          </template>
        </profile-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <profile-card header-color="blue">
          <template slot="header">
            <div class="card-icon"><md-icon>business</md-icon></div>
            <span class="category new-profile-card-title">Company</span>
            <div class="new-profile-image-container">
              <img src="/img/image_placeholder.jpg" />
              <div class="image-toolbar">
                <div class="toolbar-left text-left">
                  <md-icon>info</md-icon>
                </div>
                <div class="toolbar-right text-right">
                  <md-icon>star_border</md-icon>
                </div>
              </div>
            </div>
          </template>
          <template slot="content">
            <div class="info-wrap">
              <h5>Company Profiles</h5>
              <p><b>Now includes:</b></p>
              <ul>
                <li>Prospect Lists</li>
                <li>Company Insights</li>
              </ul>
            </div>
            <router-link
              :to="{
                name: 'NewProfile',
                params: { id: 'company-profiles' },
              }"
            >
              <md-button class="md-info md-block">Find Profiles</md-button>
            </router-link>
          </template>
        </profile-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileCard } from '@/components';

export default {
  components: {
    ProfileCard,
  },
  data() {
    return {
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 200,
      },
      view: 'card',
      date: '11/03/2022',
      tableData: [
        {
          dateCreated: '01/25/1996',
          profileType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          release: 'Dec 2020',
        },
        {
          dateCreated: '01/25/1996',
          profileType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          release: 'Dec 2020',
        },
        {
          dateCreated: '01/25/1996',
          profileType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          release: 'Dec 2020',
        },
        {
          dateCreated: '01/25/1996',
          profileType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          release: 'Dec 2020',
        },
        {
          dateCreated: '01/25/1996',
          profileType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          release: 'Dec 2020',
        },
        {
          dateCreated: '01/25/1996',
          profileType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          release: 'Dec 2020',
        },
        {
          dateCreated: '01/25/1996',
          profileType: 'Industry Finanical Profile',
          industry:
            '[238220] Plumbing, Heating, and Air-Conditioning Contractors',
          marketArea: 'Riverside County, CA',
          release: 'Dec 2020',
        },
      ],
    };
  },
  methods: {
    switchView: function(type) {
      this.view = type;
    },
  },
};
</script>
<style lang="scss"></style>
