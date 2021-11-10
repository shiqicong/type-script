"use strict";
console.log('-----------generics-----------');
// 泛型创建
function Hello1(arg) {
    return arg;
}
var outPut = Hello1(123);
var outPut2 = Hello1('sqc');
var outPut3 = Hello1(true);
var outPut4 = Hello1([1, 2, 3]);
console.log(outPut);
console.log(outPut2);
console.log(outPut3);
console.log(outPut4);
// 泛型的基本应用  T类型的数组
function HelloWord(str) {
    return str;
}
var getList = HelloWord(['1', '2', '3', '4']);
console.log(getList);
function sayHello(arg) {
    return arg;
}
var mySay = sayHello;
var mySay2 = sayHello;
console.log(mySay('hello'));
console.log(mySay2('hello2'));
function myFunction(arg) {
    return arg;
}
var newFunction = myFunction;
// 不指定类型可以传任意类型
console.log(newFunction('11'));
console.log(newFunction(true));
console.log(newFunction('hello-my-function'));
console.log(newFunction(2333));
// 泛型 类
var HelloNum = /** @class */ (function () {
    function HelloNum() {
    }
    return HelloNum;
}());
var myhelloNum = new HelloNum();
myhelloNum.num = 'HELLO';
myhelloNum.add = function (x, y) { return x + y; };
// console.log(myhelloNum.add('hahahh',8999))
console.log(myhelloNum.add('hahahh', myhelloNum.num));
