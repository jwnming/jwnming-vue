import Mock from 'mockjs';

// 设置超时时间
Mock.setup({
    timeout: '200-600',
});

// mock: get请求获取用户信息
Mock.mock(
    '/user/userinfo',
    'get',
    () => {
        let user = {
            name: 'JWnMing',
            age: 25,
            dsc: "真牛皮啊!",
        }
        return user;
    }
);


// mock: get请求，拼接参数
Mock.mock(
    '/\/login.*/',
    'get',
    () => {
        let user = {
            name: 'JWnMing',
            age: 25,
            dsc: "真牛皮啊!",
            username: 'jwnming',
            password: '123456',
        }
        return user;
    }
);


