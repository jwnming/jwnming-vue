
const express = require("express");
const router = express.Router();

const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "110.42.153.79",
    user: "root",
    password: "mysql123",
    database: "jwnming" // allowPublicKeyRetrieval=true"
});

router.get("/user",(req, resp) => {
    conn.connect();
    conn.query("select * from J_USER", [], function(err, result) {
        if (err) {
            console.log("数据库异常", err.message);
            resp.json({"msg": "数据库连接异常"})
        } else {
            console.log(result)
            
            resp.json(result)
        }
    
    })
    // 关闭连接
    conn.end();
});


module.exports = router;
