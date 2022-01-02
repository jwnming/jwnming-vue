import { mapActions } from "vuex";

// 用户模块
const user = {
    namespaced: true, // 命名空间
    state: () => ({
        userName: "JWnMings",
        age: 25

    }),
    mutations: {
        setUserName: function(state) {
            this.state.userName = "jwnming";
        },
        setAge: function(state) {
            state.age = 18;
        },
        setAgeByNum: function(state, num) {
            state.age = state.age + num;
        }
    },
    actions: {
        asyncSetAge: function(context) {
            console.log(context);
            setTimeout(() => {
                context.commit('setAge');
            }, 3000);
            
        },
        asyncSetAgeByNum: function(context, num) {
            console.log(context);
            setTimeout(() => {
                context.commit('setAgeByNum', num);
            }, 3000);
            
        }
    },
    getters: {
        dscription: function(state, getters, rootState) {
            return state.userName + state.age
        }
    },
}

export default user;