<template>
    <footer class="bg-gray-200 text-center p-4 absolute bottom-0 w-full">
    <p>© {{ currentYear }} Musang. All rights reserved.</p>
  </footer>
  </template>
  
  <script>
  export default {
    name: 'SiteFooter',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  /* SiteFooter-specific styles */
  SiteFooter {
    background-color: #f3f4f6;
  }
  </style>
  