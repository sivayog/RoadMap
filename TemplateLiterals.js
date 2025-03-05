// TemplateLiterals
// const firstname =`siva
// senior "frontend dev"`
// console.log(firstname)

//we can pas the place holder inside the message
// const name ='siva'

// const firstname =`${name}
// senior "frontend dev"`
// console.log(firstname)

//Tagged template literals

// const name ='siva'

// const tag =x`this the string ${name}`

// function x(strigs,...exp){
//     return 'hello' + exp + strigs
// }
// console.log(tag)


// let first = 'ham';
// let second = 'pineapple';
// let txt = f`I don't like pizza with ${first} and ${second}.`;
// console.log(txt);
// function f(strings, ...expressions) {
//   return expressions.reduce((acc, exp, idx) => {
//     return acc + exp.toUpperCase() + strings[idx + 1];
//   }, strings[0]);
// }