<template>
    <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <div class="md-layout">
          <div class="md-layout-item">
            <nav aria-label="breadcrumb" role="navigation">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link :to="{ name: 'Home' }">
                    Home
                  </router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  New Report
                </li>
              </ol>
            </nav>
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-100 md-size-100">
                    <div class="md-layout">
                        <div class="md-layout-item">
                            <md-card class="welcome-card-wrap">
                                <div class="md-layout-item">
                                    <div class="md-card-content">
                                        <h4 class="title text-left">Choose a Report</h4>
                                    </div>
                                </div>
                                <div class="md-layout mt-4">
                                    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25" v-for="card in cards" :key="card.id ">
                                        <div class="md-card-header md-card-header-icon md-card-header-blue new-report-body">
                                            <div class="new-profile-image-container new-report-box">
                                                <img src="/img/image_placeholder.jpg">
                                                <h5 class=""> {{ card.title }} </h5>
                                                <div class="image-toolbar new-report-icons">
                                                    <div class="toolbar-left text-left">
                                                        <i class="md-icon md-icon-font md-theme-default">info</i>
                                                    </div>
                                                    <div class="toolbar-right text-right">
                                                        <i class="md-icon md-icon-font md-theme-default">star_border</i>
                                                    </div>
                                                </div>
                                            </div>
                                            <md-card-actions class="button-new-report">
                                                    <md-button class="md-button-content md-info button">
                                                        ADD INPUTS
                                                        <md-icon class="">add_to_queue</md-icon>
                                                    </md-button>
                                            </md-card-actions>
                                        </div> 
                                    </div>
                                </div>
                            </md-card>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileCard } from '@/components';

export default {
    components: {
   
  },
  data() {
    return {
        cards: [
            { id: 0, title: 'Financial Report' },
            { id: 1, title: 'Market Report' },
            { id: 2, title: 'Vestimate Report' },
            { id: 3, title: 'Company Report' },
        ]
    };
  },
  
};
</script>

<style lang="scss">


.new-report-body {
    position: relative;
    .button-new-report {
        display: none;
        position: absolute;
        top: 16%;
        border-top: none !important;
        justify-content: center;
        .md-ripple {
             padding: 5px 10px 5px 20px !important;
        }  
    }

    &:hover {
        .button-new-report {
            display: block !important;
        } 
    } 

    .new-report-box {
         position: relative;

         h5 {
             margin-top: 15px;
         }
        .new-report-icons {
            display: flex;
            justify-content: space-between;
            width: 100%;
            position: absolute;
            top: 0;
        }
    }
}


</style>