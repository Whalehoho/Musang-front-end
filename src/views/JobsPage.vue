<template>
  <div
    class="layout flex flex-col  h-screen items-center  gap-20 pt-20 border border-black bg-gradient-to-b from-emerald-500 to-cyan-400">
    <NavigationBar />
    <div class=" w-screen  space-y-10 overflow-auto">
      <!-- <JobCard/>
    <JobCard/>
    <JobCard/>
    <JobCard/> -->
    <h1>Jobs Listing</h1>
    <ul>
      <li v-for="job in jobs" :key="job._id">
        <h2>{{ job['Project Title'] }}</h2> <!-- Use bracket notation for keys with spaces -->
        <p>{{ job['Description'] }}</p>
        <!-- Access other properties with spaces similarly -->
      </li>
    </ul>
    </div>

  </div>
  <!-- <section class="bg-gray-100 py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <JobCard
            v-for="job in jobs"
            :key="job.id"
            :title="job.title"
            :description="job.description"
            :skills="job.skills"
            :priceRange="job.priceRange"
            :daysLeft="job.daysLeft"
          />
        </div>
      </div>
    </section> -->
</template>
  
<script>
import axios from 'axios';
import NavigationBar from '../components/NavigationBar.vue';
// import JobCard from '../components/JobCard.vue';


export default {
  name: 'JobsPage',
  components: {
    // JobCard,
     NavigationBar,
  },
  data() {
    return {
      jobs: []
    };
  },
  created() {
    this.fetchJobs();
  },
  methods: {
    fetchJobs() {
      axios.get('http://localhost:3000/jobs')
        .then(response => {
          this.jobs = response.data.map(job => ({
            ...job,
            projectTitle: job['Project Title'], // Assigning to a valid JS property name
            description: job['Description']
            // Continue mapping other properties as needed
          }));
        })
        .catch(error => {
          console.error('Error fetching jobs:', error);
        });
    }
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
  