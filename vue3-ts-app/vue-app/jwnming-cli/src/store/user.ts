import { mapActions } from "vuex";

// 用户模块
const user = {
    state: () => ({
        userName: "JWnMing",
        age: 25

    }),
    mutations: {
        setUserName: function(state) {
            this.state.userName = "蒋文明";
        },
        setAge: function(state) {
            state.age = 24;
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
        asyncSetAgeByNum: function(context) {
            console.log(context);
            setTimeout(() => {
                let num = 1;
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