// es6
// TL -topic 1
// let n1 = 'siva'
// let name ='ananathai'
// let fname=`${n1} ${name}`
// console.log('fname',fname)

//destructurning - topic 2
// let person= {
// fname:"siva",
// lname:"ananthi"
// }
// let {fname ,lname} =person
// console.log(`${fname}`)

//oject literals - topic 3

// function cityName (city,address){
//     // const newadress = {newcity:city,newadd:address}
//     const newadress = {city,address}
//     console.log(newadress)

// }
// cityName('trichy','blr')

//loops - topic 4

// let incomes =[1,2,3]
// let total =0

// for (const income of incomes){
//     total += income
// }
// console.log(total)

// let fullname ="ananthakumari"
// for (const char of fullname){
//     console.log(char)
// }

//spread operator - topic 5

// let a1 =[1,2,3]
// let a2 =[...a1]
// console.log(a2)

// rest operator
// function add(...num){
//     console.log(num)
// }

// add(1,2,3,4,5)

//arrow function -topc -6
// function add(...num){
//     let total=num.reduce((x,y)=>x+y)
//     console.log(total)
// }
// add(1,2,3,4)

//default parems = topic 7
// function add (numarr=[]){
//  let total =0
//  numarr.forEach(element => {
//     total+=element
//  });
//  console.log(total)
// }
// add()

//includes topic 8
// let arr=[1,2,3,4]
// console.log(arr.includes(0))

// let and const topic 9 
// if(example){
//     var example = 10
// }
// console.log(example)
// if(false){
//     let example = 10
// }
// console.log(example)

// const ex1 =[]
// ex1.push(4)
// console.log(ex1)
// let data = [1,2,3]
// let updated_data = data
// updated_data.push(4)
// console.log(data)

//topic 10 padstart and padend
// let example = 'siva'
// console.log(example.padStart(10,'a'))
// console.log(example.padEnd(10,'a'))
// if add only number leanth equal then it will not add any thing
//or if add only number leanth is less then it will add the number of space
// console.log(example.padStart(10).length)
// console.log(example.padEnd(10).length  )

//classes - topic 11
// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     getname(){
//         return this.name
//     }
// }
// let p1 = new Person('siva',25)
//  console.log(p1.getname())
// p1.name='ananthi'
// console.log(p1)

// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     getname(){
//         return this.name
//     }
//     getage(){
//         return this.age
//     }
// }
// class Student extends Person{
//     constructor(name,age,grade){
//         super(name,age)
//         this.grade = grade
//     }
// }
// let s1 = new Student('siva',25,10)
// console.log(s1.getname())
// console.log(s1.getage())
// console.log(s1)

//topic 12 - trailing commas
// let arr = [1,2,3,]           
// console.log(arr)
// let obj = {
//     name:'siva',
//     age:25,
// }
// console.log(obj)

// //topic 13 - sets
//  let set = new Set([1,2,2,3,4,5])
//  set.add(6)
//  set.delete(1)
//  console.log(set.has(2))
//  console.log(set)
//     console.log(set.size)