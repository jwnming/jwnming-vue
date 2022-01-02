// 嵌套路由 

import {createRouter, createWebHashHistory} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import NotFound from '../components/NotFound.vue';
import Article from '../components/Article.vue';
import Page from '../components/JsJump.vue';

const routes = [
    {
        path: '/',
        component: HelloWorld,
    },
    {
        path: '/home',
        component: HelloWorld,
    },
    {
        path: '/page',
        component: Page,
    },
    {
        name: "articles",
        path: '/article/:id',
        component: Article,
    },
    // 错误跳转
    {
        path: '/:param(.*)', // 正则表达式
        component: NotFound,
    }
]



const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;