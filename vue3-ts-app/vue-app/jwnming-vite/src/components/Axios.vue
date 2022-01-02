<template>
  <!-- store 全局状态管理，将axios调用接口返回的结果展示 -->
  <h1>{{ store.state.jokeList }}</h1>

  <!-- <div v-for="(item, index) in store.state.jokeList">
      {{ item }}
  </div> -->
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  inject: ['store'], // provide后，引入使用

}
</script>
