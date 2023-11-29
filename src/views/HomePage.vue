<template>
  <div
    class="layout flex flex-col h-screen overflow-auto items-center justify-center gap-20 pt-20 border border-black bg-gradient-to-b from-emerald-500 to-cyan-400">
    <NavigationBar/>
    <HomeContent/>
    </div>
</template>
  
<script>
import NavigationBar from '@/components/NavigationBar.vue';
import HomeContent from '@/components/HomeContent.vue';
export default {
  name: "HomePage",
  components: { NavigationBar, HomeContent }
};
</script>
  
<style scoped></style>