<template>
  <div
    class="layout flex flex-col  h-screen items-center  gap-20 pt-20 border border-black  bg-gradient-to-b from-blue-200 to-blue-300">
    <NavigationBar />
    <div class=" w-screen  space-y-10 overflow-auto">
      <JobCard v-for="job in filteredJobs" :key="job['_id']" :id="job['_id']" :title="job['Project Title']"
        :description="job['Description']" :deadline="job['Closing Date']" :payment="job['Payment Method']"
        :tags="job['Tags']" :location="job['Location']" :rewards="Math.floor(job['Rewards'])"
        :requirements="job['Requirements']" :status="job['Status']" :client="job['Client']" />
    </div>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar.vue';
import JobCard from '../components/JobCard.vue';


export default {
  name: 'JobsPage',
  components: {
    JobCard,
    NavigationBar,
  },
  data() {
    return {
      jobs: []
    };
  },
  created() {
    this.fetchJobs();
    console.log(this.jobs)
  },
  methods: {
    
    fetchJobs() {
      axios.get('https://musang-server-8d173f42ebdb.herokuapp.com/jobs')
        // axios.get('http://localhost:3000/jobs')
        .then(response => {
          this.jobs = response.data.map(job => ({
            ...job,
            // projectTitle: job['Project Title'], // Assigning to a valid JS property name
            // description: job['Description']
            // Continue mapping other properties as needed
          }));
        })
        .catch(error => {
          console.error('Error fetching jobs:', error);
        });
    },
  },
  computed: {
    ...mapState(['searchQuery']),
    filteredJobs() {
      // console.log(this.searchQuery);
      if (!this.searchQuery || this.searchQuery === '') {
        
      return this.jobs;
    }
    const searchLower = this.searchQuery.toLowerCase();
    return this.jobs.filter(job => {
      return job['Project Title'].toLowerCase().includes(searchLower) ||
             job['Description'].toLowerCase().includes(searchLower) ||
             (Array.isArray(job['Tags']) && job['Tags'].some(tag => tag.toLowerCase().includes(searchLower))) ||
             (Array.isArray(job['Requirements']) && job['Requirements'].some(req => req.toLowerCase().includes(searchLower)));
    });
    },
  },
  // Fetch jobs from an API or use Vuex to get job data
  mounted() {
    // TODO: Fetch job data from API or store
  }
};
</script>
  

  