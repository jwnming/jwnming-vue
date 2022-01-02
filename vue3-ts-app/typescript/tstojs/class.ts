(() => {
    // 自定义接口
    interface IUser {
        id: string;
        name: string ;
    }


    // 自定义类
    class User {
        // 属性
        id: string;
        name: string;
        email: string;

        // 构造函数
        constructor(id: string, name: string, email: string) {
            this.id = id;
            this.name = name;
            this.email = email;
        }
    }


    function showUserInfo(user: IUser) {
        return "name:" + user.name;
    }

    const user = {
        id: "1001",
        name: "JWnMing"
    }

  
})();