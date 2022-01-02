<template>
  <!-- 先执行setup、beforeCreate、data。。。。。 -->
  <h1 @click="addCount">{{ count }}</h1>
  <h1 @click="addNum">setup计数:{{ num }}</h1>
  <h1>{{ user.id }} - {{ user.name }}</h1>
  <h1>{{ id }} - {{ name }}</h1>  <!-- toRefs, 单个数据可以使用toRef-->
</template>



<script>
/*
  ref将字符串、数值响应
  reactive将对象响应
  toRef/toRefs解构对象，可以直接使用属性名
*/
import {ref, reactive, toRefs, computed, watchEffect, watch} from 'vue';

export default {
  name: "App",
  setup() {
    console.log("setup");
    const num = ref(0);
    const user = reactive({
      id: 1001, 
      name: computed(() => {  // 计算函数
        return 'JWnMing';
      }),
      
    });
    function addNum() {
      this.num += 2;
    }
    // 自动监听
    watchEffect(() => {
      // 自动监听变化
    });
    // 监听
    watch([num, user], (newValue, oldValue) => {
      // 自动监听变化
      console.log(newValue);
    });
    return {num, addNum, user, ...toRefs(user)};
  },
  data() {
    console.log("data");
    return {
      count: 0,
    }
  },
  methods: {
    addCount: function() {
      this.count++;
    },
    // addNum: function() {
    //   this.num++;
    // },
  },
 

};
</script>
