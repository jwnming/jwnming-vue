<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>

  <!-- store 全局状态管理 -->
  <h1>{{ store.state.message }}</h1>
  <button @click="store.setMessage('老蒋真帅！')">修改store</button>
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
