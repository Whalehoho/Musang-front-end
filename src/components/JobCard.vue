<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <div class="font-bold text-xl mb-2">{{ jobData.title }}</div>
      <p class="text-gray-700 text-base">
        {{ jobData.companyName }}
      </p>
      <div class="text-gray-600 text-sm">
        {{ jobData.description }}
      </div>
      <div class="pt-4 flex items-center justify-between">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ jobData.type }}</span>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
          Apply
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JobCard',
    props: {
      jobData: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling specific to JobCard can go here */
  </style>
  
