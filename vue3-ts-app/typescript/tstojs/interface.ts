(() => {
    interface IUser {
        id: string;
        name: string ;
    }


    function showUserName(user: IUser) {
        return user.name;
    }

    const user = {
        id: "1001",
        name: "JWnMing"
    }

    console.log(showUserName(user));
})();