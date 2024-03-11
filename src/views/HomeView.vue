<template>
    <div class="max-w-lg mx-auto mt-8 p-4 border border-gray-300 rounded-lg">
      <AddStudent />
      <StudentList />
    </div>
  </template>
  
  <script>
  import StudentList from '../components/StudentList.vue';
  import AddStudent from '../components/AddStudent.vue';
  
  export default {
    name: 'HomeView',
    components: {
      StudentList,
      AddStudent
    }
  };
  </script>
  