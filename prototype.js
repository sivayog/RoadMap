//prototype
// let obj ={
//     name:'ananthi'
// }
// console.log(obj)

// function p(fn,ln){
//     this.fname=fn
//     this.lname=ln
// }
// p.prototype.gender='male'

// const per1 =new p('siva','yogi')
// console.log(per1.gender)

// function p(fn,ln){
//     this.fname=fn
//     this.lname=ln
// }
// p.prototype.genflname= function (){
//     return this.fname+this.lname
// }

// const per1 =new p('siva','yogi')
// console.log(per1.genflname())
//if we changes the prototype values previously created 
//prototype object geting old values and newly created 
//object will getting the new changes value of the prototype
// function p(){
//     this.name='siva'
// }
// p.prototype.age='25'
// const p1 = new p()
// console.log(p1.age)
// p.prototype={age:'5'}
// const p2 = new p()
// console.log(p2.age)

// inheretence

// class animal {
//     alive=false
//      eat(){
// console.log(`this ${this.name} ${this.age} eating`)
//     }
// }
// class dog extends animal{
//     name='tom';
//     age=24;
//     //this method only belogs to dog chile clas
//     run() {
//         console.log(`this ${this.name} running`)
//     }
// }
// const DOG = new dog()
// console.log(DOG.eat())
// console.log(DOG.alive)
// console.log(DOG.run())


//object.create
//prototype chaining happeing
// let obj={
//     name:'siva'
// }
// let obj2=Object.create(obj,{})
// let obj3=Object.create(obj2,{})
// // console.log(obj2)
// // console.log(obj2.name)
// console.log(obj3.name)
