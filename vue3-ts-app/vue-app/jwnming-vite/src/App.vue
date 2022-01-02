<template>

  <Axios />

</template>

<script>
import Axios from './components/Axios.vue';
import store from './store/store.js'
import axios1 from 'axios';
export default {
  name: "App",
  data() {
    return {
      count: 0,
    }
  },
  components: {
    Axios,
  },
  provide: { // 注册提供, 在HelloWorld.vue中，使用inject获取使用
    store,
  },
  setup() {
    let api = "/user/userinfo"; // mock的urlhaod 
    axios1.get(api).then((result) => {
      store.setAxios(result.data); // 设置值
      console.log(result)
    });

    return {store};
  }
};
</script>
