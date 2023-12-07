<template>
  <div class="home-content w-full h-screen pt-20 flex flex-col overflow-auto items-center">
    <!-- The outer container should be the full width and height of the viewport and allow for overflow content to scroll -->

    <div class="flex w-8/12 h-full pb-6 justify-center">
      <!-- Image Container -->
      <div class="flex flex-1 justify-center">
        <img :src=randomImage :key="randomImage" alt=""
          class="rounded w-full shadow-xl opacity-95 hover:transition-transform duration-700 hover:scale-105" />
        <!-- Replace with your actual image path -->
      </div>

      <!-- <div class="video-wrap w-7/12">
        <video controls="true">
          <source :src="video" type="video/mp4">
        </video>
      </div> -->

      <!-- Content Container -->
      <div class="flex-1 pl-12 h-full ">
        <h2 class="text-2xl font-cardo_bold mb-4">Unleash Potential, Connect Expertise</h2>
        <ul class="list-none space-y-4 mb-4">
          <li style="display: flex; align-items: center;">
            <img :src="svg1" style="width:25px; height:25px; margin-right: 10px;">
            <p class="font-medium text-xl">Join for Free</p>
          </li>
          <p class="font-inder text-lg pl-[35px]">Sign up, connect with experts, delve into projects, or schedule a
            consultation
            at no
            charge.</p>

          <li style="display: flex; align-items: center;">
            <img :src="svg2" style="width:25px; height:25px; margin-right: 10px;">
            <p class="font-medium text-xl">Hire with Ease</p>
          </li>
          <p class="font-inder text-lg pl-[35px]">Skip the hassle of talent scouting. Post your job and we'll match you
            with
            skilled
            professionals!</p>

          <li style="display: flex; align-items: center;">
            <img :src="svg3" style="width:25px; height:25px; margin-right: 10px;">
            <p class="font-medium text-xl">Affordable Excellence</p>
          </li>
          <p class="font-inder text-lg pl-[35px]">Partner with top-tier talent and enjoy the benefits of our competitive
            rates,
            all while
            staying within budget.</p>
        </ul>
        <div class="space-x-4">
          <button
            class="bg-emerald-300 bg-opacity-50 h-auto text-gray-700 font-inder px-4 py-2  rounded hover:bg-cyan-200">Learn
            more</button>
        </div>
      </div>

    </div>

    <!-- This div acts as a card for the sign-in and register buttons -->
    <div class=" container glassmorphic-frame w-8/12 h-48 rounded-lg shadow-md p-4 mb-4 items-center">
      <!-- This flex container holds the sign-in and register buttons -->
      <div class=" flex my-4 space-x-16 items-center justify-center">
        <!-- <p>{{ loggedIn }}</p> -->
        <!-- <button class="px-6 py-2 w-1/4 glassmorphic-frame  text-gray-700 font-bold  rounded hover:bg-cyan-200"> -->
        <GoogleLogin :callback="callback" v-if="user===null" auto-login class="opacity-80 hover:opacity-100" />

        <!-- Content to show after login -->
        <div v-else>
          <!-- Content shown after the user has logged in -->
          <p class="text-xl font-cardo_bold">Welcome, {{ user?.name }}!</p>
          <!-- You can add more content here that should be visible after login -->
        </div>
        <!-- </button> -->
        <!-- <button class="px-6 py-2 w-1/4 glassmorphic-frame  text-gray-700  font-bold rounded hover:bg-cyan-200">
          Register
        </button> -->
      </div>
      <!-- Text below the buttons -->
      <div class="text-gray-700 p-8 font-inder text-center">
        <span class="text-yellow-500 text-lg ">&#127775;</span> Sign in to manage your Musang profile and unlock more
        features, or
        <a href="javascript:void(0);" @click="logout" class="underline">continue as guest</a>.
      </div>
    </div>

    <div class="container mx-auto px-4 py-2">
      <h2 class="text-xl font-grover  mb-3">Quick search</h2>

      <!-- Grid Container -->
      <div class="grid grid-cols-3 gap-4">
        <!-- Classifications Column -->
        <div>
          <h3 class="font-medium mb-2">Classifications</h3>
          <nav class="flex flex-col space-y-1.5">
            <a href="#" class="text-gray-700 underline">Lorem</a>
            <a href="#" class="text-gray-700 underline">Ipsum</a>
            <a href="#" class="text-gray-700 underline">Dolor</a>
            <a href="#" class="text-gray-700 underline">Sit</a>
            <a href="#" class="text-gray-700 underline">Amet</a>
            <a href="#" class="text-gray-700 underline">Consectetur</a>
            <a href="#" class="text-gray-700 underline">Adipiscing</a>
            <a href="#" class="text-gray-700 underline">Elit</a>
            <a href="#" class="text-gray-700 underline">Sed</a>
            <a href="#" class="text-gray-700 underline">Do</a>


          </nav>
        </div>

        <!-- Major Cities Column -->
        <div>
          <h3 class="font-medium mb-2">Major cities</h3>
          <nav class="flex flex-col space-y-1">
            <a href="#" class="text-gray-700 underline">Eiusmod</a>
            <a href="#" class="text-gray-700 underline">Tempor</a>
            <a href="#" class="text-gray-700 underline">Incididunt</a>
            <a href="#" class="text-gray-700 underline">Labore</a>
            <a href="#" class="text-gray-700 underline">Dolore</a>
            <a href="#" class="text-gray-700 underline">Magna</a>
            <a href="#" class="text-gray-700 underline">Aliqua</a>
            <a href="#" class="text-gray-700 underline">Enim</a>
            <a href="#" class="text-gray-700 underline">Minim</a>

          </nav>
        </div>

        <!-- Other Column -->
        <div>
          <h3 class="font-medium mb-2">Other</h3>
          <nav class="flex flex-col space-y-1">
            <a href="#" class="text-gray-700 underline">Exercitation</a>
            <a href="#" class="text-gray-700 underline">Ullamco</a>
            <a href="#" class="text-gray-700 underline">Laboris</a>
            <a href="#" class="text-gray-700 underline">Aliquip</a>
            <a href="#" class="text-gray-700 underline">Aute</a>
            <a href="#" class="text-gray-700 underline">Irure</a>

          </nav>
        </div>
      </div>
    </div>





  </div>
</template> 
  
<script>
import { mapState } from 'vuex';
import { decodeCredential, googleLogout } from 'vue3-google-login';
import { GoogleLogin } from 'vue3-google-login';
import { mapActions } from 'vuex';
import magnifier from '../assets/magnifier.png';
import pexels1 from '../assets/pexels-anamul-rezwan-1216544 (1).jpg';
import pexels2 from '../assets/pexels-chevanon-photography-1108101.jpg';
import pexels3 from '../assets/pexels-christina-morillo-1181715.jpg';
import pexels4 from '../assets/pexels-elevate-1267338.jpg';
import pexels5 from '../assets/pexels-fauxels-3184292.jpg';
import pexels6 from '../assets/pexels-fox-1595392.jpg';
import pexels7 from '../assets/pexels-jeshootscom-834892.jpg';
import pexels8 from '../assets/pexels-tirachard-kumtanom-733854.jpg';
import pexels9 from '../assets/pexels-vlada-karpovich-4050299.jpg';
import pexels10 from '../assets/pexels-nappy-935949.jpg';
import pexels11 from '../assets/pexels-andrea-piacquadio-933255.jpg';
import svg1 from '../assets/join-membership-svgrepo-com.svg';
import svg2 from '../assets/recruitment-svgrepo-com.svg';
import svg3 from '../assets/community-comments-svgrepo-com.svg';
export default {
  name: 'HomeContent',
  data() {
    return {

      loggedInState: false,
      userData: null,

      callback: (response) => {

        this.userData = decodeCredential(response.credential)  //decode JWT
        this.loggedInState = true;
        console.log("logged in")
        console.log(this.userData)
        console.log(response)
        this.loginUser({'userData':this.userData, 'loggedInState':this.loggedInState});
      },

      magnifier: magnifier,
      pexels1: pexels1,
      pexels2: pexels2,
      pexels3: pexels3,
      pexels4: pexels4,
      pexels5: pexels5,
      pexels6: pexels6,
      pexels7: pexels7,
      pexels8: pexels8,
      pexels9: pexels9,
      pexels10: pexels10,
      pexels11: pexels11,
      svg1: svg1,
      svg2: svg2,
      svg3: svg3,
      images: [
        magnifier, pexels1, pexels2, pexels3, pexels4, pexels5, pexels6, pexels7, pexels8, pexels9, pexels10, pexels11,
      ],
      randomImage: '',
    };
  },
  created() {
    this.selectRandomImage();
  },
  methods: {
    selectRandomImage() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      this.randomImage = this.images[randomIndex];
    },
    logout() {
      this.userData = null; // Make sure this is synchronous or handled properly if asynchronous
      this.loggedInState = false; // Set loggedIn to true after successful login
      console.log('logout');
      googleLogout();
      //this.$emit('logout');
      this.loginUser({ userData: null, loggedInState: false });
    },
    ...mapActions(['loginUser']),
  },
  computed: {
    ...mapState(['user', 'loggedIn'])
  },
  components: { GoogleLogin },

};
</script>
  
<style scoped>
audio::-webkit-media-controls-timeline,
video::-webkit-media-controls-timeline {
  display: none;
}

audio::-webkit-media-controls,
video::-webkit-media-controls {
  display: none;
}
</style>
  