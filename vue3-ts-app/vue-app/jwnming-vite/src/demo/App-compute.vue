<template>
  <div v-bind:[attributeName]="d1"></div> <!-- 动态绑定属性值，并触发修改 -->
  <button @click="change">点击切换颜色</button> 

  <!-- 计算 -->
  <div>{{reverseMsg}}</div>
  
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      attributeName: 'class',
      d1: 'd1',
      msg: 'gniMnWj',
    }
  },
  computed: {
    reverseMsg: function() {
      return this.msg.split('').reverse().join("*");
    }
  },
  methods: {
    change() {
      this.d1 = 'id'
    }
  },
  
  
}
</script>
<style>
#id{
  width: 100px;
  height: 100px;
  background: black;
}

.d1{
  width: 100px;
  height: 100px;
  background: red;
}
.d2{
  width: 100px;
  height: 100px;
  background: green;
}

</style>