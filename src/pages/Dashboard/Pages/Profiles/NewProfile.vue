<template>
  <div class="content new-profile">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <div class="md-layout md-gutter md-alignment-center-center">
          <div
            class="
              md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50
              profile-left-sec
            "
          >
            <div>
              <h1 class="md-title profile-title">Profile Name</h1>
            </div>
            <div>
              <small
                >Select New Profile or New Report to begin your search
                process.</small
              >
            </div>
          </div>
          <div
            class="
              md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50
            "
          >
            <div class="md-layout">
              <div
                class="
                  md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50
                  fin-pro-card
                "
              >
                <profile-card class="toolbar-card">
                  <template slot="header">
                    <div class="toolbar-card-title">
                      <h5 class="title text-left">Firms Analyzed</h5>
                    </div>
                  </template>
                  <template slot="content">
                    <div class="info-wrap">N/A</div>
                  </template>
                </profile-card>
              </div>
              <div
                class="
                  md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50
                "
              >
                <profile-card class="toolbar-card">
                  <template slot="header">
                    <div class="toolbar-card-title">
                      <h5 class="title text-left">End-year Avg. $</h5>
                    </div>
                  </template>
                  <template slot="content">
                    <div class="info-wrap">N/A</div>
                  </template>
                </profile-card>
              </div>
              <div
                class="
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-50
                "
              >
                <template v-if="type === 'if'">
                  <router-link
                    :to="{ name: 'IFIntro', params: { id: 32523623 } }"
                  >
                    <md-button class="md-info md-block access-button"
                      >Access Now
                    </md-button>
                  </router-link>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <profile-steps />
      </div>

      <div
        class="
          md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100
          fin-tab-list
        "
      >
        <nav-tabs-card no-label md-elevation="0">
          <template slot="content">
            <md-tabs md-alignment="left" id="finantialProfileTabs">
              <industry-tab />
              <market-area-tab />
              <sales-class-tab />
              <related-products-tab />
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileCard, NavTabsCard } from "@/components";
import IndustryTab from "./_partials/IndustryTab";
import MarketAreaTab from "./_partials/MarketAreaTab";
import SalesClassTab from "./_partials/SalesClassTab";
import RelatedProductsTab from "./_partials/RelatedProductsTab";
import ProfileSteps from "./_partials/ProfileSteps.vue";

export default {
  components: {
    ProfileCard,
    NavTabsCard,
    IndustryTab,
    MarketAreaTab,
    SalesClassTab,
    RelatedProductsTab,
    ProfileSteps,
  },
  data() {
    return {
      type: "",
    };
  },
  mounted() {
    this.setProfileType();
  },
  methods: {
    setProfileType() {
      let id = this.$route.params.id;

      if (id === "industry-financial-profile") {
        this.type = "if";
      }
      if (id === "industry-market-profile") {
        this.type = "im";
      }
      if (id === "company-profile") {
        this.type = "c";
      }
    },
  },
};
</script>
<style lang="scss" >
.new-profile {
  margin-top: 20px;
}
.profile-left-sec {
  padding: 10px;
  padding-left: 30px !important;
}
@media only screen and (max-width: 600px) {
  .fin-pro-card {
    margin-bottom: 10px;
  }
  .profile-left-sec {
    margin-bottom: 10px;
  }
  .fin-tab-list {
    margin-top: 350px;
  }
  #finantialProfileTabs .md-tabs-navigation{
    padding-left: 15px;
  }
}
@media screen and (max-width: 1280px) and (min-width: 600px) {
  .fin-tab-list {
    margin-top: 150px;
  }
}
</style>
