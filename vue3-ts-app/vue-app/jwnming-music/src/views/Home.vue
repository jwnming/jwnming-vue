<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

    <!-- 导航 -->
    <TopNav></TopNav>
      <!-- <span class="iconfont icon-sousuo"></span>
      <span class="iconfont icon-tuijian"></span>
      <span class="iconfont icon-tuijian2"></span> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import TopNav from '../components/topnav/TopNav.vue'

@Options({
  components: {
    TopNav
  }
})

export default class Home extends Vue {}
</script>

<style lang="less" scoped>
#d1 {
  width: 3.75rem;
  height: 3.75rem;
  background: skyblue;
}
</style>
