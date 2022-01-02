<template>

  <!-- 引入router视图，根据router.js配置进行路由到对应的组件 -->
  <router-view></router-view> 
  <!-- <router-link to="/">跳转</router-link>  跳转-->
</template>



<script>

export default {
  name: "App",
  beforeRouterEnter() {
    // 路由进入
  },
  beforeRouterUpdate() {
    // 路由更新
  },
  beforeRouterLeave() {
    // 路由离开
  },
};
</script>
