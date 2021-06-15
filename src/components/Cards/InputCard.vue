<template>
  <md-card
    class="md-card-pricing md-card-pricing-with-list"
    :class="cardClass"
    :style="{ backgroundColor: backgroundColor }"
  >
    <slot name="category"></slot>
    <md-card-content>
      <slot name="description"></slot>
    </md-card-content>
    <md-card-actions class="text-center">
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>
<script>
export default {
  name: 'input-card',
  props: {
    cardClass: {
      type: String,
      default: '',
    },
    iconColor: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'white',
    },
  },
};
</script>
<style></style>
