<template>
    <div>
        文章页面ID: {{ $route.params.id }}
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route);
    }
}
</script>
