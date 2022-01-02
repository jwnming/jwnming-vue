(function () {
    /* 可迭代性
     * 当一个对象实现了Symbol.iterator属性时，我们认为它是可迭代的。
     * 一些内置的类型如 Array，Map，Set，String，Int32Array，Uint32Array等都已经实现了各自的Symbol.iterator。
     * 对象上的 Symbol.iterator函数负责返回供迭代的值。
     */
    let someArray = [1, 'str', false];
    for (let item of someArray) { // 便利值
        console.log(item);
    }
    let list = [3, 4, 5, 6];
    for (let item in list) { // 遍历索引
        console.log(item);
    }
    let pets = new Set(["Cat", "Dog", "Hamster"]);
    pets["species"] = 'mammals';
    console.log(pets["species"]);
    for (let pet in pets) {
        console.log(pet); // "species"
    }
    for (let pet of pets) {
        console.log(pet); // "Cat", "Dog", "Hamster"
    }
    pets.forEach((item) => {
        console.log(item);
    });
})();
