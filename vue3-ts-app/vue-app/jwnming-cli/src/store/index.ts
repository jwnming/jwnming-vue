import { createStore } from 'vuex'

// 导入用户状态模块
import user from './user';
import userAlias from './userAlias'; 

export default createStore({
  // 设置全局数据

  state: {
    count: 0,
    jokeList: [],
  },
  // 获取状态属性
  getters: {
    totalPrice: function(state) {
      return state.count * 100;
    }
  },
  // 修改状态方法
  mutations: {
    setCount: function(state) {
      state.count++; // 触发一次加一
    },
    setCountByNum(state, num) { 
      state.count += num;
    },
    setJokeList(state, list) {
      state.jokeList = list;
    }
  },
  // 异步状态
  actions: {
    getJokeList: function(context) { // 上下文context
      let api = "https://api.apiopen.top/getJoke?page=1&count=2&type=text";  // 随便找的开发api
      fetch(api).then(resp => resp.json()).then(result => {
        console.log(result);
        
        context.commit('setJokeList', result.result);
      });
    }
     
  },
  // store模块导入管理,防止当前文件过大
  modules: {
    user, userAlias,
  }
})
