<template>
  <div
    class="layout flex h-screen justify-center gap-20 pt-20 border border-black bg-gradient-to-b from-emerald-500 to-cyan-400">
    <NavigationBar />

    <div class="flex flex-col  w-full overflow-auto space-x-4">
      <div class="flex justify-center m-4 space-x-4">
        <div
          class="project-card w-1/2 min-h-screen flex flex-col items-start glassmorphic-frame rounded-lg shadow-2xl h-fit">
          <div class="flex flex-col top-0 w-full items-start  ">
            <h1 class="text-4xl mb-2 m-8 inset-x-0 top-0 font-cardo_bold font-normal break-words"> {{ title }}</h1>


          </div>
          <div class="flex w-full justify-between py-4">
            <div class="flex">
              <div
                class="space-x-4 bg-emerald-100 bg-opacity-50 h-auto text-xs text-gray-700 font-inder px-2  mx-8  rounded">
                Closing Date: {{ formattedDate }}
              </div>
              <div class="flex items-center">
                <img :src="clock" style="width:12px; height:12px; margin-right: 5px;">
                <div class="text-xs text-gray-700 font-inder ">Ends in {{ daysLeft }} days</div>
              </div>
            </div>

            <div class="flex  items-center mr-8">
              <span class="text-xs font-cardo">posted by </span>
              <span class="text-xs font-cardo_bold">&nbsp;{{ client }}</span>
            </div>
          </div>

          <p class="whitespace-pre-wrap font-cardo mx-8  text-lg text-justify">{{ description }}</p>

          <div class=" max-w-5xl m-8 ">
            <span class="font-cardo_bold text-lg">Requirements/Skills: </span>
            <ul class="marker:text-black list-outside list-disc font-cardo text-lg mx-4 mt-4 ">
              <li v-for="(req, index) in reqlist" :key="index">{{ req }}</li>
            </ul>
          </div>


        </div>

        <div class="flex flex-col space-y-4">
          <div class="flex flex-col justify-end">
            <div class="flex justify-start">
              <img :src="svg_cash" style="width:28px; height:28px; margin-right: 10px;">
              <div class="font-cardo_bold text-2xl ">MYR {{ rewards }}</div>
            </div>
            <div class="flex font-inder text-sm text-gray-700 justify-start">
              {{ payment }}
            </div>
          </div>
          <div class="flex justify-start">
            <img :src="loc" style="width:28px; height:28px; margin-right: 10px;">
            <div class="font-cardo_bold text-2xl">
              {{ location }}
            </div>
          </div>
          <div>
            <ul class=" font-cardo text-2xl text-gray-700 space-y-2 mt-4 ">
              <li v-for="(tag, index) in taglist" :key="index">#{{ tag }}</li>
            </ul>
          </div>
          <div class="flex flex-col space-y-4 justify-center items-center ">
            <button @click="apply" type="submit"
              class="w-[200px] text-xl bg-emerald-400 hover:bg-emerald-500 text-black font-grover font-normal break-words rounded-lg shadow-md py-4 px-2 ">
              Apply
            </button>
          </div>
        </div>


      </div>
      <div class="mb-1 "></div>

      <div class="mb-4 "></div>

    </div>




    <!-- Display Project Details -->


  </div>
</template>
    
<script>
import axios from 'axios';
import NavigationBar from '@/components/NavigationBar.vue';
import svg_cash from '@/assets/bag-cash-currency-svgrepo-com.svg';
import clock from '@/assets/clock-event-planner-svgrepo-com.svg';
import loc from '@/assets/location-svgrepo-com.svg';
export default {
  name: "ProjectPage",
  props: {

  },
  methods: {
    async apply() {
      try {
        const projectId = this.id;
        console.log(projectId);
        console.log(this.$store.state.user);
        const applierEmail = this.$store.state.user.email;
        // Make an HTTP request to your backend server
        // Replace `your-backend-endpoint` with the actual URL of your backend endpoint
        const response = await axios.post('https://musang-server-8d173f42ebdb.herokuapp.com/apply', { projectId, applierEmail });
        console.log(response.data);
        alert("Apply success");
      } catch (error) {
        console.error('Error applying to project:', error);
        alert("Error applying to the project");
      }
    }
  },
  computed: {
    formattedDate() {
      return this.deadline.split('T')[0];
    },
    reqlist() {
      if (this.reqs != null) {
        // console.log(this.appliers);
        return this.reqs.split('//').map(req => req.trim());

      }
      else
        return [];
    },
    taglist() {
      // if (this.tags != null)
      //   return this.tags.split(',').map(tag => tag.trim());
      // else
      //   return [' '];

      if (this.tags != null) {
        // console.log(this.appliers);
        return this.tags.split(',').map(tags => tags.trim());

      }
      else
        return [];

      // console.log(this.tags);
      // return this.tags;
    },
  },
  data() {
    return {
      // Access route parameters
      id: this.$route.params.id,
      title: this.$route.params.title,
      daysLeft: this.$route.params.daysLeft,
      description: this.$route.params.description,
      payment: this.$route.params.payment,
      tags: this.$route.params.tags,
      location: this.$route.params.location,
      rewards: this.$route.params.rewards,
      reqs: this.$route.params.reqs,
      deadline: this.$route.params.deadline,
      client: this.$route.params.client,
      svg_cash: svg_cash,
      clock: clock,
      loc: loc,
      // ... and so on for the other attributes
    };
  },
  components: { NavigationBar }
};
</script>
    
<style scoped></style>  