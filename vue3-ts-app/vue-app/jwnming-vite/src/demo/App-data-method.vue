<template>
  <h1 @click="change"> {{msg.split('').reverse().join(' ')}} </h1>
  <input type="text" v-once="msg" /> <!-- v-model双向绑定，v-once绑定一次 -->
  <div v-html="content"></div> <!--<div>{{content}}</div> 只会识别为字符串-->
  <div :id="id"></div> <!-- v-bind:id -->


  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }

// }

export default {
  name: 'App',
  data() {
    return {
      msg: "gnimnwj",
      content: "<h1>标题1</h1>",
      id: "d1",
      color: 'green',
    }
  },
  methods: {
    change() {
      this.msg = "haha";
    }
  }
  
}
</script>
<style>

#d1{
  
  width: 100px;
  height: 100px;
  background: red;
}
#d2{
  width: 100px;
  height: 100px;
  background: green;
}
</style>