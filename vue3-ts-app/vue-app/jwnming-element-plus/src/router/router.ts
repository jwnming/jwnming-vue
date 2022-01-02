import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../components/layout/Layout.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
    {
        path: '/',
        redirect: '/main',
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/main",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "Home",
                component: () => import("../views/Home.vue"),
            }
        ]
    },
    {
        path: '/goods',
        name: "商品管理",
        component: Layout,
        children: [
            {
                path: "goodsList",
                name: "GoodsList",
                component: () => import("../views/goods/GoodsList.vue"),
            }, 
            {
                path: "goodsInfo",
                name: "GoodsInfo",
                component: () => import("../views/goods/GoodsInfo.vue"),
            }, 
        ]
    },
    {
        path: '/user',
        name: "用户管理",
        component: Layout,
        children: [
            {
                path: "userList",
                name: "UserList",
                component: () => import("../views/user/UserList.vue"),
            },
            {
                path: "userConfig",
                name: "UserConfig",
                component: () => import("../views/user/UserConfig.vue"),
            }   
        ]
    },
    // 404配置
    {
        path: '/:pathMatch(.*)', // 正则表达式
        component: Layout,
        children: [
            {
                path: "/:pathMatch(.*)",
                name: "NotFound",
                component: NotFound,
            }, 
        ]
    }
]

// 路由配置
const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(), // 正常模式，会重新请求
    routes,
})

// 导航守卫 to将要访问的路径，from来源路径，next为一个放行函数
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        return next(); // 直接放行
    }
    // 校验token
    const token = window.sessionStorage.getItem("token");
    if (!token) {
        return next('/login'); // 跳转到登录
    }
    next();
});

export default router;