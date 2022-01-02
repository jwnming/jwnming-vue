<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <!-- <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item> -->
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="input4" class="w-50 m-2" placeholder="用户名">
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">搜 索 用 户</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="success">添 加 用 户</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" disabled>删 除 用 户</el-button>
      </el-col>
    </el-row>
    <!-- 数据 -->
    <el-table :data="tableDate" border>
        <el-table-column label="用户编号" prop="userNo"></el-table-column>
        <el-table-column label="用户名称" prop="userName"></el-table-column>
        <el-table-column label="用户性别" prop="userSex"></el-table-column>
        <el-table-column label="用户头像" prop="userPicture"></el-table-column>
        <el-table-column label="操作">
            <template #default='scope'>
                <el-button type="primary" :icon="Edit" size="mini"><Edit style="width:12px;height:12px;" /> 编 辑</el-button>
                <el-button type="danger" :icon="Delete" size="mini"><Delete style="width:12px;height:12px;" /> 删 除</el-button>
            </template>
        </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { Edit, Search, Delete } from "@element-plus/icons-vue";
import { reactive, toRefs, onMounted } from "vue";
import userApi from "../../api/userApi";

export default {
  setup() {
    const state = reactive({
      tableDate: [],
      pateSize: 10,
      total: 100,
      currentPage: 2,
    });

    onMounted(() => {
      userApi.getAll(state);
    });
    return {
      ...toRefs(state),
    };
  },
  components: {
    Search, Edit, Delete
  },
};
</script>

<style scoped>
.el-breadcrumb {
  margin-bottom: 15px;
}
.el-table {
    margin-top: 10px;
}
:root {
  --el-color-primary: #409eff;
}
</style>