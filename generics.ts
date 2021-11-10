console.log('-----------generics-----------')

// 泛型创建
function Hello1<T>(arg:T):T{
    return arg
}
const outPut = Hello1<number>(123)
const outPut2 = Hello1<string>('sqc')
const outPut3 = Hello1<boolean>(true)
const outPut4 = Hello1<number[]>([1,2,3])

console.log(outPut)
console.log(outPut2)
console.log(outPut3)
console.log(outPut4)

// 泛型的基本应用  T类型的数组
function HelloWord<T>(str:T[]):T[]{
    return str
}
const getList:Array<string> = HelloWord(['1','2','3','4'])

console.log(getList)

function sayHello<T>(arg:T):T{
    return arg
}
const mySay:<M>(arg:M)=> M = sayHello
const mySay2:{<K>(arg:K):K} = sayHello

console.log(mySay('hello'))
console.log(mySay2('hello2'))

interface myInterface{
    <T>(arg:T):T
}
function myFunction<T>(arg:T):T{
    return arg
}
const newFunction:myInterface = myFunction
// 不指定类型可以传任意类型
console.log(newFunction('11'))
console.log(newFunction(true))
console.log(newFunction<string>('hello-my-function'))
console.log(newFunction<number>(2333))

// 泛型 类
class HelloNum<T>{
    num:T;
    add:(x:T,y:T)=>T;
}

let myhelloNum = new HelloNum<string>()

myhelloNum.num = 'HELLO'
myhelloNum.add = (x,y) =>{return x+y}
// console.log(myhelloNum.add('hahahh',8999))
console.log(myhelloNum.add('hahahh',myhelloNum.num))
