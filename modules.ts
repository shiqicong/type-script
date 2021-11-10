/**
 * Module
 * 1、模块化、可复用
 * 2、封装变量和函数
*/
module Validator{
    // 使用export暴露想要对外提供的类或方法, StringValidator因为是一个内部接口
    interface StringValidator{
        isAcceptable(s:string):boolean;
    }

    export class ZipCodeValidator implements StringValidator{
        zipRegexp:RegExp = /^\d{6}$/;

        isAcceptable(zip:string){
            return this.zipRegexp.test(zip);
        }
    }

    export class LettersValidator implements StringValidator{
        lettersRegexp:RegExp = /^[a-zA-Z]+$/;

        isAcceptable(letters:string){
            return this.lettersRegexp.test(letters);
        }
    }
}


var str = ['150000', 'hello', '000011111a'];

var zipCodeVali = new Validator.ZipCodeValidator();
var lettersVali = new Validator.LettersValidator();

str.forEach(s=>{
    if(zipCodeVali.isAcceptable(s)){
        console.log(s,'1');
    }else if(lettersVali.isAcceptable(s)){
        console.log(s,'2');
    }else{
        console.log(s,'3');
    }
})