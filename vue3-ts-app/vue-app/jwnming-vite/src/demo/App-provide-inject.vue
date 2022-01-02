<template>

  <Student />

  
</template>



<script>
import {provide, reactive, } from 'vue';
import Student from '../components/Student.vue';

export default {
  name: "App",
  setup() {
    const student = reactive({
      name: "JWnMing",
      age: "25",
    });
    provide('student', student);
    return {};
  },
  data() {
    return {
      count: 0,
    }
  },
  components: {
    Student,

  },
};
</script>
