<template>
    <div
      class="layout flex  h-screen   justify-center gap-20 pt-20 border border-black bg-gradient-to-b from-blue-200 to-blue-300">
      <NavigationBar/>
      <ExampleForm/>
      </div>
  </template>
    
  <script>
  import NavigationBar from '@/components/NavigationBar.vue';
  import ExampleForm from '@/components/ExampleForm.vue';
  export default {
    name: "HirePage",
    components: { NavigationBar, ExampleForm}
  };
  </script>
    
  <style scoped></style>