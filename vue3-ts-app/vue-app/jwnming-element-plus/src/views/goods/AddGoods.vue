<template>
  <!-- 
      :before-close="handleClose"  回调函数
      @close="closeAddGoodsDialog(false)" 窗口右上角叉号
    -->
  <el-dialog
    v-model="dialogVisible"
    title="添加商品"
    width="30%"
    center="true"
    @close="closeAddGoodsDialog(false)"
  >
  <!-- :model="ruleForm" -->
    <el-form
      ref="refGoodsForm"
      :model="goodsForm"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item label="商品名称" prop="goodsName">
        <el-input v-model="goodsForm.goodsName"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="goodsPrice">
        <el-input v-model="goodsForm.goodsPrice"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" prop="goodsPicture">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
        </el-upload>
      </el-form-item>
      <!-- v-model="goodsForm.goodsDescription" -->
      <el-form-item label="商品详情" prop="goodsDescription">
        <QuillEditor
          theme="snow"
          ref="desEditor"
        ></QuillEditor>
      </el-form-item>
      <el-form-item></el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="
            () => {
              closeAddGoodsDialog(false);
            }
          "
          >取 消</el-button
        >
        <el-button type="primary" @click="submitAdd"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from "vue";
// import { ElMessageBox } from "element-plus";
// npm install @vueup/vue-quill@beta --save 富文本编辑器
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { Plus } from '@element-plus/icons-vue'; // 上传图片框展示的加号
import { ElMessage } from 'element-plus';
import api from '../../api/api.ts'; // 引入api库

export default {
  props: {
    dialogVisible: Boolean,
  },
  emits: ["onCloseAddGoodsDialog"], // 父组件的事件
  components: {
    QuillEditor, Plus, 
  },
  setup(props, { emit }) {
    const refGoodsForm = ref();
    const desEditor = ref();
    const state = reactive({
      // 响应式对象
      dialogVisible: props.dialogVisible,
      goodsForm: {
        goodsNo: "",
        goodsName: "",
        goodsPrice: "",
        goodsDescription: "",
        goodsPicture: "",
      },
      // uploadUrl: import.meta.env.VITE_APP_URL + "/goods/fileUpload",
      uploadUrl: "/goods/fileUpload",
      imageUrl: "",
    });

    // 关闭按钮触发父组件
    const closeAddGoodsDialog = (visible) => {
      ElMessage.info("窗口关闭成功！");
      state.imageUrl = ""; // 关闭后，将图片置为空
      emit("onCloseAddGoodsDialog", visible);
    };

    // 完成文件上传类型校验
    const beforeAvatarUpload = (file) => {
      // 获取文件类型
      let arr = file.name.split(".");
      let sufix = arr[arr.lenth - 1];
      ElMessage.error("上传图片格式不对");
      
    }

    const rules = {
      goodsName: [
        {
          required: true,
          message: "请输入商品名称",
          trigger: "blur",
        },
        {
          min: 1,
          max: 50,
          message: "商品名称不合法",
          trigger: "blur",
        },
      ],
      goodsPrice: [
        {
          required: false,  
          message: "请输入商品价格",
          trigger: "blur",
        },
      ],
      goodsPicture: [
        {
          required: false,  // 文件上传后将goodsPicture值设置为图片地址
          message: "请输入商品价格",
          trigger: "blur",
        },
      ],
      goodsDescription: [
        {
          required: true,
          message: "请输入商品详情",
          trigger: "blur",
        },
      ],
    };

    // 商品图片上传成功后调用函数
    const handleAvatarSuccess = (resp) => {
        // state.imageUrl = import.meta.env.VITE_APP_URL + resp.data.goodsPicture
        state.imageUrl = resp.data.goodsPicture;
    }

    // 添加商品封装在了addGoods的回调函数

    return {
      // dialogVisible,
      //handleClose,
      ...toRefs(state), // 解构后成为响应式
      closeAddGoodsDialog,
      rules,
      ...api.addGoods(state, emit, refGoodsForm, desEditor),
      refGoodsForm,
      desEditor,
      beforeAvatarUpload,
    };
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 150px;
  /* display: flex; */
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar-uploader-icon svg {
  margin-top: 74px; /* (178px - 28px) / 2 - 1px */
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>