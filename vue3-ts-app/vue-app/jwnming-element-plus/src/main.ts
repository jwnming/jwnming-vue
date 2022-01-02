import { createApp } from 'vue'
import App from './App.vue'

// 导入route
import router from "./router/router";

// 引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

// 导入Mock
import './mock/mock.js'

// 使用通过VITE设置环境变量，并引入使用到axios
import axios from 'axios';
// axios.defaults.baseURL = import.meta.env.VITE_APP_URL;

// 异步请求时：应用加载进度条、统一校验token
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
axios.interceptors.request.use((config) => {
    config.headers.Authorization = window.sessionStorage.getItem('token');
    NProgress.start(); // 发起请求时，开启进度条
    return config;
});
axios.interceptors.response.use((config) => {
    NProgress.done(); // 响应后，关闭进度条
    return config;
});



createApp(App).use(ElementPlus).use(router).mount('#app');