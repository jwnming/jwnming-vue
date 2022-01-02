<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <h1>商品数量: {{ $store.state.count }}</h1>
    <h1>商品价格: 100</h1>
    <h1>商品总价: {{ $store.getters.totalPrice }}</h1>

    <h1>{{ $store.state.count }}</h1>
    <button @click="change">点击</button>
    <button @click="changeByNum">点击加3</button>

    <h1>笑话列表</h1>
    <h4 v-for="(item, index) in $store.state.jokeList" :key="index" :value="item">{{ item }}</h4>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  methods: {
    change: function() {
      this.$store.commit('setCount');
    },
    changeByNum() {
      this.$store.commit('setCountByNum', 3);
    },
    
  },
  mounted: function() {
    this.$store.dispatch('getJokeList');
  },
})
export default class Home extends Vue {}

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld,
//   },
//   methods: {
//     change: function() {
//       this.$store.commit('setCount');
//     },
//     changeByNum() {
//       this.$store.commit('setCountByNum', 3);
//     },
    
//   },
//   mounted: function() {
//     console.log(this.$store);
    
//     this.$store.dispatch('getJokeList');
//   },
// }
</script>
