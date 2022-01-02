<template>
  <Header></Header>
  <Main/>
  <Footer/>
  <!-- 通过prop传递数据、子组件传递数据给父组件，自定义监听事件sendMsg -->
  <News :content="newsCentent" @sendMsg="getChildMsg"></News>
  <h1>子组件触发事件传过来的值：{{ childMsg }}</h1>
  
  


</template>



<script>
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';
import Footer from '../components/Footer.vue';
import News from '../components/News.vue';


export default {
  name: "App",
  data() {
    return {
      newsCentent: "振兴中华",
      childMsg: "",
    }
  },
  components: {
    Header, Main, Footer, News,

  },
  methods: {
    getChildMsg(value) {
      this.childMsg = value;
    }
  }
};
</script>
