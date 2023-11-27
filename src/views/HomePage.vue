<template>
    <div class="container mx-auto px-4">
      <NavigationBar />
      <section class="text-center my-8">
        <h1 class="text-4xl font-bold">Welcome to Musang</h1>
        <p class="text-xl mt-4">Find your next opportunity</p>
      </section>
      <section class="flex flex-wrap justify-center">
        <JobCard 
          v-for="job in jobsList" 
          :key="job.id" 
          :jobData="job" 
        />
      </section>
      <SiteFooter />
    </div>
  </template>
  
  <script>
  import NavigationBar from '../components/NavigationBar.vue';
  import JobCard from '../components/JobCard.vue';
  import SiteFooter from '../components/SiteFooter.vue';
  
  export default {
    name: 'HomePage',
    components: {
      NavigationBar,
      JobCard,
      SiteFooter
    },
    data() {
      return {
        jobsList: [] // This would be populated with actual job data
      };
    },
    created() {
      this.fetchJobs();
    },
    methods: {
      fetchJobs() {
        // Placeholder for job fetching logic
        // In a real app, you'd likely make an HTTP request here
        this.jobsList = [
          { id: 1, title: 'Frontend Developer', companyName: 'Tech Co', description: 'We are looking for a Vue.js developer...', type: 'Full-time' },
          // ...other job listings
        ];
      }
    }
  };
  </script>
  
  <style scoped>
  /* HomePage-specific styles */
  </style>
  