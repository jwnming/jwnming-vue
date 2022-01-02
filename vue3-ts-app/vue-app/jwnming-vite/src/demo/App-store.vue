<template>

  <HelloWorld />


</template>



<script>
import HelloWorld from './components/HelloWorld.vue';
import store from './store/store.js'

export default {
  name: "App",
  data() {
    return {
      count: 0,
    }
  },
  components: {
    HelloWorld,
  },
  provide: { // 注册提供, 在HelloWorld.vue中，使用inject获取使用
    store,
  },

};
</script>
