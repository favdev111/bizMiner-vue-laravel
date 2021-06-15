<template>
  <div class="user">
    <div class="photo">
      <!-- <img :src="avatar" alt="avatar" /> -->
      <!-- <md-icon>perm_identity</md-icon> -->
      <router-link :to="{ name: 'UserPage' }">
        <img class="user-avatar" src="https://i.pravatar.cc/300" />
        <p class="hidden-lg hidden-md">Profile</p>
      </router-link>
    </div>
    <div class="user-info">
      <div>
        <b>{{ title }}</b>
      </div>
      <div class="last-login">
        Last login from <br />24.245.67.896 Feb. 02 2021
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isClosed: true,
      title: 'User Name',
      rtlTitle: 'User Name',
      avatar: `${process.env.VUE_APP_BASE_URL}/img/placeholder-old.jpg`,
    };
  },

  async created() {
    // this.$store.watch(
    //   () => this.$store.getters['profile/me'],
    //   (me) => {
    //     this.title = me.name;
    //     this.avatar = me.profile_image;
    //   }
    // );
    // await this.$store.dispatch('profile/me');
  },

  methods: {
    clicked: function(e) {
      e.preventDefault();
    },
    toggleMenu: function() {
      this.isClosed = !this.isClosed;
    },
    goToProfile() {
      this.$router.push({ name: 'MyProfiles' });
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
<style>
.collapsed {
  transition: opacity 1s;
}
</style>
