<template>
  <md-card class="md-card-signup">
    <slot name="title"></slot>

    <md-card-content>
      <div class="md-layout">
        <slot name="content"></slot>
      </div>
    </md-card-content>

    <md-card-actions>
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'signup-card',
};
</script>

<style lang="css"></style>
