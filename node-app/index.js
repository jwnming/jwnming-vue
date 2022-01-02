

// 引入express模块并创建app实例
const express = require("express");
const app = express();

// 引入 usertest router
const usertest = require("./routers/user/usertest");
// 引入 mysql-user router 
const user = require("./routers/user/user");
// 引入 body-parser 模块
const bodyParser = require("body-parser");

// 引入passport 验证token
const passport = require("passport");




// 路由配置测试
app.get("/", (req, resp) => {
    resp.send("hello world");
})

// 使用router
app.use("/api/users", usertest);
app.use("/api/mysql", user);
// body-arser 中间件
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);
// passport 初始化
app.use(passport.initialize());

require("./config/passport")(passport);

// 端口号
const port = process.env.PORT || 5000;
// 监听
app.listen(port, () => {
    // 控制台打印出提示信息及端口号
    console.log(`Server running on port ${port}`); 
})
