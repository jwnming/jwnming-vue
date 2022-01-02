
// 获取mysql模块
const { query } = require("express");
const mysql = require("mysql");
// 连接池
var pool = mysql.createPool({
    host: "110.42.153.79",
    user: "root",
    password: "mysql123",
    database: "jwnming" // allowPublicKeyRetrieval=true"

});

// 封装sql发送函数
function mysqlQuery(sql, callback) {
    pool.getConnection(function(err, connection) {
        connection.query(sql, function(err, rows) {
            callback(err, rows);
            connection.release();// 释放资源
        })
    })

}


// module.exports = conn;  // 注意，属性被其他js引入后，conn不能直接使用，其需要有个变量接收
module.exports.query = query;
