// 用户登录和注册程序

const express = require("express");
const router = express.Router();

// get请求 最后的路由为/test，返回一个json，public 接口
router.get("/test", (req, resp) => {
    resp.json({msg: "登录信息"})
})


module.exports = router;