
const express = require("express");
const router = express.Router();

const mysqlConn = require("../../config/mysql");



router.get("/getAllGoods",(req, resp) => {
    mysqlConn.connect();
    mysqlConn.query("select * from J_GOODS", [], function(err, result) {
        if (err) {
            console.log("数据库异常", err.message);
            resp.json({"msg": "数据库连接异常"})
        } else {
            console.log(result)            
            resp.json(result)
        }
    })
    mysqlConn.end();
});


module.exports = router;
