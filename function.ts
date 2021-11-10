/**
 * 函数
*/

//命名函数

function add(x:number,y:number){
    return 'oooo'
}

function add1(x:number,y:number):string{
    return 'hello ts'
}

//匿名函数
const myAdd = function(x:string,y?:string):string{
    return 'hello'
}
// 推断类型
const maAdd2:(name:string,age:number)=>number=function(n:string,a:number):number{
    return a
}

// 你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
let myAdd3: (baseValue: number, increment: number) => number = function(x, y) { return x + y; }


console.log(add(10,23))
console.log(myAdd('hello','ts'))
console.log(maAdd2('sqc',18))
console.log(myAdd3(1,5))

console.log('--------------')
/**
 * 函数可选和默认参数
*/
// 参数要和 函数定义的参数范围相匹配

// console.log(maAdd2('hello'))
// console.log(maAdd2('hello','1','2'))

// 可选参数
function newAdd(name:string,age?:number){
    if(age){
        return name + age
    }else{
        return name
    }
}

console.log(newAdd('sqc'))
console.log(newAdd('sqc',18))

//默认参数
function buildName(firstName?: string, lastName = "hello") {
    return firstName + " " + lastName;
}

console.log(buildName())

console.log(buildName('sqc'))
console.log(buildName('sqc','yes'))
// console.log(buildName('sqc','yes','hello'))

/**
 * 剩余参数
*/

function joinName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
  
 console.log( joinName("sqc", "Samuel", "Lucas", "MacKinzie"))

function newbuildName(...restOfName: string[]) {
    return  restOfName.join(" ");
  }
  
console.log(newbuildName("Joseph", "Samuel", "Lucas", "MacKinzie"))



function testType(...rest:any[]){
    return rest
}
console .log(testType('1',2,[1,2,3]))



