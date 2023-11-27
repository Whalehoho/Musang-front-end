<template>
    <div class="flex h-screen bg-teal-400">
      <!-- Logo Section -->
      <div class="w-1/2 flex justify-center items-center">
        <img src="../../public/musang_logo.png" alt="Musang Logo" class="max-w-xs" />
      </div>
  
      <!-- Login Form Section -->
      <div class="w-1/2 flex flex-col justify-center items-center bg-blue-200 p-10">
        <h1 class="text-4xl text-black mb-10 font-grover font-normal break-words">Musang.com</h1>
        <form @submit.prevent="login" class="w-full max-w-xs">
          <div class="mb-6">
            <input type="text" placeholder="Username" v-model="username" class="w-full p-2 mb-3 border rounded" />
            <input type="password" placeholder="Password" v-model="password" class="w-full p-2 mb-3 border rounded" />
            <button type="submit" class="w-full bg-teal-500 hover:bg-teal-600 text-2xl text-black mb-10 font-grover font-normal break-words">
              Login
            </button>
          </div>
        </form>
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
  /* If you have additional styles, add them here */
  </style>
  