<template>
  <div class="profile-steps">
    <div class="md-layout">
      <div
        class="
          md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100
          cus-step-wrap
        "
      >
        <div class="step-progress__wrapper">
          <!-- <div class="step-progress__wrapper-before"></div> -->
          <div class="step-progress__bar md-layout">
            <div
              class="
                step-progress__step step-progress__step--valid
                md-medium-size-33 md-layout-item md-xsmall-size-100
                custom-step-pro
              "
              @click="selectedTab($event)"
            >
              <span>1</span>
              <div class="step-progress__step-icon fa fa-check"></div>
              <div class="step-progress__step-label">
                <div class="arrow-up"></div>
                Industry
                <div class="step-progress__step-sub-label">
                  Select an industry
                </div>
              </div>
            </div>
            <div
              class="
                step-progress__step step-progress__step--valid
                md-medium-size-33 md-layout-item md-xsmall-size-100
                custom-step-pro
              "
              @click="selectedTab($event)"
            >
              <span>2</span>
              <div class="step-progress__step-icon fa fa-check"></div>
              <div class="step-progress__step-label">
                <div class="arrow-up"></div>
                Market Area
                <div class="step-progress__step-sub-label">
                  Select a market area
                </div>
              </div>
            </div>
            <div
              class="
                step-progress__step step-progress__step--valid
                md-medium-size-33 md-layout-item md-xsmall-size-100
                custom-step-pro
              "
              @click="selectedTab($event)"
            >
              <span>3</span>
              <div class="step-progress__step-icon fa fa-check"></div>
              <div class="step-progress__step-label">
                <div class="arrow-up"></div>
                Sales Class
                <div class="step-progress__step-sub-label">
                  <div class="progress-step-actions">
                    <md-icon class="action-icon">replay</md-icon>
                    <span class="action-text">Medium - $5m-$24.99m</span>
                    <md-icon class="action-icon">star_border</md-icon>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                step-progress__step step-progress__step--active
                md-medium-size-50 md-layout-item md-xsmall-size-100
                custom-step-pro
              "
            >
              <span>4</span>
              <div class="step-progress__step-icon fa fa-check"></div>
              <div class="step-progress__step-label">
                <div class="arrow-up"></div>
                <div style="display: inline-flex">
                  <span>Type</span>
                  <md-button
                    class="
                      classic-modal
                      md-icon-button
                      color-white
                      info-btn-custom
                    "
                    @click="classicModal = true"
                    :md-ripple="false"
                  >
                    <md-icon>report</md-icon>
                  </md-button>
                </div>
                <div class="step-progress__step-sub-label">
                  <div>
                    <md-radio v-model="radio" :value="false"
                      >Industry firms</md-radio
                    >
                  </div>
                  <div>
                    <md-radio v-model="radio" :value="true"
                      >Sole proprietorship</md-radio
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                step-progress__step step-progress__step--active
                md-medium-size-50 md-layout-item md-xsmall-size-100
                custom-step-pro
              "
            >
              <span>5</span>
              <div class="step-progress__step-icon fa fa-check"></div>
              <div class="step-progress__step-label">
                <div class="arrow-up"></div>
                Time Series
                <div class="step-progress__step-sub-label">
                  <div>
                    <md-radio v-model="radio" :value="false"
                      >3 year profile</md-radio
                    >
                  </div>
                  <div>
                    <md-radio v-model="radio" :value="true"
                      >5 year profile</md-radio
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="step-progress__wrapper-after"></div> -->
        </div>
      </div>
    </div>
    <modal v-if="classicModal" @close="classicModal = false">
      <template slot="header">
        <h4 class="modal-title">Industry Profile Version</h4>
        <md-button
          class="md-simple md-just-icon md-round modal-default-button"
          @click="classicModal = false"
        >
          <md-icon>clear</md-icon>
        </md-button>
      </template>

      <template slot="body">
        <p>
          This is where we will explain the difference between a regular IF
          profile and a SPIF profile.
        </p>
      </template>

      <template slot="footer">
        <md-button class="md-simple">Nice Button</md-button>
        <md-button class="md-danger md-simple" @click="classicModal = false"
          >Close</md-button
        >
      </template>
    </modal>
  </div>
</template>

<script>
import { Modal } from "@/components";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      radio: false,
      classicModal: false,
    };
  },
  methods: {
    switchView: function (type) {
      this.view = type;
    },
    selectedTab: function (e) {
      e.currentTarget.classList.remove("step-progress__step--valid");
      e.currentTarget.classList.add("step-progress__step--active");
      e.currentTarget.style.pointerEvents = "none";
      let elems = document.querySelectorAll('.md-tab-nav-button');

      [].forEach.call(elems, function(el) {
        el.classList.remove('md-active')
      })

      let currentTab = parseInt(e.currentTarget.firstElementChild.innerText);
      document.querySelectorAll('.md-tab-nav-button')[currentTab-1].classList.add('md-active');
      switch (currentTab) {
        case 1:
          document
            .querySelector(".md-tabs-container")
            .setAttribute("style", "transform: translate3d(0%, 0px, 0px)");
          break;
        case 2:
          document
            .querySelector(".md-tabs-container")
            .setAttribute("style", "transform: translate3d(-100%, 0px, 0px)");
          break;
        case 3:
          document
            .querySelector(".md-tabs-container")
            .setAttribute("style", "transform: translate3d(-200%, 0px, 0px)");
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.info-btn-custom {
  background-color: white !important;
  &:hover {
    background-color: white !important;
    box-shadow: none;
  }
}
.step-progress__step:hover {
  cursor: pointer;
}
.action-text {
  opacity: 1 !important;
  transform: unset !important;
  font-size: 14px !important;
}
.custom-step-pro::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2px;
  width: 96%;
  background-color: grey;
  z-index: -1;
}
.custom-step-pro:last-child::before {
  content: none;
}
@media screen and (max-width: 1280px) and (min-width: 600px) {
  .custom-step-pro:nth-child(4),
  .custom-step-pro:nth-child(5) {
    margin-top: 130px;
  }
  .custom-step-pro:nth-child(3)::before {
    content: none;
  }
  .cus-step-wrap {
    padding-top: 20px;
  }
  .step-progress__step:after {
    width: 30px !important;
    height: 30px !important;
  }
  .step-progress__step span {
    font-size: 18px;
  }
  .step-progress__step-icon {
    font-size: 12px !important;
  }
}
@media only screen and (max-width: 600px) {
  .custom-step-pro::before {
    left: -6%;
    top: 369%;
    width: 27%;
    transform: rotate(90deg);
  }
  .custom-step-pro {
    margin-bottom: 80px;
  }
  .step-progress__step-label .arrow-up {
    display: none;
  }
  .step-progress__step:after {
    left: 8%;
    top: 150%;
  }
  .step-progress__step-icon {
    left: 8%;
    top: 150%;
  }
  .step-progress__step-label {
    top: 0;
    left: 63%;
  }
  .custom-step-pro:nth-child(4),
  .custom-step-pro:nth-child(5) {
    margin-top: unset;
  }
  .step-progress__step:after {
    width: 30px !important;
    height: 30px !important;
  }
  .step-progress__step span {
    font-size: 18px;
  }
  .step-progress__step-icon {
    font-size: 12px !important;
  }
  .cus-step-wrap {
    padding-top: 20px;
  }
}
</style>
