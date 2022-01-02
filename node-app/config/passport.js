
// keys
const keys = require("../config/keys");
// mysql
const mysql = require("mysql");



// passport-jwt配置
const JwtStrategy = require("passport-jwt").Strategy, ExtractJwt = require("passport-jwt").ExtractJwt;
var ops = {};
ops.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
ops.secretOrKey = keys.secretOrKey;


module.exports = passport => {
    passport.use(new JwtStrategy(ops, (jwtpayload, done) => {
        // console.log(jwtpayload)
        return done(null, {code: "sucess"});
    }))
} 