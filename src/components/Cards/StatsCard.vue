<template>
  <md-card class="md-card-profile">
    <md-card-header class="md-card-header-icon" :class="getClass(headerColor)">
      <slot name="header"></slot>
    </md-card-header>

    <md-card-actions md-alignment="left">
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>
<script>
export default {
  name: 'profile-card',
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
