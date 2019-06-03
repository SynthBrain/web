"use sctrict";

var userName = "John";
var userLastName = "Smith";
var obj = {};
var mass = [];
//userName.charAt

console.log(userName.indexOf("oh", 0));

var userFullName = `UserFullName: ${userName} ${userLastName}`;

console.log(userName, userLastName);
console.log(userFullName);


function myFunc(){
    let name = 1;
    
    function displayName(){
        console.log(name);
        return name
    }
    name++;
    return displayName;
}

let qwe = myFunc();

// document.open();
// document.write(" Hello ");
// document.write(`<h1>Number: ${qwe()} </h1>`);
// document.write(" Hello ");
// document.write(qwe());
// document.close();
//window.open();
qwe();

//var userID = prompt("Put your ID", "")
//console.log(userFullName, +userID);

// class User1{
//     constructor(name){
//         this.nameUser = name;
//     }
//
//     GetName(){
//         return this.nameUser;
//     }
// }
//
// class Admin extends User1{
//     constructor(name){
//         super(name);
//         this._power = 100;
//     }
//
//     GetPower(){
//         return this._power;
//     }
//
//     SetPower(power){
//         this._power = power;
//     }
// }
//
// let usr = new User1("john");
// let adm = new Admin("MaxPower");
// adm.SetPower(70);
//
// console.log(usr.GetName());
// console.log(adm.GetName(), adm.GetPower());

//*******************************************
function inherit(proto) {
    function F() {}
    F.prototype = proto;
    var obj = new F;
    return obj;
}
if (!Object.create) Object.create = inherit; /* определение inherit - выше */

//*****************************************
function Super(age, name) {
    this.age = age;
    this.name = name;
    this.ob = {
        c: 32
    };
    this.indx2 = 27;
}

Super.prototype.say = function () {
    console.log("Hello ", this.age + " " + this.name)
};


//*****************************************

function User(age, name) {
    Super.apply(this, arguments);
    this.indx = 88;
    // this.ob = {
    //     c: 77
    // }
}
User.prototype = Object.create(Super.prototype);
User.prototype.constructor = User;
//************************************************

let newUser = new User(27, "Jack");
newUser.indx = 77;

let newUser1 = new User(30, "Max");
let newUser2 = new User(18, "Viki");

//delete (newUser.indx);
console.log("Вывело ", newUser.indx2, newUser1.indx2, newUser2.indx2);
console.log("Вывело ", newUser.indx, newUser1.indx, newUser2.indx);
console.log("Вывело ", newUser.ob, newUser1.ob, newUser2.ob);
console.log("Вывело ", newUser.ob, newUser1.ob.c, newUser2.ob.c);
console.log("Вывело ", newUser.age, newUser1.age, newUser2.age);
console.log("Вывело ", newUser.name, newUser1.name, newUser2.name);

newUser.say();
newUser1.say();
newUser2.say();

console.log("TYPE = ", newUser instanceof User);

//delete (newUser.ob);
console.log("Вывело ", newUser.ob);
