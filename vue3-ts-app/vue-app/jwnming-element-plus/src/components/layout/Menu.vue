<template>
  <!-- <h5 class="mb-2" style="color: #fff">|||</h5> -->
  <div class="enum-button" @click="collapseChange">|||</div>
   <!-- :default-active='activePath' -->
  <el-menu
    :default-active="activePath"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    router
  >
    <!-- 一级菜单 -->
    <el-sub-menu
      v-for="(item, index) in menus"
      :key="index"
      :index="item.menuLevel"
    >
      <template #title>
        <el-icon><IconMenu /></el-icon>
        <span>{{ item.menuName }}</span>
      </template>
      <!-- 二级菜单 -->
      <el-menu-item-group
        v-for="(groupItem, groupIndex) in item.children"
        :key="groupIndex"
        :title="groupItem.menuGroup"
      >
        <el-menu-item
          v-for="(menuItem, menuIndex) in groupItem.menuItems"
          :key="menuIndex"
          :index="menuItem.menuUrl"
          @click="saveActivePath(menuItem.menuUrl)"
        >
          <el-icon><Star /></el-icon>
          <span>{{ menuItem.menuName }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import {
  Notebook,
  User,
  View,
  Star,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

import { reactive, toRefs, onMounted } from "vue";
import api from "../../api/api";
export default {
  props: {},
  emits: ["onCollapseChange"], // 父组件Layout的事件
  setup(props, { emit }) {
    const state = reactive({
      menus: [],
      isCollapse: false,
      activePath: '',
    });

    // 保存菜单的激活状态，刷新后保存当前菜单
    const saveActivePath = (activePath) => {
      window.sessionStorage.setItem('menuActivePath', activePath);
    };

    onMounted(() => {
      api.loadMenus(state);
    });

    // 菜单折叠
    const collapseChange = () => {
      state.isCollapse = !state.isCollapse;
      emit("onCollapseChange", state.isCollapse);
    };

    return {
      ...toRefs(state),
      collapseChange,
      saveActivePath,
    };
  },
  components: {
    Notebook,
    User,
    View,
    Star,
    Document,
    IconMenu,
    Setting,
  },
};
</script>

<style scoped>
.el-menu-item {
  font-size: 13px;
  color: rgb(216, 195, 195);
  font-weight: 900;
}
span {
  font-weight: 900;
}
.enum-button {
  background: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>