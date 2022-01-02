<template>
  <!-- 类样式 -->
  <h1 :class="msg"> hello </h1>
  <h1 :class="{active:isActive}"> hello </h1>
  <button @click="change">点击</button>
  
  <br />
  <br />
  <h1 :class="arr"> hello </h1>
  <button @click="changeArr">点击</button>

  <br />
  <br />
  <h1 :class="[className, {active:true}]"> hello </h1>  <!-- 定义类目 -->

  <!-- 内联样式 -->
  <h1 :style="style"> hello </h1>
  <h1 :style="{background: 'black', border: '2px solid red'}"> hello </h1>
  <h1 :style="[className, {background: 'black', border: '2px solid skyblue'}]"> hello </h1>



</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: 'gniMnWj',
      isActive: true,
      arr: ['swiper active'],
      className: "classname",
      style: "background: yellow;",
    }
  },
  methods: {
    change() {
      this.isActive = !this.isActive;
    },
    changeArr() {
      this.arr.pop();
    },


  }
  
  
}
</script>
<style>
.active {
  background: red;
}
.swiper {
  background: green;
}
</style>