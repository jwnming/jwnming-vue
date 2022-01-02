<template>
  <h1 v-if="isVip || userName == 'jwnming'">牛逼</h1>
  <h1 v-else>你不是VIP或不是jwnming</h1>
  <button @click="vipChange">点击修改</button>

  <br />

  <h1 v-show="isShow">显示中</h1>
  <button @click="showChange">隐藏显示</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isVip: true,
      userName: "jwnming",
      isShow: true,
    };
  },
  methods: {
    vipChange: function () {
      this.isVip = false;
      this.userName = "haha";
    },
    showChange() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
