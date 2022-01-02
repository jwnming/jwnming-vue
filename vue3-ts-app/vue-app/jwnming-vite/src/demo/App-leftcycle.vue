<template>
  <div>vue生命周期</div>

</template>



<script>

export default {
  name: "App",
  components: {

  },
  // 钩子方法，生命周期
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  // 销毁：以下是2.0的写法
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  // },
  // destroyed() {
  //   console.log("destroyed");
  // },
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
