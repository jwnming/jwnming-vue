<template>
  <!-- event -->
  <h1 @click="addNum">{{ num }}</h1>
  <h1 @click="count++">{{ count }}</h1>
  <h1 v-on:click="addNumByInput($event, 10)">{{ count }}</h1>  <!-- $event 当前的事件对象, v-on绑定 -->
 
  <h1 :style="{background: color,}" v-on:click="addNumByInput($event, 10), changeColor()">{{ count }}</h1>  <!-- 支持多个事件绑定 -->

  <!-- 事件修饰符 :
    .once 事件只会处理一次
    .stop 阻止事件冒泡
    .prevent 阻止默认事件 -->     
  <h1 v-on:click.once="index++">{{ index }}</h1>

  <!-- 
    @XXXX内置组件事件：
    @keydown按键事件 enter/tab/delete/esc/space/up/down/left/right/ctrl/alt/shift/meta（win键）
    @mouseXXX鼠标事件 left/right/meddle
   -->
  <input type="text" @keydown.enter="search" /> <!-- 点击enter键 -->
  <h1 @mousedown.left="mouseDown">鼠标左键</h1>
  <h1 @="mouseDown">鼠标左键</h1>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      num: 0,
      count: 0,
      color: 'black',
      index: 32,
    }
  },
  methods: {
    addNum: function(event) {
      console.log(event);
      this.num++;
    },
    addNumByInput(event, number) {
      console.log(event);
      this.count += number;
    },
    changeColor: function() {
      this.color = 'red';
    },
    search: function() {
      alert("你点击了Enter键")
    },
    mouseDown() {
      alert("点击了鼠标右键")
    }
  },
};
</script>
