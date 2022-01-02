<template>
  <div class="home">

    <h1>对象: {{ countAlias }}</h1>
    <h1>数量: {{ countAlias.count }}</h1>
    <h1>数量: {{ count }}</h1>

    <button @click="setCount">点击</button>

    <h1>笑话列表</h1>
    <h4 v-for="(item, index) in countAlias.jokeList" :key="index" :value="item">{{ item }}</h4>
  </div> 
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// 引入状态管理映射模块
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

// 三个点，是析构对象的属性，以至可以直接读取属性并使用
@Options({
  computed: {
    ...mapState(['count']),
    ...mapState({
      countAlias: (state) => state, 
    }), 
  },
  methods: {
    ...mapMutations(['setCount']),
    ...mapMutations(['getJokeList']),
  },
  mounted() {
    // 挂载时调用getJokeList方法
    this.$store.dispatch('getJokeList');
  }
})
export default class Home extends Vue {}

</script>
