// Destructuring
//object without destrctuing
// let person ={
//     fname:'siva',
//     lname:'ananthi'
// }
// console.log(person.fname)

// let person ={
//     fname:'siva',
//     lname:'ananthi'
// }
//we can rename the object using destucturing
// let {fname:firstname,lname:lastname}=person
// console.log('fname',lastname)

// let person ={
//     fname:'siva',
//     lname:'ananthi',
//     // currentAge:26
// }
// //if there is a no valuein object its will take new value otherwise it will get from obj/array
// let {fname,lname,middlename="siva",currentAge:age='20'} =person
// console.log(middlename,age)

// //array examples
// let arr =[1,2,3]

// // without es 6 
// // let x =arr[0]
// // let y =arr[1]
// // z= arr[2]


// //destructure with es6 sytax
// let [x,y,z]=arr
// console.log(x,y,z)
//it will skip the value
// let [x,,z]=[1,2,3]
// console.log(x,z)

//spread operator with obj and arr
// let arr =[1,2,3]

// let [x,...y]=arr
// console.log(x,y)

// let person ={
//     fname:'siva',
//     lname:'ananthi'
// }

// let {fname:firstname,...rest}=person
// console.log(firstname,rest)


//swapping

// let x = 10;
// let y = 5;

// [x,y] =[y,x]

// console.log(x, y); // Output: 5 10


// function getname(){
//     return null
// }

// let {firstname,lastname} = getname() || {}
// console.log(firstname,lastname)

// nested object 
// let member ={
//     id:1,
//     name:{
//         firstname:'siva',
//         lastname:'ananathi'
//     }
// }
// let {id , name:{firstname,lastname},name}=member//for access the nested object it we need to write like this
// console.log(name)

//without destructureing
// let person = { firstname: "siva", lastname: "ananthi" };

// let displayFullName = (person) => console.log(`${person.firstname} ${person.lastname}`);

// displayFullName(person); // Output: siva ananthi


//with destructureing
// let person = { firstname: "siva", lastname: "ananthi" };

// let displayFullName = ({firstname,lastname}) => console.log(`${firstname} ${lastname}`);

// displayFullName(person); // Output: siva ananthi


//max element 

// let num =[1,2,3]

// let max = Math.max(...num)
// let min = Math.min(...num)
// console.log(max,min)
//array shallow coppy
// let num =[1,2,3]

// let newarr=[...num]
// console.log(newarr)

// //display rest operator
// display(1,2,3)
// function display(first,...rest){
// console.log(first)
// console.log(rest)

// }