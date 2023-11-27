<template>
  <div
    class="flex h-screen items-center justify-center gap-20 p-20 border border-black bg-gradient-to-b from-cyan-500 to-emerald-400">
    <!-- Logo Section -->
    <!-- <div class="flex-1 flex justify-center items-center w-16 p-2">
      <img :src="logo" alt="Musang Logo" class="h-70 object-cover " />
      <div class="h-[600px]  w-[100px]"></div>
    </div> -->




    <!-- Login Form Section -->
    <div class="w-full mx-auto max-w-xl flex flex-col items-center  bg-gradient-to-b from-emerald-300 to-cyan-500  rounded-lg shadow-2xl h-[800px]">
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
          <button type="submit"
            class="text-2xl bg-teal-500 hover:bg-teal-600 text-black font-grover font-normal break-words rounded-lg shadow-md py-4 px-8 ">
            Login
          </button>
        </div>
        
        
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../assets/musang_logo.png';
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      logo: logo
    };
  },
  methods: {
    login() {
      // Login logic here
      console.log("Logging in with:", this.username, this.password);
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
