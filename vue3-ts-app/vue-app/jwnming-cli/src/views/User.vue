<template>
  <div class="user">
    <h1>{{ $store.state.user }}</h1>
    <h1>{{ $store.getters.dscription }}</h1>
    <button @click="changeAge">异步修改年龄,点击等3s</button>
    <button @click="changeAgeByNum">异步修改年龄,点击等3s</button>

    <h1 >使用明明空间的状态模块</h1>
    <h1>{{ $store.getters['userAlias/dscription'] }}</h1>
    <button @click="changeAgeAlias">异步修改年龄,点击等3s</button>

    <!-- 使用map -->
    <h1>{{ userAlias }}</h1>
    <button @click="asyncSetAgeByNum(20)">异步修改年龄,点击等3s</button>

  </div>
</template>

<script lang="ts">

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  mounted() {
    console.log(this.$store);
    // 挂载时调用getJokeList方法
    //this.$store.dispatch('asyncSetAge');
  },
  computed: {
    ...mapState(['userAlias'])
  },
  methods: {
    changeAge() {
      this.$store.dispatch('asyncSetAge');
    },
    changeAgeByNum() {
      this.$store.dispatch('asyncSetAgeByNum');
    },
    changeAgeAlias() {
      this.$store.dispatch('userAlias/asyncSetAge');
    },
    ...mapActions('userAlias', ['asyncSetAgeByNum'])
  }
}
</script>
