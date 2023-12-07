<template>
  <div
    class="login-page flex h-screen items-center justify-center gap-20 p-20 border border-black bg-gradient-to-b from-cyan-500 to-emerald-400">
    <!-- Logo Section -->
    <!-- <div class="flex-1 flex justify-center items-center w-16 p-2">
      <img :src="logo" alt="Musang Logo" class="h-70 object-cover " />
      <div class="h-[600px]  w-[100px]"></div>
    </div> -->




    <!-- Login Form Section -->
    <div
      class="login-form w-full mx-auto max-w-xl flex flex-col items-center  bg-gradient-to-b from-emerald-300 to-cyan-500  rounded-lg shadow-2xl h-[800px]">
      <div class="flex flex-col gap-1 top-0 w-full max-w-xs justify-center items-center">
        <div class="w-full h-16"></div>
        <img :src="logo" alt="Musang Logo" class="h-40 object-cover " />
        <h1 class="text-4xl mb-10 inset-x-0 top-0 font-grover font-normal break-words">Musang.com</h1>
      </div>
      <div class="w-full h-16"></div>
      <div class="inset-x-0 top-0 w-full max-w-xs justify-center items-center">
        <form @submit.prevent="login" class="flex flex-col gap-4 w-full max-w-xs ">
          <div class="flex flex-col gap-3.5">
            <input type="text" placeholder="Username" v-model="username"
              class="border border-black font-fatface rounded p-3 m-3 text-sm" />
            <input type="password" placeholder="Password" v-model="password"
              class="border border-black font-fatface rounded p-3 m-3 text-sm" />

          </div>
        </form>
        <div class="flex flex-col gap-14 w-full max-w-xs justify-center items-center">
          <div class="w-full h-8"></div>

          <!-- <Router-link :to="jobs">hi</Router-link> -->

          <button @click="login" type="submit"
            class="text-2xl bg-teal-500 hover:bg-teal-600 text-black font-grover font-normal break-words rounded-lg shadow-md py-4 px-8 ">
            Login
          </button>

          <!-- <GoogleLogin :callback="callback" prompt auto-login/> -->

        </div>


      </div>
    </div>
  </div>
</template>

<script>
// import { GoogleLogin } from 'vue3-google-login';
import logo from '../assets/musang_logo.png';
// import { decodeCredential } from 'vue3-google-login';
export default {
  name: 'LoginPage',
  data() {
    return {



      username: '',
      password: '',
      logo: logo,

      // loggedIn:false,
      // user:null,
      // callback:(response)=>{
      //   console.log("logged in")
      //   this.loggedIn = true
      //   console.log(response)
      //   this.user = decodeCredential(response.credential)  //decode JWT token
      //   console.log(user)
      // }
    };
  },
  methods: {
    login() {
      // Login logic here
      this.$router.push({ name: 'Home' });
    },
    async submitHandler() {
      // Simulate a delay, e.g., for an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      // After the delay, perform actions such as sending data to an API
      console.log('Form submitted after delay');
      // Optionally, clear the form, show a message, or redirect the user
    },
  },
  components: {/* GoogleLogin*/ }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
