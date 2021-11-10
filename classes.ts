// 创建
class People {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    getInfo(){
        return this.name+':'+this.age
    }
}

const newPeople = new People('sqc',18)
console.log(newPeople.getInfo())

// 继承
class Person {
   name:string;
   age:number;
   constructor(name:string,age:number){
        this.name = name
        this.age = age
   }
   tell(){
       return this.name+':'+this.age
   }
  
}

// 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
class student extends Person {
    school:string;
    constructor(name:string,age:number,school:string){
      super(name,age)
      this.school = school
    }
    tell() {
        return this.name+':'+this.age+':'+this.school
    }
}

const newStudent = new student('sqc',18,'ml');
console.log(newStudent.tell())

//访问修饰符 public private  protected readonly

// 成员都默认为 public
class Animal1 {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// private 当成员被标记成 private时，它就不能在声明它的类的外部访
class Animal2 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Animal3 extends Animal2 {
    age:number;
    constructor(name:string,age:number){
        super(name)
        this.age = age
    }
    tell(){
        return this.name
    }
}

new Animal3('sqc',18)

new Animal2("Cat").name; // 错误: 'name' 是私有的.

// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问
class PersonTest {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class newTest extends PersonTest {
    private department: string;
    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new newTest("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误

//  readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.


//封装
class Hello {
    private _age:number | undefined;
    tell(){
        return this._age
    }
    get age():number|undefined{
        return this._age
    }
    set age(newage:number|undefined){
        this._age = newage
    }
}

var newHello = new Hello()
newHello.age = 10
console.log(newHello.tell())