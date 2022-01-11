<template>
  <div id="app">
    <NavBar/>
    <div class="body">
    <router-link v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>
    <router-view/>
  </div>
  </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar.vue'
export default {
  name: 'App',
  components:{
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.body{
  position: flex;
   margin-top: 60px;
}
</style>
