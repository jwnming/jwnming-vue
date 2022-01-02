import Mock from 'mockjs';

// 设置超时时间
Mock.setup({
    timeout: '200-600',
});

// mock: get请求获取商品信息
Mock.mock(
    '/goods/getAll',
    'get',
    () => {
        let goodList = [
            {
                goodsNo: '20210001',
                goodsName: '苹果',
                goodsPicture: '../assets/logo.png',
            },
            {
                goodsNo: '20210002',
                goodsName: '香蕉',
                goodsPicture: '../assets/logo.png',
            },
            {
                goodsNo: '20210003',
                goodsName: '梨',
                goodsPicture: '../assets/logo.png',
            },
            {
                goodsNo: '20210004',
                goodsName: '哈哈',
                goodsPicture: '../assets/logo.png',
            },
            {
                goodsNo: '20210004',
                goodsName: '哈哈',
                goodsPicture: '../assets/logo.png',
            },
            {
                goodsNo: '20210004',
                goodsName: '哈哈',
                goodsPicture: '../assets/logo.png',
            }

        ]
        return goodList;
    }
);

// mock: get请求获取商品信息
Mock.mock(
    '/goods/fileUpload',
    'get',
    () => {
        let data = {
            data: {
                goodsPicture: "../../assets/logo.png"
            }
        }
        return data;
    }
);

// mock: 根据商品编号获取
Mock.mock(
    '/goods/loadGoodsByNo',
    'get',
    () => {
        let goodsForm =
        {
            goodsNo: '20210001',
            goodsName: '苹果',
            goodsPicture: '../assets/logo.png',
            goodsPrice: "22.9",
            goodsDescription: "<h3>描述信息</h3>",
        }

        return goodsForm;
    }
);


// mock: post请求添加商品信息
Mock.mock(
    '/goods/addGoods',
    'post',
    () => {
        let data = {
            data: {
                code: 'sucess',
                msg: ''
            }
        }
        return data;
    }
);

// mock: 根据id请求获取商品信息
Mock.mock(
    '/goods/goodsDelete',
    'delete',
    () => {
        let data = {
            data: {
                code: 'sucess',
                msg: ''
            }
        }
        return data;
    }
);

// mock: 搜索
Mock.mock(
    '/goods/search',
    'get',
    () => {
        let data = [
            {
                goodsNo: '20210001',
                goodsName: '苹果',
                goodsPicture: '../assets/logo.png',
            },
        ]
        return data;
    }
);

// mock: 获取菜单
Mock.mock(
    '/menu/loadMenus',
    'get',
    () => {
        let data = [
            {
                menuName: "数 据 管 理",
                menuIcon: "IconMenu",
                menuGroup: "",
                menuLevel: 1,
                menuUrl: "",
                children: [
                    {
                        menuGroup: "商 品 相 关",
                        menuItems: [
                            {
                                menuName: "商 品 管 理",
                                menuIcon: "",
                                menuGroup: "商 品 相 关",
                                menuLevel: "1-1",
                                menuUrl: "/goods/goodsList",
                                children: []
                            },
                            {
                                menuName: "订 单 管 理",
                                menuIcon: "",
                                menuGroup: "商 品 相 关",
                                menuLevel: "1-2",
                                menuUrl: "/goods/",
                                children: []
                            },
                            {
                                menuName: "地 址 管 理",
                                menuIcon: "",
                                menuGroup: "商 品 相 关",
                                menuLevel: "1-3",
                                menuUrl: "/goods/",
                                children: []
                            },
                        ]
                    },
                ]
            },
            {
                menuName: "用 户 管 理",
                menuIcon: "IconMenu",
                menuGroup: "",
                menuLevel: 2,
                children: [
                    {
                        menuGroup: "用 户 信 息",
                        menuItems: [
                            {
                                menuName: "用 户 列 表",
                                menuIcon: "",
                                menuGroup: "用 户 信 息",
                                menuLevel: "2-1",
                                menuUrl: "/user/userList",
                                children: []
                            },
                            {
                                menuName: "支 付 管 理",
                                menuIcon: "",
                                menuGroup: "用 户 信 息",
                                menuLevel: "2-2",
                                menuUrl: "/user/",
                                children: []
                            },
                            {
                                menuName: "地 址 管 理",
                                menuIcon: "",
                                menuGroup: "用 户 信 息",
                                menuLevel: "2-3",
                                menuUrl: "/user/",
                                children: []
                            },
                            {
                                menuName: "实 名 认 证",
                                menuIcon: "",
                                menuGroup: "用 户 信 息",
                                menuLevel: "2-4",
                                menuUrl: "/user/",
                                children: []
                            }
                        ]
                    },
                    {
                        menuGroup: "用 户 操 作",
                        menuItems: [
                            {
                                menuName: "授 权 管 理",
                                menuIcon: "",
                                menuGroup: "用 户 操 作",
                                menuLevel: "2-5",
                                menuUrl: "/user/",
                                children: []
                            },
                            {
                                menuName: "登 录 日 志",
                                menuIcon: "",
                                menuGroup: "用 户 操 作",
                                menuLevel: "2-6",
                                menuUrl: "/user/",
                                children: []
                            },
                        ]
                    },
                ]
            },
            {
                menuName: "系 统 统 计",
                menuIcon: "IconMenu",
                menuGroup: "",
                menuLevel: 3,
                children: [
                    {
                        menuGroup: "用 户 统 计",
                        menuItems: [
                            {
                                menuName: "用 户 统 计",
                                menuIcon: "",
                                menuGroup: "用 户 统 计",
                                menuLevel: "3-1",
                                menuUrl: "/goods/",
                                children: []
                            },
                        ]
                    },
                    {
                        menuGroup: "系 统 报 表",
                        menuItems: [
                            {
                                menuName: "用 户 报 表",
                                menuIcon: "",
                                menuGroup: "系 统 报 表",
                                menuLevel: "3-2",
                                menuUrl: "/goods/",
                                children: []
                            },
                            {
                                menuName: "交 易 报 表",
                                menuIcon: "",
                                menuGroup: "系 统 报 表",
                                menuLevel: "3-3",
                                menuUrl: "/goods/",
                                children: []
                            },
                            {
                                menuName: "交 易 报 表",
                                menuIcon: "",
                                menuGroup: "系 统 报 表",
                                menuLevel: "3-4",
                                menuUrl: "/goods/",
                                children: []
                            }
                        ]
                    },
                ]
            },
            {
                menuName: "系 统 管 理",
                menuIcon: "IconMenu",
                menuGroup: "",
                menuLevel: 4,
                children: [
                    {
                        menuGroup: "系 统 配 置",
                        menuItems: [
                            {
                                menuName: "参 数 管 理",
                                menuIcon: "",
                                menuGroup: "系 统 配 置",
                                menuLevel: "4-1",
                                menuUrl: "/goods/",
                                children: []
                            },
                            {
                                menuName: "菜 单 管 理",
                                menuIcon: "",
                                menuGroup: "系 统 配 置",
                                menuLevel: "4-2",
                                menuUrl: "/goods/",
                                children: []
                            },
                        ]
                    },
                    {
                        menuGroup: "系 统 监 控",
                        menuItems: [
                            {
                                menuName: "资 源 监 控",
                                menuIcon: "",
                                menuGroup: "系 统 监 控",
                                menuLevel: "4-4",
                                menuUrl: "/goods/",
                                children: []
                            },
                            {
                                menuName: "交 易 监 控",
                                menuIcon: "",
                                menuGroup: "系 统 监 控",
                                menuLevel: "4-5",
                                menuUrl: "/goods/",
                                children: []
                            },
                            {
                                menuName: "实 名 认 证",
                                menuIcon: "",
                                menuGroup: "用 户 信 息",
                                menuLevel: "4-6",
                                menuUrl: "/goods/",
                                children: []
                            }
                        ]
                    },
                ]
            },
        ]
        return data;
    }
);

// mock: 登录
Mock.mock(
    '/user/login',
    'post',
    () => {
        let data = {
            data: {
                code: 'sucess',
                msg: '',
                token: "jwnming-asdfasdfasdfasdfasdfasdfasdfasdfadf324r5esdfq235efw3",
            }
        }
        return data;
    }
);

// mock: 获取用户
Mock.mock(
    '/user/getAll',
    'get',
    () => {
        let data = [
            {
                userNo: '20220001',
                userName: 'JWnMing',
                userSex: '男',
                userAddress: "地球中国大陆四川省成都市",
                userPicture: '../assets/logo.png',
            },
            {
                userNo: '20220002',
                userName: 'JWnMing',
                userSex: '男',
                userAddress: "地球中国大陆四川省成都市",
                userPicture: '../assets/logo.png',
            },
            {
                userNo: '20220003',
                userName: 'JWnMing',
                userSex: '男',
                userAddress: "地球中国大陆四川省成都市",
                userPicture: '../assets/logo.png',
            },
            {
                userNo: '20220004',
                userName: 'JWnMing',
                userSex: '男',
                userAddress: "地球中国大陆四川省成都市",
                userPicture: '../assets/logo.png',
            },
        ]
        return data;
    }
);






