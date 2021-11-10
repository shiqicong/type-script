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
console.log('--------Boolean-------')
var isBool:Boolean
// isBool = false
// console.log(isBool,'isBool')
var isBoolean:Boolean = false
console.log(isBoolean,'Boolean')

// Number
console.log('--------number-------')
var numberType:number = 11
function consoleNumber(){
  numberType++
  console.log(numberType,'Number')
}
consoleNumber()

//  除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
console.log(hexLiteral)
console.log(binaryLiteral)
console.log(octalLiteral)

// String
console.log('--------String-------')
var stringType:string = 'shiqicong'
const consoleString = ()=>{
  stringType+='Hello'
  console.log(stringType,'String')
}
consoleString()

// Array
console.log('--------Array-------')
var arrType1:number[]=[1,2,3]
const consoleArr =()=>{
  arrType1.push(4)
  console.log(arrType1,'Array1')
}
consoleArr()

let arrType2:Array<string>=['shi','qi','cong']
const consoleArr2 = () =>{
    const splitArr = arrType2.join('').split('')
    console.log(splitArr,'Array2')
}
consoleArr2()

/**
 * Enum  枚举是指将变量的值一一列举出来，变量只限于列举出来的值的范围内取值，使用枚举我们可以定义一些带名字的常量。 
 * 使用枚举可以清晰地表达意图或创建一组有区别的用例。
 * TypeScript支持数字的和基于字符串的枚举。
*/

console.log('----枚举-------------------')
// 数字枚举
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"]);  //0
console.log(Days["Mon"]); //1
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true

// 手动赋值  
enum Week {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Week["Sun"] === 7); // true
console.log(Week["Mon"] === 1); // true
console.log(Week["Tue"]); // 2
console.log(Week["Sat"]);  //6

// 未手动赋值的枚举项与手动赋值的重复 会被后者覆盖
enum Days2 {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Days2["Sun"] === 3); // true
console.log(Days2["Wed"] === 3); // true
console.log(Days2[3] === "Sun"); // false
console.log(Days2[3] === "Wed"); // true

// 字符串枚举：在一个字符串枚举里，每个成员都必须用字符串字面量
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
} 
// 异构枚举：枚举可以混合字符串和数字成员
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

// Any
console.log('--------any------')
 let notSure:any =10
 notSure='hello'
 notSure=false
 console.log(notSure)

 let list:any[]=[1,'hello',false]
console.log(list)

  // Void 声明函数
  console.log('--------Void-------')
  function tell():string{
    return 'hello'
  }

  function say():number{
    return 10
  }

  function tello1():void{
    console.log('hello')
  }

  tello1()
  