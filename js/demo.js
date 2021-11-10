"use strict";
/**
 * 基本数据类型
 * Boolean
 * Number
 * String
 * Array
 * Enum 枚举
 * Any
 * Void
*/
// Boolean
console.log('--------Boolean-------');
var isBool;
// isBool = false
// console.log(isBool,'isBool')
var isBoolean = false;
console.log(isBoolean, 'Boolean');
// Number
console.log('--------number-------');
var numberType = 11;
function consoleNumber() {
    numberType++;
    console.log(numberType, 'Number');
}
consoleNumber();
//  除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
// String
console.log('--------String-------');
var stringType = 'shiqicong';
var consoleString = function () {
    stringType += 'Hello';
    console.log(stringType, 'String');
};
consoleString();
// Array
console.log('--------Array-------');
var arrType1 = [1, 2, 3];
var consoleArr = function () {
    arrType1.push(4);
    console.log(arrType1, 'Array1');
};
consoleArr();
var arrType2 = ['shi', 'qi', 'cong'];
var consoleArr2 = function () {
    var splitArr = arrType2.join('').split('');
    console.log(splitArr, 'Array2');
};
consoleArr2();
/**
 * Enum  枚举是指将变量的值一一列举出来，变量只限于列举出来的值的范围内取值，使用枚举我们可以定义一些带名字的常量。
 * 使用枚举可以清晰地表达意图或创建一组有区别的用例。
 * TypeScript支持数字的和基于字符串的枚举。
*/
console.log('----枚举-------------------');
// 数字枚举
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"]); //0
console.log(Days["Mon"]); //1
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
// 手动赋值  
var Week;
(function (Week) {
    Week[Week["Sun"] = 7] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
;
console.log(Week["Sun"] === 7); // true
console.log(Week["Mon"] === 1); // true
console.log(Week["Tue"]); // 2
console.log(Week["Sat"]); //6
// 未手动赋值的枚举项与手动赋值的重复 会被后者覆盖
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 3] = "Sun";
    Days2[Days2["Mon"] = 1] = "Mon";
    Days2[Days2["Tue"] = 2] = "Tue";
    Days2[Days2["Wed"] = 3] = "Wed";
    Days2[Days2["Thu"] = 4] = "Thu";
    Days2[Days2["Fri"] = 5] = "Fri";
    Days2[Days2["Sat"] = 6] = "Sat";
})(Days2 || (Days2 = {}));
;
console.log(Days2["Sun"] === 3); // true
console.log(Days2["Wed"] === 3); // true
console.log(Days2[3] === "Sun"); // false
console.log(Days2[3] === "Wed"); // true
// 字符串枚举：在一个字符串枚举里，每个成员都必须用字符串字面量
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// 异构枚举：枚举可以混合字符串和数字成员
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
// Any
console.log('--------any------');
var notSure = 10;
notSure = 'hello';
notSure = false;
console.log(notSure);
var list = [1, 'hello', false];
console.log(list);
// Void 声明函数
console.log('--------Void-------');
function tell() {
    return 'hello';
}
function say() {
    return 10;
}
function tello1() {
    console.log('hello');
}
tello1();
