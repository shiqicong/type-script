"use strict";
/**
 * Module
 * 1、模块化、可复用
 * 2、封装变量和函数
*/
var Validator;
(function (Validator) {
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
            this.zipRegexp = /^\d{6}$/;
        }
        ZipCodeValidator.prototype.isAcceptable = function (zip) {
            return this.zipRegexp.test(zip);
        };
        return ZipCodeValidator;
    }());
    Validator.ZipCodeValidator = ZipCodeValidator;
    var LettersValidator = /** @class */ (function () {
        function LettersValidator() {
            this.lettersRegexp = /^[a-zA-Z]+$/;
        }
        LettersValidator.prototype.isAcceptable = function (letters) {
            return this.lettersRegexp.test(letters);
        };
        return LettersValidator;
    }());
    Validator.LettersValidator = LettersValidator;
})(Validator || (Validator = {}));
var str = ['150000', 'hello', '000011111a'];
var zipCodeVali = new Validator.ZipCodeValidator();
var lettersVali = new Validator.LettersValidator();
str.forEach(function (s) {
    if (zipCodeVali.isAcceptable(s)) {
        console.log(s, '1');
    }
    else if (lettersVali.isAcceptable(s)) {
        console.log(s, '2');
    }
    else {
        console.log(s, '3');
    }
});
