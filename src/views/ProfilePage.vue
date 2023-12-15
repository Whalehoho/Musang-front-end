<template>
  <div
    class="layout flex flex-col  h-screen items-center  gap-20 pt-20 border border-black bg-gradient-to-b from-white to-slate-400 ">
    <NavigationBar />
    <div class="flex flex-col w-screen items-center space-y-20 overflow-auto">
      <ProfileCard />
    </div>

  </div>
</template>
    
<script>
import NavigationBar from '../components/NavigationBar.vue';
import ProfileCard from '../components/ProfileCard.vue';


export default {
  name: 'ProfilePage',
  components: {
    ProfileCard,
    NavigationBar,
  },
  data() {
    return {

    };
  },
  created() {

  },
  methods: {


  },
  // Fetch jobs from an API or use Vuex to get job data
  mounted() {
    // TODO: Fetch job data from API or store
  }
};
</script>
    
<style>
/* You can add global styles here if needed */
</style>
    