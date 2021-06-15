<template>
  <md-card class="md-card-table">
    <md-card-header class="md-card-header-icon" :class="getClass(headerColor)">
      <slot name="header"></slot>
    </md-card-header>

    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>

    <!-- <md-card-footer>
      <slot name="footer"></slot>
    </md-card-footer> -->
  </md-card>
</template>

<script>
export default {
  name: 'table-card',
  props: {
    headerColor: {
      type: String,
      default: '',
    },
  },
  methods: {
    getClass: function(headerColor) {
      return 'md-card-header-' + headerColor + '';
    },
  },
};
</script>

<style lang="css"></style>
