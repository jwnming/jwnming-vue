<template>
    <div>
        <h1>学生信息：</h1>
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
    </div>
</template>

<script>
import {inject} from 'vue';

export default {
    setup() {
        const student = inject('student');
        return {...student};
    }
}
</script>
