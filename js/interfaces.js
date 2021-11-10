"use strict";
console.log('-------interfaces-------');
function person(Attributes) {
    console.log(Attributes.name);
}
var AttrObj = { name: 'sqc' };
person(AttrObj);
function peopleTest(peopleAttr) {
    console.log(peopleAttr);
}
var obj = { name: 'sqc', age: 18 };
peopleTest(obj);
function hightStudent(studentAttr) {
    console.log(studentAttr.name + ":" + studentAttr.age + " " + studentAttr.school);
}
var newStudent1 = { name: 'sqc', age: 18, school: 'ml', isBaseBJ: true };
hightStudent(newStudent1);
var newStudent2 = { school: 'ml' };
hightStudent(newStudent2);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result > -1) {
        return true;
    }
    else {
        return false;
    }
};
console.log(mySearch('beijing', 'jing'));
var myArray = ['10', '20'];
console.log(myArray[1]);
var myBoolean = [true, false];
console.log(myBoolean[0]);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = h;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var mySquare = {};
mySquare.color = "blue";
mySquare.sideLength = 10;
console.log(mySquare, 'mySquare');
var mySquare2 = {};
mySquare2.color = "blue";
mySquare2.sideLength = 10;
mySquare2.penWidth = 5;
console.log(mySquare2, 'mySquare2------');
