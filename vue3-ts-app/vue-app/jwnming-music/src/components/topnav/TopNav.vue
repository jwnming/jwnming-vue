<template>
    <div class="topNav">
      <!-- 导航左 -->
      <div class="topLeft">
        <span id="icon-top-left" class="iconfont icon-31liebiao"></span>
      </div>
       <!-- 导航中 -->
      <div class="topCenter">
        <span class="navBtn">我的</span>
        <span class="navBtn active">发现</span>
        <span class="navBtn">云村</span>
        <span class="navBtn">视频</span>
      </div>
       <!-- 导航右 -->
      <div class="topRight">
        <span class="iconfont icon-sousuo"></span>
      </div>
    </div>
</template>

<style lang="less" scoped>
.topNav {
    widows: 7.6rem;
    height: 1rem;
    display: flex; // 平均分布
    justify-content: space-between;
    align-items: center;  // 上下居中
    padding: 0 0.2rem;
    .topCenter {
        width: 5rem;
        display: flex; // 平均分布
        justify-content: space-between;
        .active {
            font-weight: 900; // 加粗
        }
    }
}

</style>
