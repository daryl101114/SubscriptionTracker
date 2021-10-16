<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown v-if="!$auth.loading" text="User" right>
       <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <!-- <div v-if="!$auth.loading"> -->
      <!-- show login when not authenticated -->
      <b-button v-if="!$auth.isAuthenticated" @click="login">Log in</b-button>
      <!-- show logout when authenticated -->
      <b-button v-if="$auth.isAuthenticated" @click="logout">Log out</b-button>
    <!-- </div> -->
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "NavBar",

  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>
