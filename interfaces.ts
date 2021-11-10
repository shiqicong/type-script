console.log('-------interfaces-------')

function person(Attributes: { name: string }) {
    console.log(Attributes.name);
  }
  
  let AttrObj = { name: 'sqc'};
  person(AttrObj);

// interface 接口的创建
  interface peopleAttrType {
      name:string;
      age:number;
  }

  function peopleTest (peopleAttr:peopleAttrType) {
      console.log(peopleAttr)
  }

  let obj = {name:'sqc',age:18}
  peopleTest(obj)


//   接口可选属性
interface studentAttr {
    name?:string;
    age?:number;
    school?:string;
    isBaseBJ?:boolean
}

function hightStudent(studentAttr:studentAttr){
   console.log(studentAttr.name+":"+studentAttr.age+" "+studentAttr.school)
}

const newStudent1 ={name:'sqc',age:18,school:'ml',isBaseBJ:true}
hightStudent(newStudent1)

const newStudent2 ={school:'ml'}
hightStudent(newStudent2)

// 接口的 函数类型
interface SearchFunc{
  (source:string,subString:string):boolean
}

let mySearch:SearchFunc

mySearch = (src:string,sub:string)=>{
  const result = src.search(sub)
  if(result>-1){
    return true
  }else{
    return false
  }
}
console.log(mySearch('beijing','jing'))

// 接口的数组类型
interface stringArray {
  [index:number]:string
}
let myArray:stringArray = ['10','20']

console.log(myArray[1])

interface booleanArray {
  [index:number]:boolean
}
let myBoolean:booleanArray = [true,false]
console.log(myBoolean[0])

// 接口的class类型

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date):any;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: Date, m: Date) { 
    this.currentTime = h
  }
  setTime(d: Date) {
      this.currentTime = d;
  }
}

//接口的继承
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let mySquare = <Square>{};
mySquare.color = "blue";
mySquare.sideLength = 10;

console.log(mySquare,'mySquare')


// 一个接口可以继承多个接口，创建出多个接口的合成接口。
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square2 extends Shape, PenStroke {
  sideLength: number;
}

let mySquare2 = <Square2>{};
mySquare2.color = "blue";
mySquare2.sideLength = 10;
mySquare2.penWidth = 5;

console.log(mySquare2,'mySquare2------')




