import { reactive } from 'vue';
// 全局状态管理, Vuex的使用方法查看jwnming-cli工程
const store = {
    state: reactive({
        message: "hello jwnming",
        jokeList: [],
    }),
    setMessage(value) {
        this.state.message = value;
    },
    setAxios(list) {
        this.state.jokeList = list;
    },
}

export default store;