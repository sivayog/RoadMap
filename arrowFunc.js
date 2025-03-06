'use strict'
// arrowFunc

//normal function 
// function sum(a,b){
//     return console.log(a+b)
// }
// sum (1,2)

//with arror function 
// let sum =  (a,b)=>console.log(a+b)

// sum(1,4)
//ifsimgle argument 

// let pnum = number => console.log(number>0)

// pnum(2)

// if there is 0 arg

// let rnum =()=>{
//     console.log(Math.random().toFixed(2))
// }
// rnum()

//by using anonumous function 

// document.addEventListener('click',()=>console.log('element clicked'))
class Person {
    constructor(name) {
        this.name = name;
    }

    printarrow() {
        setTimeout(() => {
            console.log('arrow', this.name); // 'this' correctly refers to the instance
        }, 100);
    }
    // print(){
    //     setTimeout(function (){
    //         console.log('arrow', this.name);
    //     },100)
    // }
    //fixes for this key word
    // print() {
    //     setTimeout(function () {
    //         console.log('arrow', this.name);
    //     }.bind(this), 100);
    // }
    
}

const person = new Person('siva');
person.printarrow(); // Output after 100ms: arrow siva
person.print()

// Uses an arrow function (() => {}) inside setTimeout.
// Arrow functions do not have their own this. Instead, they inherit this from their surrounding scope (which is the Person instance).
// So, this.name refers to the name property of the person instance.
// ✅ Correctly prints: "arrow siva"

// Uses a regular function (function () {}) inside setTimeout.

// Regular functions have their own this, which depends on how the function is called.

// Since setTimeout is executed in the global context (or window in browsers, undefined in strict mode), this does not refer to the Person instance.

// In strict mode ("use strict"), this would be undefined, causing an error when trying to access this.name.

// Otherwise, in a non-strict environment, this.name would be undefined.

// ❌ Prints: "arrow undefined"


// How bind(this) Works Here
// The function inside setTimeout is a regular function, which means it has its own this.
// Normally, when setTimeout executes the function, this would refer to the global object (window in browsers, undefined in strict mode).
// By using .bind(this), we explicitly bind this to the current instance of Person.
// This ensures that inside the function, this refers to the Person instance rather than the global object.

