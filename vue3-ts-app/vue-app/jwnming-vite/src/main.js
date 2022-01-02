import { createApp, reactive} from 'vue'
import App from './App.vue'
import './index.css'
// 导入Mock
import './mock/mock.js'
// import router from './router/router';
// import nestedrouter from './router/nestedrouter';
// import jsjumprouter from './router/jsjumprouter';

const app = createApp(App);
// app.use(router);
// app.use(nestedrouter);
// app.use(jsjumprouter);
app.mount('#app');
