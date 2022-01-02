<template>
  <div class="loginBox">
    <el-form
      class="loginForm"
      :model="loginForm"
      :rules="loginFormRules"
      ref="loginFormRef"
    >
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          :prefix-icon="User"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          :prefix-icon="Lock"
          placeholder="密码"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登 录</el-button>
        <el-button type="info" @click="resetForm">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { toRefs, reactive, ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import userApi from '../api/userApi.ts';

export default {
  setup() {
    const loginFormRef = ref();
    const state = reactive({
      loginForm: {
        username: "",
        password: "",
      },
      User: User,
      Lock: Lock,
    });

    // 表单输入规则
    const loginFormRules = {
      username: [
        { required: true, message: "请输入用户名!", trigger: "blur" },
        { min: 3, max: 20, message: "输入格式错误!", trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入密码!", trigger: "blur" },
        { min: 6, max: 20, message: "输入格式错误!", trigger: "blur" },
      ],
    };

    // 重置表单
    const resetForm = () => {
        console.log("aa")
        loginFormRef.value.resetFields();
    };

    // 登录
    const login = () => {
        loginFormRef.value.validate((valid) => {
            if (!valid) return;
            const params = {
                username: state.loginForm.username,
                password: state.loginForm.password,
            }
            userApi.login(state, params);
        })
    }

    return {
      ...toRefs(state),
      loginFormRules,
      loginFormRef,
      resetForm,
      login,
    };
  },
};
</script>

<style scoped>
.loginBox {
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 3px;
  margin: 300px auto;
}
.loginForm {
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}
</style>