<template>
  <div @click="viewProject"
    class="transition-transform container glassmorphic-frame min-w-[800px] m-10 p-4  border rounded-md shadow-lg hover:shadow-2xl hover:translate-x-4 hover:cursor-pointer">
    <div class="flex">
      <div class="title flex flex-col">
        <h2 class="text-lg font-inder">{{ title }}</h2>
        <h3 v-if="job_taker === ''" class="text-lg font-inder text-gray-700">{{ appliers?.length }} Appliers</h3>
        <div v-else class="flex">
          <h3 class="text-lg font-inder text-gray-700">Taken by &nbsp;</h3>
          <h3 class="text-lg font-inder text-gray-700 underline">{{ job_taker }}</h3>
        </div>

      </div>
      <div class="status flex flex-col justify-center ml-auto">
        <span v-if="daysLeft > 0" class="text-sm bg-cyan-500 font-inder px-2 py-1 rounded">{{ daysLeft }} days left</span>
        <span v-else class="text-sm bg-cyan-500 font-inder px-2 py-1 rounded">{{ status }} </span>
      </div>

    </div>
  </div>
</template>
  
<script>
export default {
  name: 'MyProjectCard',
  props: {
    id: { type: String, default: '-' },
    title: { type: String, default: '-' },
    description: { type: String, default: '-' },
    deadline: { type: String, default: '-' },
    payment: { type: String, default: '-' },
    tags: { type: String, default: '-' },
    location: { type: String, default: '-' },
    rewards: { type: String, default: '-' },
    requirements: { type: String, default: '-' },
    status: { type: String, default: '-' },
    appliers: { type: String, default: '-' },
    job_taker: { type: String, default: '-' },
  },
  data() {
  },
  methods: {
    
    viewProject() {
      this.$router.push({
        name: 'MyProject',
        params: {
          id: this.id,
          title: this.title,
          description: this.description,
          deadline: this.deadline,
          payment: this.payment,
          tags: this.tags,
          location: this.location,
          rewards: this.rewards,
          reqs: this.requirements,
          daysLeft: this.daysLeft,
          appliers: this.appliers.join(','),
          job_taker: this.job_taker,
        }
      });
    },
  },
  computed: {
    daysLeft() {
      const today = new Date();
      const deadlineDate = new Date(this.deadline);
      const diff = deadlineDate - today;
      return Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0);
    },
    // applierlist() {
    //   if (Array.isArray(this.appliers)) {
    //                     const jobIds = this.user_data.value.jobs.map(job => job._id);
    //                     this.fetchJobs(jobIds);
    //                 }
    //   // Split the string into an array of items
    //   var aplr = this.appliers.split('//').map(requirement => requirement.trim());
    //   // return reqs.slice(0,3);
    //   return reqs;
    // },

  },

};
</script>
  
<style scoped>
/* Additional custom styles if needed */
</style>
  