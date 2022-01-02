<template>

  <!-- 引入router视图，根据router.js配置进行路由到对应的组件 -->
  <router-view></router-view> 
  
  <router-view name="header"></router-view>  <!-- nestedrouter  components,匹配name然后渲染-->
  <router-view name="main"></router-view>
  <router-view name="footer"></router-view>
</template>



<script>

export default {
  name: "App",
  
};
</script>
