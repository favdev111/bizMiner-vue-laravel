<template>
  <md-tab id="tab-related-products" md-label="Related Products" md-icon="class">
    <div>
      <h4>Enhance your business intelligence with these products:</h4>
    </div>
    <div>
      <small
        >We recommend the following products in the same (or similar) industry
        and market area.
      </small>
    </div>
    <ul class="related-product-list">
      <li class="list-item">
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-10 md-xsmall-size-100 md-size-10 checkbox-container"
          >
            <md-checkbox v-model="product1"></md-checkbox>
          </div>
          <div
            class="md-layout-item md-medium-size-90 md-xsmall-size-100 md-size-90"
          >
            <profile-card header-color="blue">
              <template slot="header">
                <div class="card-icon"><md-icon>article</md-icon></div>
                <span class="category"
                  >Industry Market Profile<md-icon class="info-icon ml-5"
                    >info_outline</md-icon
                  ></span
                >
                <span class="details-icon mr-10"
                  ><md-button class="md-info" :href="'/'" target="_blank"
                    >Sample
                  </md-button></span
                >
              </template>
              <template slot="content">
                <p>
                  [238220] Plumbing, Heating, and Air-Conditioning Contractors
                  Birminham, AL
                </p>
              </template>
              <template slot="footer">
                <div class="description">
                  <i
                    ><b
                      >Best for regional, small business and entreprenuerial
                      industry trend analysis.</b
                    >
                    Three-year industry market research trends plus update month
                    data. Select any industry and national or any local US
                    market area. Mapped intelligence: industry volume, average
                    sales and rank.
                  </i>
                </div>
              </template>
            </profile-card>
          </div>
        </div>
      </li>
      <li class="list-item locked">
        <div class="locked-overlay">
          <div class="cta-button-container">
            <md-button class="md-info" :href="'/'" target="_blank"
              >Upgrade to Unlock
            </md-button>
          </div>
        </div>
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-10 md-xsmall-size-100 md-size-10 checkbox-container"
          >
            <md-checkbox v-model="product1"></md-checkbox>
          </div>
          <div
            class="md-layout-item md-medium-size-90 md-xsmall-size-100 md-size-90"
          >
            <profile-card header-color="blue">
              <template slot="header">
                <div class="card-icon"><md-icon>article</md-icon></div>
                <span class="category"
                  >Industry Market Profile<md-icon class="info-icon ml-5"
                    >info_outline</md-icon
                  ></span
                >
                <span class="details-icon mr-10"
                  ><md-button class="md-info" :href="'/'" target="_blank"
                    >Sample
                  </md-button></span
                >
              </template>
              <template slot="content">
                <p>
                  [238220] Plumbing, Heating, and Air-Conditioning Contractors
                  Birminham, AL
                </p>
              </template>
              <template slot="footer">
                <div class="description">
                  <i
                    ><b
                      >Best for regional, small business and entreprenuerial
                      industry trend analysis.</b
                    >
                    Three-year industry market research trends plus update month
                    data. Select any industry and national or any local US
                    market area. Mapped intelligence: industry volume, average
                    sales and rank.
                  </i>
                </div>
              </template>
            </profile-card>
          </div>
        </div>
      </li>
      <li class="list-item">
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-10 md-xsmall-size-100 md-size-10 checkbox-container"
          >
            <md-checkbox v-model="product1"></md-checkbox>
          </div>
          <div
            class="md-layout-item md-medium-size-90 md-xsmall-size-100 md-size-90"
          >
            <profile-card header-color="blue">
              <template slot="header">
                <div class="card-icon"><md-icon>article</md-icon></div>
                <span class="category"
                  >Prospect List<md-icon class="info-icon ml-5"
                    >info_outline</md-icon
                  ></span
                >
                <span class="details-icon mr-10"
                  ><md-button class="md-info" :href="'/'" target="_blank"
                    >Sample
                  </md-button></span
                >
              </template>
              <template slot="content">
                <div>
                  <p>
                    [238220] Plumbing, Heating, and Air-Conditioning Contractors
                    Birminham, AL
                  </p>
                </div>
                <div class="md-layout">
                  <div
                    class="md-layout-item md-medium-size-25 md-xsmall-size-100 md-size-25"
                  >
                    <profile-card class="toolbar-card">
                      <template slot="header">
                        <div class="toolbar-card-title">
                          <h5 class="title text-left">Prospects</h5>
                        </div>
                      </template>
                      <template slot="content">
                        <div class="info-wrap">
                          629
                        </div>
                      </template>
                    </profile-card>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-25 md-xsmall-size-100 md-size-25"
                  >
                    <md-field>
                      <label>Contact Details</label>
                      <md-input type="text"></md-input>
                    </md-field>
                    <div class="product-value">$155.68</div>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-25 md-xsmall-size-100 md-size-25"
                  >
                    <md-field>
                      <label>Sales Range From:</label>
                      <md-input type="text"></md-input>
                    </md-field>
                    <md-field>
                      <label>Value Range From:</label>
                      <md-input type="text"></md-input>
                    </md-field>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-25 md-xsmall-size-100 md-size-25"
                  >
                    <md-field>
                      <label>Sales Range To:</label>
                      <md-input type="text"></md-input>
                    </md-field>
                    <md-field>
                      <label>Value Range To:</label>
                      <md-input type="text"></md-input>
                    </md-field>
                  </div>
                </div>
              </template>
              <template slot="footer">
                <div class="description">
                  <i
                    ><b
                      >Includes business contact information, sales, employment
                      and Vestimates. Filter by industry, market area, sales and
                      content availability. From $0.16/record
                    </b>
                  </i>
                </div>
              </template>
            </profile-card>
          </div>
        </div>
      </li>
      <li class="list-item">
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-10 md-xsmall-size-100 md-size-10 checkbox-container"
          >
            <md-checkbox v-model="product1"></md-checkbox>
          </div>
          <div
            class="md-layout-item md-medium-size-90 md-xsmall-size-100 md-size-90"
          >
            <profile-card header-color="blue">
              <template slot="header">
                <div class="card-icon"><md-icon>article</md-icon></div>
                <span class="category"
                  >Company Insight Profile<md-icon class="info-icon ml-5"
                    >info_outline</md-icon
                  ></span
                >
                <span class="details-icon mr-10"
                  ><md-button class="md-info" :href="'/'" target="_blank"
                    >Sample
                  </md-button></span
                >
              </template>
              <template slot="content">
                <router-link :to="{ name: 'Search' }">
                  <h4>RJ Mechanical Inc</h4>
                </router-link>
                <p>
                  Industry: [238220] Plumbing, Heating, and Air-Conditioning
                  Contractors Zip: 35203
                </p>
              </template>
              <template slot="footer">
                <div class="description">
                  <i
                    ><b
                      >Everything you need to start the client conversation:
                    </b>
                    Company-specific market, financial and business value
                    insights for millions of business operations. Prep Sheet PDF
                    format.
                  </i>
                </div>
              </template>
            </profile-card>
          </div>
        </div>
      </li>
    </ul>
  </md-tab>
</template>

<script>
import { ProfileCard } from '@/components';

export default {
  name: 'related-products-tab',
  props: {},
  components: { ProfileCard },
  data() {
    return {
      selected: [],
      product1: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
