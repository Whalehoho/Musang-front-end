<template>
  <div @click="viewProject"
    class="transition-transform  container glassmorphic-frame w-5/6 m-10 p-4 mx-14 border rounded-md shadow-lg hover:shadow-2xl hover:translate-x-4 hover:cursor-pointer">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-inder">{{ title }}</h2>
      <!-- <h2 class="text-lg font-inder">{{ status }}</h2> -->
      <span v-if="status === ''" class="text-sm bg-cyan-500 font-inder px-2 py-1 rounded">{{ daysLeft }} days left</span>
      <span v-else class="text-sm bg-cyan-500 font-inder px-2 py-1 rounded">{{ status }} </span>
    </div>
    <p class="text-gray-800 font-cardo text-lg mb-4 word-break overflow-x-hidden overflow-y-auto max-h-24">
      {{ description }}
    </p>
    <!-- Horizontal Line -->
    <hr class="my-2 mx-3 border-emerald-800 opacity-50" />

    <ul
      class="marker:text-emerald-800 list-inside list-disc font-cardo text-base text-gray-600 mb-4 overflow-y-auto max-h-12">
      <li v-for="(req, index) in reqlist" :key="index">{{ req }}</li>
    </ul>
    <div class="flex justify-between items-center">
      <div class="flex gap-4 font-inder text-blue-500 text-lg">
        <span v-for="(tag, index) in taglist" :key="index">#{{ tag }}</span>

      </div>
      <div class="text-emerald-700 font-cardo_bold">
        RM {{ rewards }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    id: { type: String, default: '-' },
    title: { type: String, default: '-' },
    description: { type: String, default: '-' },
    deadline: { type: String, default: '-' },
    payment: { type: String, default: '-' },
    tags: { type: String, default: null },
    location: { type: String, default: '-' },
    rewards: { type: String, default: '-' },
    requirements: { type: String, default: '-' },
    status: { type: String, default: '' },
    client: { type: String, default: '-' },
  },
  data() {
  },
  methods: {
    viewProject() {
      this.$router.push({
        name: 'Project',
        params: {
          id: this.id,
          title: this.title,
          description: this.description,
          deadline: this.deadline,
          payment: this.payment,
          tags: this.tags?.join(','),
          location: this.location,
          rewards: this.rewards,
          reqs: this.requirements?.join('//'),
          daysLeft: this.daysLeft,
          client: this.client,
        }
      });
    },
  },
  computed: {
    reqlist() {
      console.log(this.requirements);
      return this.requirements;
    },
    limitedReqList() {
      // Return only the first three items of reqlist
      return this.reqlist.slice(0, 3);
    },
    taglist() {
      // console.log(this.tags);
      // if (this.tags != null)
      //   return this.tags.split(',').map(tag => tag.trim());
      // else
      //   return [' '];
      return this.tags;
    },
    daysLeft() {
      const today = new Date();
      const deadlineDate = new Date(this.deadline);
      const diff = deadlineDate - today;
      return Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0);
    }

  },

};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
