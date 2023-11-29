<template>
  <div class="home-content w-full h-screen pt-20 flex flex-col overflow-auto items-center">
    <!-- The outer container should be the full width and height of the viewport and allow for overflow content to scroll -->

    <div class="flex w-7/12 h-full pb-6 justify-center">
      <!-- Image Container -->
      <div class="flex-1 h-full">
        <!-- Replace with your actual image path -->
        <img :src="magnifier" alt="" class="rounded shadow-xl opacity-95" />
      </div>

      <!-- <div class="video-wrap w-7/12">
        <video controls="true">
          <source :src="video" type="video/mp4">
        </video>
      </div> -->

      <!-- Content Container -->
      <div class="flex-1 px-12 h-full">
        <h2 class="text-2xl font-cardo_bold mb-4">Unleash Potential, Connect Expertise</h2>
        <ul class="list-none space-y-2 mb-6">
          <li style="display: flex; align-items: center;">
            <img :src="svg1" style="width:25px; height:25px; margin-right: 10px;">
            <p class="font-medium text-xl">Join for Free</p>
          </li>
          <p class="font-inder px-[35px]">Sign up, connect with experts, delve into projects, or schedule a consultation
            at no
            charge.</p>

          <li style="display: flex; align-items: center;">
            <img :src="svg2" style="width:25px; height:25px; margin-right: 10px;">
            <p class="font-medium text-xl">Hire with Ease</p>
          </li>
          <p class="font-inder px-[35px]">Skip the hassle of talent scouting. Post your job and we'll match you with
            skilled
            professionals!</p>

          <li style="display: flex; align-items: center;">
            <img :src="svg3" style="width:25px; height:25px; margin-right: 10px;">
            <p class="font-medium text-xl">Affordable Excellence</p>
          </li>
          <p class="font-inder px-[35px]">Partner with top-tier talent and enjoy the benefits of our competitive rates,
            all while
            staying within budget.</p>
        </ul>
        <div class="flex space-x-4">
          <button
            class="bg-emerald-300 bg-opacity-50 h-auto text-gray-700 font-inder px-4  rounded hover:bg-cyan-200">Learn
            more</button>
        </div>
      </div>

    </div>

    <!-- This div acts as a card for the sign-in and register buttons -->
    <div class=" container glassmorphic-frame w-7/12 h-48 rounded-lg shadow-md p-4 mb-4 items-center">
      <!-- This flex container holds the sign-in and register buttons -->
      <div class=" flex my-4 space-x-16 items-center justify-center">
        <button class="px-6 py-2 w-1/4 glassmorphic-frame  text-gray-700 font-bold  rounded hover:bg-cyan-200">
          Sign in
        </button>
        <button class="px-6 py-2 w-1/4 glassmorphic-frame  text-gray-700  font-bold rounded hover:bg-cyan-200">
          Register
        </button>
      </div>
      <!-- Text below the buttons -->
      <div class="text-gray-700 p-8 font-inder text-center">
        <span class="text-yellow-500 text-lg ">&#127775;</span> Sign in to manage your Musang profile and unlock more
        features, or
        <a href="javascript:void(0);" onclick="window.location.reload();" class="underline">continue as guest</a>.
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
import magnifier from '../assets/magnifier.png'
import svg1 from '../assets/join-membership-svgrepo-com.svg';
import svg2 from '../assets/recruitment-svgrepo-com.svg';
import svg3 from '../assets/community-comments-svgrepo-com.svg';
export default {
  name: 'HomeContent',
  data() {
    return {
      magnifier: magnifier,
      svg1: svg1,
      svg2: svg2,
      svg3: svg3,
    };
  },
  methods: {

  }
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
  