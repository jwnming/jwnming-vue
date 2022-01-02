<template>
    <div>
        <h1>Page页面</h1>
        <button @click="goPage">跳转到home页面</button> <br /><br />
        <button @click="goArticle">跳转到article/id页面</button><br /><br />
        <button @click="goArticleByName">根据路由name跳转页面</button><br /><br />
        <button @click="goPath">使用？拼接参数转页面</button><br /><br />
        <button @click="goReplacePage">替换页面</button><br /><br />
        <button @click="$router.go(2)">前进2</button><br /><br />
        <button @click="$router.go(-2)">后退2</button><br /><br />
    </div>
</template>

<script>
export default {
    methods: {
        goPage() {
            this.$router.push("/home");
        },
        goArticle() {
            this.$router.push("/article/123");
        },
        goArticleByName() {
            this.$router.push({
                name: "articles",
                params: {
                    id: 1111,
                }
            });
        },
        goPath() {
            this.$router.push({
                path: "/",
                query: {  // 将参数使用？拼接
                    key: "value",
                    key2: "value2",
                }
            });
        },
        goReplacePage() {
            this.$router.push("/home");
        },
    }
}
</script>