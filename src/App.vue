<!-- src/App.vue -->
<template>
  <div id="app">
    <div class="max-w-lg mx-auto mt-8 p-4 border border-gray-300 rounded-lg text-center bg-gray-100">
      <h2 class="text-2xl font-bold"> Student Manager App
      </h2>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'App'
};
</script>
