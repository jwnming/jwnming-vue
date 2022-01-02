<template>
    <div>
        <h1>文章页面ID:{{ $route.params.id }}</h1>
        <router-view></router-view>  <!-- 根据路由显示 -->
        <router-link to="/">跳转到默认页面</router-link> 
    </div>
</template>

<script>

export default {
 
}
</script>
