
// 获取mysql模块
const mysql = require("mysql");

// 连接信息配置

function getMysqlConn() {
    var conn = mysql.createConnection({
        host: "110.42.153.79",
        user: "root",
        password: "mysql123",
        database: "jwnming" // allowPublicKeyRetrieval=true"
    });
    return conn;
}


// module.exports = conn;  // 注意，属性被其他js引入后，conn不能直接使用，其需要有个变量接收
module.exports = getMysqlConn;
