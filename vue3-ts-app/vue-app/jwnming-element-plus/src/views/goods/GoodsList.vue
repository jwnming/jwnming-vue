<template>
  <!-- 卡片 -->
  <el-card shadow="never">
    <template #header>
      <card-header>
        <img src="../../assets/logo.png" alt="logo" style="width: 50px" />
        <span>商品列表</span>
      </card-header>
    </template>
    <el-row :gutter="10">
      <el-col :span="4">
        <el-input
          placeholder="请输入搜索商品名称"
          v-model="searchKey"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="searchGoods">搜 索</el-button>
        <el-button type="primary" @click="addGoodsDialogShow()"
          >添 加</el-button
        >
      </el-col>
    </el-row>

    <!-- 数据 -->
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search ||
            data.goodName.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="编号" prop="goodsNo" />
      <el-table-column label="商品名称" prop="goodsName" />
      <el-table-column label="商品图片" prop="goodsPicture">
        <template #default="scope">
          <img src="../../assets/logo.png" alt="商品图片" style="width: 30px" />
          <!-- <img :src="scope.row.goodsPic" alt="" style="width:30px"> 图片地址-->
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template #header>
          <!-- <el-input v-model="search" size="mini" placeholder="Type to search" /> -->
          操 作
        </template>
        <template #default="scope">
          <el-button size="mini" @click="editGoodsDialogShow(scope.$index, scope.row)"
            >编 辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="goodsDelete(scope.$index, scope.row)"
            >删 除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :pate-size="pageSize"
      :current-page="currentPage"
      @current-change="changePage"
    >
    </el-pagination>
  </el-card>

  <!-- 添加对话框 -->
  <AddGoods
    :dialogVisible="dialogVisible"
    @onCloseAddGoodsDialog="closeAddGoodsDialog"
  ></AddGoods>

  <!-- 编辑对话框，当editDialogVisible == true时采取挂载，进而触发EditGoods.vue中的onMounted方法 -->
  <EditGoods
    v-if="editDialogVisible == true"
    :editDialogVisible="editDialogVisible"
    :goodsNo="goodsNo"
    @onCloseEditGoodsDialog="closeEditGoodsDialog"
  ></EditGoods>
</template>

<script lang="ts">
import { reactive, onMounted, toRefs } from "vue"; // 响应式处理
import AddGoods from "./AddGoods.vue";
import EditGoods from "./EditGoods.vue";
import api from "../../api/api.ts";
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";

export default {
  setup() {
    let state = reactive({
      // 响应式
      tableData: [],
      dialogVisible: false,
      editDialogVisible: false,
      pageSize: 20,
      currentPage: 3,
      total: 100,
      searchKey: "",
      goodsNo: "",
    });

    onMounted(() => {
      api.loadGoodsList(state); // 获取商品
    });

    // let url = import.meta.env.VITE_APP_URL;
    // function addGoodsDialogShow() {
    const addGoodsDialogShow = () => {
      // 展示对话框
      state.dialogVisible = true;
    };

    const editGoodsDialogShow = (index, row) => {
      state.goodsNo = row.goodsNo;
      // 展示对话框
      state.editDialogVisible = true;
      
    };

    // 关闭添加商品对话框
    const closeAddGoodsDialog = (visible) => {
      state.dialogVisible = visible;
    };

    // 关闭编辑商品对话框
    const closeEditGoodsDialog = (visible) => {
      state.editDialogVisible = visible;
    };

    // 删除
    const goodsDelete = (index, row) => {
      ElMessageBox.confirm("确定删除哇？", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        callback: (action) => {
          if (action == "confirm") {
            let data = api.goodsDelete(row.goodsNo);
            ElNotification({
              title: "成功",
              message: "删除成功，goodsNo: " + row.goodsNo,
              type: "success",
              duration: 2000, // 消失时间
            });
          }
        },
      });
    };

    // 分页页码改变
    const changePage = function (value) {
      // console.log(value);
      state.currentPage = value; // 显示切换到切换的页码
      // 调用后台 先看searchKey是否有值，有的话先执行搜索，否则加载所有
      // 修改页面展示及对应的页码信息
    };

    // 搜索
    const searchGoods = () => {
      state.currentPage = 1;
      const params = {
        pageNumber: state.currentPage,
        pageSize: state.pageSize,
        searchKey: state.searchKey,
      };
      api.search(state);
    };

    return {
      ...toRefs(state), // 解构转换为响应式
      addGoodsDialogShow,
      editGoodsDialogShow,
      closeAddGoodsDialog,
      closeEditGoodsDialog,
      goodsDelete,
      changePage,
      searchGoods,
    };
  },
  components: {
    AddGoods, EditGoods,
  },
};
</script>