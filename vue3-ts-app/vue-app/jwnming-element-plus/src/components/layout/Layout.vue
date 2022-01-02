<template>
  <el-container>
    <el-header>
      <div class="header">
        <img src="../../assets/logo.png" alt="logo" />
        <span><router-link to="/">后台管理系统</router-link></span>

        <el-button style="float: right; margin-top: 10px;" type="info" @click="loginOut">退 出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <Menu @onCollapseChange="onCollapseChange(value)"></Menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from "./Menu.vue";
import { reactive, toRefs, onMounted } from "vue";
import userApi from '../../api/userApi';
export default {
  props: {
    isCollapse: Boolean,
  },
  setup(props, {}) {
    const state = reactive({
      isCollapse: props.isCollapse,
    });

    // 菜单折叠
    const onCollapseChange = (value) => {
      // console.log("触发：" + value);
      state.isCollapse = value;
    };

    // 退出
    const loginOut = () => {
      userApi.loginOut();
    }
    return {
      ...toRefs(state),
      onCollapseChange,
      loginOut,
    };
  },
  components: {
    Menu,
  },
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: #fff;
}
.el-container {
  height: 1000px;
}
.el-aside {
  background: #333744;
}
.main {
  background: #6f7074;
}
.el-header {
  background: #373d41;
  color: #fff;
  font-size: 20px;
}
.header img {
  vertical-align: middle;
  width: 60px;
  height: 60px;
  margin-right: 20px;
}
</style>