(() => {
    // str这个参数是string类型，去掉:String就是js代码
    function sayHi(str:string) {
        return "Hello " + str;
    }

    let text = 'JWnMing';
    console.log(sayHi(text));


    // 冷门
    console.log(1 && 2);
    let a = null;
    a &&= 2;
    console.log(a);

})();