// 嵌套路由 

import {createRouter, createWebHashHistory} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Article from '../components/nested/Article.vue';
import NotFound from '../components/NotFound.vue';
import Header from '../components/nested/Header.vue';
import Main from '../components/nested/Main.vue';
import Footer from '../components/Footer.vue';


const routes = [
    {
        path: '/',
        component: HelloWorld,
    },
    // 内嵌
    {
        path: '/article/:id',
        component: Article,
        children: [
            {
                path: 'header',
                component: Header,
            },
            {
                path: 'main',
                component: Main,
            }
        ]
    },
    // 
    {
        path: '/articleHome',
        components: {
            default: Article, // 默认
            header: Header,
            main: Main,
            footer: Footer,
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
    routes: routes,
})

export default router;