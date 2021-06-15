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
            <li class="breadcrumb-item active" aria-current="page">
              My Profiles
            </li>
          </ol>
        </nav>
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <h3 class="md-title">My Profiles</h3>
            </div>
            <div class="md-toolbar-section-end">
              <div class="links" style="max-width:nullpx;">
                <div class="search-box">
                  <input
                    aria-label="Search"
                    autocomplete="off"
                    spellcheck="false"
                    value=""
                    class=""
                    placeholder="Search profiles..."
                  />
                </div>
              </div>
              <div class="datepicker-box">
                <datetime
                  format="MM/DD/YYYY"
                  width="300px"
                  v-model="date"
                ></datetime>
              </div>
              <button
                type="button"
                class="md-button md-just-icon md-simple md-toolbar-toggle md-theme-default"
              >
                <div class="md-ripple">
                  <div class="md-button-content">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </div>
                </div>
              </button>
              <div class="md-collapse">
                <ul class="md-list md-theme-default">
                  <li href="#" class="md-list-item">
                    <a
                      mdripple="true"
                      href="#"
                      class="md-list-item-link md-list-item-container md-button-clean"
                      @click="switchView('card')"
                      ><div class="md-list-item-content md-ripple">
                        <i class="material-icons">dashboard</i>
                        <p class="hidden-lg hidden-md">Dashboard</p>
                      </div></a
                    >
                  </li>
                  <li href="#" class="md-list-item">
                    <a
                      mdripple="true"
                      href="#"
                      class="md-list-item-link md-list-item-container md-button-clean"
                      @click="switchView('list')"
                      ><div class="md-list-item-content md-ripple">
                        <i class="material-icons">reorder</i>
                      </div></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <zoom-center-transition :duration="200" mode="out-in">
      <div v-if="view === 'card'" class="md-layout">
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
        >
          <profile-card header-color="blue">
            <template slot="header">
              <div class="card-icon"><md-icon>article</md-icon></div>
              <span class="category">Industry Finanical Profile</span>
              <span class="details-icon"
                ><md-icon>
                  more_horiz
                </md-icon></span
              >
            </template>
            <template slot="content">
              <p>238220</p>
              <p>Plumbing, Heating, and Air-Conditioning Contractor</p>
              <p>Birmingham, Al</p>
              <p>Medium - $5m-$24.99m sales class</p>
              <p>Release Date: Dec 2020</p>
            </template>
            <template slot="footer">
              <div class="stats">
                <span class="photo"
                  ><img class="user-avatar" src="https://i.pravatar.cc/300"
                /></span>
                <span class="date">Created Jan 17, 2021</span>
                <span class="update-available">
                  <md-icon>new_releases</md-icon>
                  Update
                </span>
              </div>
            </template>
          </profile-card>
        </div>
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
        >
          <profile-card header-color="blue">
            <template slot="header">
              <div class="card-icon"><md-icon>article</md-icon></div>
              <span class="category">Industry Finanical Profile</span>
              <span class="details-icon"
                ><md-icon>
                  more_horiz
                </md-icon></span
              >
            </template>
            <template slot="content">
              <p>238220</p>
              <p>Plumbing, Heating, and Air-Conditioning Contractor</p>
              <p>Birmingham, Al</p>
              <p>Medium - $5m-$24.99m sales class</p>
              <p>Release Date: Dec 2020</p>
            </template>
            <template slot="footer">
              <div class="stats">
                <span class="photo"
                  ><img class="user-avatar" src="https://i.pravatar.cc/300"
                /></span>
                <span class="date">Created Jan 17, 2021</span>
              </div>
            </template>
          </profile-card>
        </div>
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
        >
          <profile-card header-color="blue">
            <template slot="header">
              <div class="card-icon"><md-icon>article</md-icon></div>
              <span class="category">Industry Finanical Profile</span>
              <span class="details-icon"
                ><md-icon>
                  more_horiz
                </md-icon></span
              >
            </template>
            <template slot="content">
              <p>238220</p>
              <p>Plumbing, Heating, and Air-Conditioning Contractor</p>
              <p>Birmingham, Al</p>
              <p>Medium - $5m-$24.99m sales class</p>
              <p>Release Date: Dec 2020</p>
            </template>
            <template slot="footer">
              <div class="stats">
                <span class="photo"
                  ><img class="user-avatar" src="https://i.pravatar.cc/300"
                /></span>
                <span class="date">Created Jan 17, 2021</span>
                <span class="update-available">
                  <md-icon>new_releases</md-icon>
                  Update
                </span>
              </div>
            </template>
          </profile-card>
        </div>
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
        >
          <profile-card header-color="blue">
            <template slot="header">
              <div class="card-icon"><md-icon>article</md-icon></div>
              <span class="category">Industry Finanical Profile</span>
              <span class="details-icon"
                ><md-icon>
                  more_horiz
                </md-icon></span
              >
            </template>
            <template slot="content">
              <p>238220</p>
              <p>Plumbing, Heating, and Air-Conditioning Contractor</p>
              <p>Birmingham, Al</p>
              <p>Medium - $5m-$24.99m sales class</p>
              <p>Release Date: Dec 2020</p>
            </template>
            <template slot="footer">
              <div class="stats">
                <span class="photo"
                  ><img class="user-avatar" src="https://i.pravatar.cc/300"
                /></span>
                <span class="date">Created Jan 17, 2021</span>
              </div>
            </template>
          </profile-card>
        </div>
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
        >
          <profile-card header-color="blue">
            <template slot="header">
              <div class="card-icon"><md-icon>article</md-icon></div>
              <span class="category">Industry Finanical Profile</span>
              <span class="details-icon"
                ><md-icon>
                  more_horiz
                </md-icon></span
              >
            </template>
            <template slot="content">
              <p>238220</p>
              <p>Plumbing, Heating, and Air-Conditioning Contractor</p>
              <p>Birmingham, Al</p>
              <p>Medium - $5m-$24.99m sales class</p>
              <p>Release Date: Dec 2020</p>
            </template>
            <template slot="footer">
              <div class="stats">
                <span class="photo"
                  ><img class="user-avatar" src="https://i.pravatar.cc/300"
                /></span>
                <span class="date">Created Jan 17, 2021</span>
                <span class="update-available">
                  <md-icon>new_releases</md-icon>
                  Update
                </span>
              </div>
            </template>
          </profile-card>
        </div>
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
        >
          <profile-card header-color="blue">
            <template slot="header">
              <div class="card-icon"><md-icon>article</md-icon></div>
              <span class="category">Industry Finanical Profile</span>
              <span class="details-icon"
                ><md-icon>
                  more_horiz
                </md-icon></span
              >
            </template>
            <template slot="content">
              <p>238220</p>
              <p>Plumbing, Heating, and Air-Conditioning Contractor</p>
              <p>Birmingham, Al</p>
              <p>Medium - $5m-$24.99m sales class</p>
              <p>Release Date: Dec 2020</p>
            </template>
            <template slot="footer">
              <div class="stats">
                <span class="photo"
                  ><img class="user-avatar" src="https://i.pravatar.cc/300"
                /></span>
                <span class="date">Created Jan 17, 2021</span>
              </div>
            </template>
          </profile-card>
        </div>
      </div>
    </zoom-center-transition>
    <zoom-center-transition :duration="200" mode="out-in">
      <div v-if="view === 'list'" class="md-layout">
        <div class="md-layout-item md-size-100">
          <table-card>
            <template slot="header"> </template>

            <template slot="content">
              <div class="md-layout">
                <div class="md-layout-item md-size-100">
                  <md-table v-model="tableData" table-header-color="blue">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="">
                        <md-icon class="view-profile-icon">login</md-icon>
                      </md-table-cell>
                      <md-table-cell md-label="Date Created">{{
                        item.dateCreated
                      }}</md-table-cell>
                      <md-table-cell md-label="Profile Type">{{
                        item.profileType
                      }}</md-table-cell>
                      <md-table-cell md-label="Industry">{{
                        item.industry
                      }}</md-table-cell>
                      <md-table-cell md-label="Market Area">{{
                        item.marketArea
                      }}</md-table-cell>
                      <md-table-cell class="text-right" md-label="Release"
                        >{{ item.release }}
                        <md-icon class="new-release-icon"
                          >new_releases</md-icon
                        ></md-table-cell
                      >
                    </md-table-row>
                  </md-table>
                </div>
              </div>
            </template>
          </table-card>
        </div>
      </div>
    </zoom-center-transition>

    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100"
      >
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <div class="pagin-page-info">
                Showing 1–10 of 57
              </div>
            </div>
            <div class="md-toolbar-section-end">
              <pagination
                class="pagination-no-border pagination-info"
                v-model="pagination.currentPage"
                :per-page="pagination.perPage"
                :total="pagination.total"
              >
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileCard, Pagination, TableCard } from '@/components';
import datetime from 'vuejs-datetimepicker';

export default {
  components: {
    ProfileCard,
    Pagination,
    TableCard,
    datetime,
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
