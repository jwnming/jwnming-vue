<template>
    <div>
        <h1>新闻内容是：{{ content }}</h1>
    </div>
    <input type="text" v-model="userName" />
    <button @click="send">提交数据给父组件</button>
</template>
<script>

export default {
    props: ['content'], // 接收参数
    data: function() {
        return {
            userName: "",
        }
    },
    methods: {
        send() {
            this.$emit('sendMsg', this.userName);// 第一个为事件名称：sendMsg，后面为参数
        }
    }
}
</script>
