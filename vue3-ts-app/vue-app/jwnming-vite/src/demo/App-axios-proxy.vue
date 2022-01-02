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
    // let api = "https://api.apiopen.top/getJoke?page=1&count=2&type=video";  // 随便找的开发api
    let api = "https://api.apiopen.top/getJoke?page=1&count=2&type=text";  // 随便找的开发api
    // let pvpApi = 'https://pvp.qq.com/web201605/js/herolist.json'; // 王者荣耀api，跨域问题解决
    let pvpApi = '/api/web201605/js/herolist.json'; // 王者荣耀api，跨域问题解决
    
    // 1、使用fetch
    // fetch(api).then(resp => resp.json()).then(result => {
    //   store.setAxios(result.result); // 设置值
    //   console.log(result)
    // });

    // 2、使用axios
    // axios1.get(api).then((result) => {
    //   store.setAxios(result.data.result); // 设置值
    //   console.log(result)
    // });

    // 3、跨域处理
    axios1.get(pvpApi).then((result) => {
      store.setAxios(result.data); // 设置值
      console.log(result)
    });
    return {store};
  }
};
</script>
