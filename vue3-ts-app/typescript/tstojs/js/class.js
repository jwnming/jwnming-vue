(() => {
    // 自定义类
    class User {
        // 构造函数
        constructor(id, name, email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }
    }
    function showUserInfo(user) {
        return "name:" + user.name;
    }
    const user = {
        id: "1001",
        name: "JWnMing"
    };
})();
