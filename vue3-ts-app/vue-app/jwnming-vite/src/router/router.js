import {createRouter, createWebHashHistory} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Article from '../components/Article.vue';
import NotFound from '../components/NotFound.vue';


const routes = [
    {
        path: '/',
        redirect: (to) => {return {path: '/home'}}, // 重定向，或 redirect: ‘/Home'
    },
    {
        path: '/home',
        alias: ["/homes", "tohome"], // 路由别名，可以多个，一个可以不用数组
        component: HelloWorld,
    },
    {
        path: '/article/:name',
        component: Article,
    },
    {
        path: '/articleById/:id(\\d+)', // 正则表达式，要求id匹配为数值,如果不是就匹配不到页面
        component: Article,
    },
    {
        path: '/articleByIds/:id+', // 正则表达式，至少一个id参数，也可以拼接多个id： /2134/124
        component: Article,
    },
    {
        path: '/articleByIdsOrNot/:id*', // 正则表达式，"*" 任意多个，可没有可重复； "?" 有或没有，不可重复   
        component: Article,
    },
    {
        path: '/articleEnter*', 
        component: Article,
        beforeEnter: (to, from) => { // 路由守卫，进入该页面前会调用，

        }
    },
    // 错误跳转
    {
        path: '/:param(.*)', // 正则表达式
        component: NotFound,
    }
]



const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(), // 正常模式，会重新请求
    routes: routes,
})

router.beforeEach((to, from, next) => {
    // to 请求的信息，
    next();
    return false;  // false阻止跳转
});

export default router;