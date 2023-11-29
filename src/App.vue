<template>
  
    <transition
      enter-active-class="fade-enter-active"
      enter-from-class="fade-enter-from"
      leave-active-class="fade-leave-active"
      leave-to-class="fade-leave-to"
    >
      <router-view></router-view>
    </transition>

</template>

<script setup>
// import NavigationBar from './components/NavigationBar.vue';
// import SiteFooter from './components/SiteFooter.vue';
//  import JobsCard from './components/JobsCard.vue';
// import LoginCard from './components/LoginCard.vue';


</script>

<!-- <style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style> -->
