"use strict";
/**
 * 函数
*/
//命名函数
function add(x, y) {
    return 'oooo';
}
function add1(x, y) {
    return 'hello ts';
}
//匿名函数
var myAdd = function (x, y) {
    return 'hello';
};
// 推断类型
var maAdd2 = function (n, a) {
    return a;
};
// 你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
var myAdd3 = function (x, y) { return x + y; };
console.log(add(10, 23));
console.log(myAdd('hello', 'ts'));
console.log(maAdd2('sqc', 18));
console.log(myAdd3(1, 5));
console.log('--------------');
/**
 * 函数可选和默认参数
*/
// 参数要和 函数定义的参数范围相匹配
// console.log(maAdd2('hello'))
// console.log(maAdd2('hello','1','2'))
// 可选参数
function newAdd(name, age) {
    if (age) {
        return name + age;
    }
    else {
        return name;
    }
}
console.log(newAdd('sqc'));
console.log(newAdd('sqc', 18));
//默认参数
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "hello"; }
    return firstName + " " + lastName;
}
console.log(buildName());
console.log(buildName('sqc'));
console.log(buildName('sqc', 'yes'));
// console.log(buildName('sqc','yes','hello'))
/**
 * 剩余参数
*/
function joinName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
console.log(joinName("sqc", "Samuel", "Lucas", "MacKinzie"));
function newbuildName() {
    var restOfName = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        restOfName[_i] = arguments[_i];
    }
    return restOfName.join(" ");
}
console.log(newbuildName("Joseph", "Samuel", "Lucas", "MacKinzie"));
function testType() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest;
}
console.log(testType('1', 2, [1, 2, 3]));
