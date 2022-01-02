import axios from 'axios';
import router from '../router/router';
import { ElMessage, } from 'element-plus';

// 登录
const login = async function login(state: any, params: {username: string,}) {
    let url = '/user/login';
    await axios.post(url, params).then((resp) => {
        if (resp.data.data.code == 'sucess') { // 校验成功
            console.log(resp.data.data.code);
            window.sessionStorage.setItem("token", resp.data.data.token);
            ElMessage.success("登录成功，username：" + params.username);
            router.push("/");
        } else {
            ElMessage.error("登录失败，请检查输入信息！");
        }
    });
}

// 登出
const loginOut = function loginOut() {
    window.sessionStorage.clear();
    router.push("/login");
}

// 获取用户
const getAll = async function getAll(state: any) {
    let url = '/user/getAll';
    const params = {
        currentPage: state.currentPage,
        pateSize: state.pageSize,
    }
    await axios.get(url, params).then((resp) => {
        state.tableDate = resp.data;
    });
}


// 导出给引用放调用
export default {
    login,
    loginOut,
    getAll,
};