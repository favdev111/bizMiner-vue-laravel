<template>
  <profile-card header-color="blue" class="search-sidebar">
    <template slot="header">
      <div class="card-icon"><md-icon>settings</md-icon></div>
    </template>
    <template slot="content">
      <div class="info-wrap">
        <md-field>
          <label>Keyword Search</label>
          <md-input v-model="search" type="text"></md-input>
          <md-icon>search</md-icon>
        </md-field>
        <h5><md-icon class="favorites-icon mr-5">star</md-icon>{{ title }}</h5>
        <ul class="favorite-list">
          <li class="favorite-list-item">
            <div class="list-item-head">
              <span class="icon mr-5">
                <md-icon class="add-item">playlist_add</md-icon>
              </span>
              <span class="title">Competitive Market Narratives</span>
              <span class="actions ml-5"
                ><md-icon class="delete-item">delete</md-icon></span
              >
            </div>
            <div class="list-item-body">
              New York, NY
            </div>
          </li>
          <li class="favorite-list-item">
            <div class="list-item-head">
              <span class="icon mr-5">
                <md-icon class="add-item">playlist_add</md-icon>
              </span>
              <span class="title">Competitive Market Narratives</span>
              <span class="actions ml-5"
                ><md-icon class="delete-item">delete</md-icon></span
              >
            </div>
            <div class="list-item-body">
              New York, NY
            </div>
          </li>
          <li class="favorite-list-item">
            <div class="list-item-head">
              <span class="icon mr-5">
                <md-icon class="add-item">playlist_add</md-icon>
              </span>
              <span class="title">Competitive Market Narratives</span>
              <span class="actions ml-5"
                ><md-icon class="delete-item">delete</md-icon></span
              >
            </div>
            <div class="list-item-body">
              New York, NY
            </div>
          </li>
        </ul>
      </div>
    </template>
  </profile-card>
</template>

<script>
import { ProfileCard } from '@/components';

export default {
  name: 'sidebar-search',
  props: {
    title: {
      type: String,
      default: 'Favorite Industries',
    },
  },
  components: { ProfileCard },
  data() {
    return {
      search: 'autofill text area names...',
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
