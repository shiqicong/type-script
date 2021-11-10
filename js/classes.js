"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 创建
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.getInfo = function () {
        return this.name + ':' + this.age;
    };
    return People;
}());
var newPeople = new People('sqc', 18);
console.log(newPeople.getInfo());
// 继承
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tell = function () {
        return this.name + ':' + this.age;
    };
    return Person;
}());
// 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    student.prototype.tell = function () {
        return this.name + ':' + this.age + ':' + this.school;
    };
    return student;
}(Person));
var newStudent = new student('sqc', 18, 'ml');
console.log(newStudent.tell());
//访问修饰符 public private  protected readonly
// 成员都默认为 public
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
// private 当成员被标记成 private时，它就不能在声明它的类的外部访
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
var Animal3 = /** @class */ (function (_super) {
    __extends(Animal3, _super);
    function Animal3(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Animal3.prototype.tell = function () {
        return this.name;
    };
    return Animal3;
}(Animal2));
new Animal3('sqc', 18);
new Animal2("Cat").name; // 错误: 'name' 是私有的.
// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问
var PersonTest = /** @class */ (function () {
    function PersonTest(name) {
        this.name = name;
    }
    return PersonTest;
}());
var newTest = /** @class */ (function (_super) {
    __extends(newTest, _super);
    function newTest(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    newTest.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return newTest;
}(PersonTest));
var howard = new newTest("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
//  readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
//封装
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.tell = function () {
        return this._age;
    };
    Object.defineProperty(Hello.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newage) {
            this._age = newage;
        },
        enumerable: false,
        configurable: true
    });
    return Hello;
}());
var newHello = new Hello();
newHello.age = 10;
console.log(newHello.tell());
