// console.log(this) //with running in the browser the global object is Window
// 'use strict'
//  function x(){
//     //value depend on strict mode and not stric mode
//     console.log(this)
//  }
//  x()
// window.x()
 //if this keyword value == undefied or null means in
 //non strict mode that time it will replace with global object
 //this keyword values depends on how its calling on function

//  if you call the this keyword inside the object with function and this keyword
//  value will be that object
// const obj ={
//     a:10,
//     x: function(){
//         console.log(this)
//     }
// }
// obj.x()

// const obj ={
//     a:10,
//     x: function(){
//         console.log(this.x)
//     }
// }
// obj.x()
// by using call we can share the same funtion of different object it will replace the this reference 
//based on new paramenter or object we are passing
// const stud = {
//     name: 'siva',
//     printName:function(){
//         console.log(this.age)
//     }
// }
// // stud.printName()

// const stud1 ={
//     name:'yogi',
//     age:'25'
// }
// stud.printName.call(stud1)

// const obj ={
//     a:10,
//     x :()=>{
// console.log(this)
//     }
// }
// obj.x()

// const obj ={
//     a:10,
//     x:function(){
//         const y=()=>{
//             console.log(this)
//         }
//         y()
//     }
// }
// obj.x()
// here this keyword values is refreence of the button html element
// <<button type="" onclick=alert(this)></button>></>


//call bind and apply 

// const obj ={
//     fname:'siva',
//     lname:'ananthi',
//     x:function(){
//         console.log(this.fname,this.lname)
//     }
// }
// const obj2 ={
//     fname:'sss',
//     lname:'yogi',
   
// }
// obj.x.call(obj2)

//fnction borrowig
// let x=function(){
//     console.log(this.fname,this.lname)
// }
// const obj ={
//     fname:'siva',
//     lname:'ananthi',
   
// }
// const obj2 ={
//     fname:'sss',
//     lname:'yogi',
   
// }
// x.call(obj)

// fnction borrowig with extra parametters
// let x=function(anime){
//     console.log(this.fname,this.lname,anime)
// }
// const obj ={
//     fname:'siva',
//     lname:'ananthi',
   
// }
// const obj2 ={
//     fname:'sss',
//     lname:'yogi',
   
// }
// x.call(obj,'solo leveling')

//in the apply method we will pass the extra argments with list type

// fnction borrowig with extra parametters
// let x=function(anime){
//     console.log(this.fname,this.lname,anime)
// }
// const obj ={
//     fname:'siva',
//     lname:'ananthi',
   
// }

//  x.apply(obj,['solo leveling'])

// in bind it will  return as func then we can invoke later
// let x=function(anime){
//     console.log(this.fname,this.lname,anime)
// }
// const obj ={
//     fname:'siva',
//     lname:'ananthi',
   
// }
// const obj2 ={
//     fname:'sss',
//     lname:'yogi',
   
// }
// let x1=x.bind(obj2,'solo leveling')
// console.log(x1)
// x1()