<template>
  <div
    class="layout flex h-screen justify-center gap-20 pt-20 border border-black bg-gradient-to-b from-white to-slate-400 ">
    <NavigationBar />
    <div class="flex flex-col w-full overflow-auto space-x-4">
      <div class="flex justify-center m-4 space-x-4">
        <div
          class="project-card w-1/2 min-h-screen flex flex-col items-start glassmorphic-frame rounded-lg shadow-2xl h-fit">
          <div class="flex  top-0 w-full items-start  ">
            <h1 class="text-4xl mb-2 m-8 inset-x-0 top-0 font-cardo_bold font-normal break-words"> {{ title }}</h1>
            <!-- <h1 class="text-4xl mb-2 m-8 inset-x-0 top-0 font-cardo_bold font-normal break-words"> {{ id }}</h1> -->
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

            <div v-if="job_taker != ''" class="flex  items-center mr-8">
              <span class="text-xs font-cardo">Job taken by </span>
              <span class="text-xs font-cardo_bold">&nbsp;{{ job_taker }}</span>
            </div>
          </div>

          <p class="whitespace-pre-wrap font-cardo mx-8  text-lg text-justify">{{ description }}</p>

          <div class=" max-w-5xl m-8 ">
            <span class="font-cardo_bold text-lg">Requirements/Skills: </span>
            <ul class="marker:text-black list-outside list-disc font-cardo text-lg mx-4 mt-4 ">
              <li v-for="(req, index) in reqlist" :key="index">{{ req }}</li>
            </ul>
          </div>

          <div class="flex w-full items-center justify-center mb-8">
            <div class="glassmorphic-frame  w-5/6  h-[400px]">
              <div class="flex steps space-x-auto text-2xl font-cardo_bold shadow-sm rounded-t-lg">
                <div class="flex justify-center items-center w-full shadow-md">
                  <span class="text-center p-4 ">Appliers ({{ applierlist?.length }})</span>
                  <img :src=people style="width:25px; height:25px; margin-right: 10px;">
                </div>
              </div>
              <div class="flex flex-col py-4 px-8 h-[340px]">
                <div class="flex flex-col space-y-4 overflow-auto">
                  <div @click="showCard(applier)" v-for="(applier, index) in applierlist" :key="index"
                    class="container glassmorphic-frame-sharp p-2 px-4 border hover:cursor-pointer">
                    <div class="flex">
                      <div class="applier flex flex-col">
                        <h2>{{ applier }}</h2>

                      </div>
                      <div class="status flex flex-col justify-center ml-auto">
                        <button @click="chooseApplier(applier)" class="text-xs bg-emerald-300 font-inder px-2 py-1 rounded hover:bg-emerald-500">choose
                          this</button>
                      </div>

                    </div>
                  </div>
                  <!-- <h1>Lorem</h1><h1>Lorem</h1><h1>Lorem</h1><h1>Lorem</h1><h1>Lorem</h1><h1>Lorem</h1><h1>Lorem</h1>
                <h1>Lorem</h1><h1>Lorem</h1><h1>Lorem</h1><h1>Lorem</h1><h1>Lorem</h1><h1>Lorem</h1><h1>Lorem</h1> -->
                </div>
              </div>

            </div>

          </div>

          <div class="flex w-full items-center justify-center mb-8">
            <!-- Directly display the ApplierCard for the target index -->
            <span class="flex w-5/6" :key="target">
              <ApplierCard :email="target" />
            </span>
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
          <div class="flex flex-col space-y-4  justify-center items-start ">
            <button @click="apply" type="submit"
              class="w-[200px] text-xl bg-red-400 hover:bg-red-500 text-black font-grover font-normal break-words rounded-lg shadow-md py-4 px-2 ">
              Withdrawl Project
            </button>
            <button @click="apply" type="submit"
              class="w-[200px] text-xl bg-emerald-400 hover:bg-emerald-500 text-black font-grover font-normal break-words rounded-lg shadow-md py-4 px-2 ">
              End Project
            </button>
          </div>



        </div>


      </div>

      <div class="mb-1 "></div>



      <div class="mb-4"></div>

    </div>






  </div>
</template>

<script>
import axios from 'axios';
import NavigationBar from '@/components/NavigationBar.vue';
import ApplierCard from '@/components/ApplierCard.vue';
import svg_cash from '@/assets/bag-cash-currency-svgrepo-com.svg';
import clock from '@/assets/clock-event-planner-svgrepo-com.svg';
import loc from '@/assets/location-svgrepo-com.svg';
import people from '@/assets/people-svgrepo-com.svg';
export default {
  name: "MyProjectPage",
  props: {

  },
  methods: {
    showCard(target) {
      this.target = target;
    },
    async chooseApplier(applierEmail) {
    try {
      
      const userEmail = this.$store.state.user.email;
      const projectId = this.id;

      await axios.patch('https://musang-server-8d173f42ebdb.herokuapp.com/assign-job', {
        userEmail,
        applierEmail,
        projectId,
        newStatus: 'in progress'
      });

      // Handle the success response, e.g., show a notification or update local state
      alert('Project job taker updated:',applierEmail);
    } catch (error) {
      // Handle the error scenario
      console.error('Error choosing applier:', error);
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
      if (this.tags != null)
        return this.tags.split(',').map(tag => tag.trim());
      else
        return [' '];
    },
    applierlist() {
      console.log(this.appliers);
      if (this.appliers != null) {
        console.log(this.appliers);
        return this.appliers.split(',').map(applier => applier.trim());

      }
      else
        return [];
    }
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
      status: this.$route.params.status,
      appliers: this.$route.params.appliers,
      job_taker: this.$route.params.job_taker,
      svg_cash: svg_cash,
      clock: clock,
      loc: loc,
      people: people,
      target: '',
      // ... and so on for the other attributes
    };
  },
  components: { NavigationBar, ApplierCard, }
};
</script>
      
<style scoped></style>  