
const express = require("express");
const getMysqlConn = require("../../config/mysql");
const router = express.Router();

// 引入mysql配置
const mysqlConn = require("../../config/mysql"); 
// 引入schema
const User = require("../../moudles/User");
// 引入加密模块
const bcrypt = require("bcrypt");
// 引入公共头像模块
const gravatar = require("gravatar");
// 引入token工具
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// 引入passport
const passport = require("passport");



var selectSql = "SELECT USER_ID AS userId, USER_NO AS userNo, USER_NAME AS userName, USER_ADDR AS userAddr, USER_EMAIL AS userEmail, USER_CREATE_TIME AS userCreateTime, USER_UPDATE_TIME AS userUpdateTime, USER_PICTURE AS userPicture " +
    "FROM J_USER";
var insertSql = "INSERT INTO J_USER(USER_NO, USER_NAME, USER_ADDR, USER_EMAIL, USER_CREATE_TIME, USER_UPDATE_TIME, USER_PICTURE) VALUES(?,?,?,?,?,?,?)"

// 用户注册
router.post("/addUser", (req, resp) => {
    // 根据用户编号查询
    
    var password = req.body.password;
    // 密码加密
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                throw err;
                
            }
            // 替换加密的密码
        })
    }) 
});

// 获取所有用户
router.get("/getAllUser", (req, resp) => {
    var conn = getMysqlConn();
    conn.connect();
    conn.query(selectSql, [], function(err, result) {
        if (err) {
            console.log("连接数据库异常：", err.message);
            resp.json({"msg": "数据库连接异常"});
        } else {
            console.log("数据库查询结果：", result);    
            resp.json(result);
        }
    })
    conn.end();
});
    
// 根据用户编号获取用户信息
router.get("/getUserByNo", (req, resp) => {
    var userNo = req.query.userNo;
    var conn = getMysqlConn();
    conn.connect();
    conn.query(selectSql + " where USER_NO = ?", [userNo], function(err, result) {
        if (err) {
            console.log("数据库异常", err.message);
            resp.json({"msg": "数据库连接异常"})
        } else {
            var userPicture = gravatar.url(result.userPicture, {s: '200', r: 'pg', d: 'mm'}); // mm - 默认头像
            console.log(userPicture)
            result.userPicture = userPicture;           
            resp.json(result)
        }
    })
    conn.end();
});


// 登录-根据用户编号获取用户信息-生成token令牌
router.get("/login", (req, resp) => {
    var userNo = req.query.userNo;
    var conn = getMysqlConn();
    conn.connect();
    conn.query(selectSql + " where USER_NO = ?", [userNo], function(err, result) {
        if (err) {
            console.log("数据库异常", err.message);
            resp.json({"msg": "数据库连接异常"})
        } else {
            var password = userNo;
            // 模拟密码匹配
            // bcrypt.compare(userNo, hash, (err, ss) => { })
            /*bcrypt.compare(password, result.userNo).then(isMatch => {
                if (isMatch) {
                    resp.json(result); // 返回信息
                } else {
                    resp.status(400).json({msg: '密码错误！'});
                }
            }).catch(e => {
                resp.status(500).json({msg: '登录异常'});
            });*/
            if (result == []) {
                resp.status(400).json({msg: '密码错误！'});
            } else {

                // token：jwt.sign("规则"， “加密方式”， “过期时间”， 回调函数)
                var rule = {id: result.userNo, name: result.userNo}  // 
                jwt.sign(rule, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                    resp.status(200).json({code: "sucess", token: "Bearer " + token});
                });
                
            }
        }
    })
    conn.end();
});


// 当前用户操作-验证token
router.get("/token", passport.authenticate("jwt", {session: false}), (req, resp) => {
    resp.status(200).json({msg: "secuess"});
});


module.exports = router;
