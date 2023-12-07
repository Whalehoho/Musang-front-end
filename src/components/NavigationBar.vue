<template>
  <div class="navigation-bar w-full h-20 top-0 absolute bg-transparent shadow-lg justify-between items-start inline-flex">

    <button @click="home" class="h-full">
      <div class="Logoframe w-40 h-full flex-col justify-center items-center gap-2.5 inline-flex">
        <img :src="logo" class="Logo h-full" />
      </div>
    </button>

    <div class="Navigationframe justify-start items-start flex">
      <div class="Jobsframe h-20  justify-center items-center gap-2.5 flex">
        <button @click="selectButton('jobs')"  type="submit"
          class="text-2xl h-full hover:shadow-lg text-black font-grover font-normal px-8">
          <div :class="{ 'active-button': selectedButton === 'jobs' }" class="flex h-full items-center">
            Find Jobs
          </div>
          
        </button>
      </div>
      <div class="Comsframe h-20 justify-center items-center gap-2.5 flex">
        <button @click="selectButton('hire')" type="submit"
          class="text-2xl h-full hover:shadow-lg text-black font-grover font-normal px-8">
          <div :class="{ 'active-button': selectedButton === 'hire' }" class="flex h-full items-center">
            Hire Freelancers
          </div>
        </button>
      </div>
    </div>
    <!-- <div class="Searchframe w-96 h-16 mx-64 px-14 py-2.5 justify-center items-center gap-2.5 inline-flex">
      <div class="Searchbar w-96 h-8 relative bg-white rounded-2xl border border-black border-opacity-30"></div>
    </div> -->
    <div class="Searchframe w-96 h-full mx-64 flex items-center">
      <div
        class="Searchbar w-full h-3/5 relative bg-white rounded-full shadow-lg border border-black border-opacity-30 flex items-center ">
        <input type="search" placeholder="Search Industries"
          class="w-full h-full pl-4 pr-16 font-grover rounded-full focus:outline-none" />
        <button type="submit" class="absolute right-2.5 ">
          <span
            class="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-400 bg-opacity-10 text-slate-500 hover:bg-opacity-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </button>

      </div>
    </div>

    <!-- <div class="Profileframe w-40 h-full px-7 flex justify-end items-center">
  <div class="Profile w-14 h-14 bg-cyan-500 bg-opacity-25 rounded-full shadow-lg border-4 border-white border-opacity-100 relative">
    <div class="absolute top-0 right-0 bottom-0 left-0 rounded-full border-2 border-cyan-500 -m-1 flex items-center justify-center text-black text-3xl font-bold"></div>
  </div>
</div> -->
    <div class="Profileframe w-40 h-full px-7 flex justify-end items-center">
      <button @click="profile" class="Profile flex w-14 h-14 relative ">
        <!-- <div class="unselectable absolute top-0 right-0 bottom-0 left-0 rounded-full border-2 border-slate-700 -m-1 flex items-center justify-center text-black text-3xl font-grover"> -->
          <img :src="getUserPicture()" class="ProfileImage rounded-full shadow-xl" />
          <!-- {{ user }} -->
        <!-- </div> -->
        </button>
    </div>



  </div>
</template>
<!-- <script setup>
props
const props = defineProps({
  loggedIn: Boolean,
  user: Object // or specific shape if known
})
</script> -->
<script>
import { mapState } from 'vuex';
import logo from '../assets/musang_logo.png';
import profile from '../assets/profile-user-svgrepo-com.svg';
export default {
  name: 'NavigationBar',

  data() {
    return {
      logo: logo,
      selectedButton: '',
    };
  },
  methods: {
    home() {
      // Login logic here
      this.$router.push({ name: 'Home' });
    },
    profile() {
      // Login logic here
      this.$router.push({ name: 'Profile' });
    },
    jobs() {
      // Login logic here
      this.$router.push({ name: 'Jobs',query: { selectedButton: 'jobs' } },);
    },
    hire() {
      // Login logic here
      this.$router.push({ name: 'Hire',query: { selectedButton: 'hire' } });
    },
    selectButton(button) {
      this.selectedButton = button;
      if(button === "jobs")
        this.jobs();
      else if(button === "hire")
        this.hire();
    },
    getUserPicture() {
      return this.user && this.user.picture ? this.user.picture : profile;
    },
  },
  computed: {
    ...mapState(['user', 'loggedIn']) // 'user' and 'otherState' are Vuex state properties
  },
  mounted(){
    this.selectedButton = this.$route.query.selectedButton;
  }
};
</script>
  
<style scoped>
.active-button {
  /* Define your active button styles here */
  /* Add a solid black bottom border */
  border-bottom: 8px solid DarkSlateGray;

  /* Remove other borders */
  border-top: none;
  border-left: none;
  border-right: none;
  

}
</style>
  
