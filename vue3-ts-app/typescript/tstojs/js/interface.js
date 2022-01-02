(() => {
    function showUserName(user) {
        return user.name;
    }
    const user = {
        id: "1001",
        name: "JWnMing"
    };
    console.log(showUserName(user));
})();
