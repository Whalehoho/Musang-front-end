<template>
    <nav class="flex items-center justify-between p-4">
      <div class="text-lg font-bold">Musang</div>
      <div>
        <router-link to="/" class="mx-2">Home</router-link>
        <router-link to="/jobs" class="mx-2">Jobs</router-link>
        <router-link v-if="!userLoggedIn" to="/login" class="mx-2">Login</router-link>
        <router-link v-if="!userLoggedIn" to="/register" class="mx-2">Register</router-link>
        <button v-if="userLoggedIn" @click="logout" class="mx-2">Logout</button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationBar',
    data() {
      return {
        userLoggedIn: false, // This should eventually come from Vuex store
      };
    },
    methods: {
      logout() {
        // Logout logic here
        this.userLoggedIn = false;
        // Here you would also call the Vuex action to update the state
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  nav {
    background-color: #f3f4f6; /* light gray */
  }
  .router-link-active {
    font-weight: bold;
  }
  </style>
  