// function x() {
//     a=3
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// x()

// function x(y) {
//     a=3
  
//     y()
// }
// x(  function y(){
//     console.log(a)
// })

// function x() {
//     a=3
//     function y(){
//         console.log(a)
//     }
//    return y
// }
// var z=x()
// console.log(z)
// z()


// function x() {
//     a=3
//     return function y(){
//         console.log(a)
//     }
   
// }
// var z=x()
// console.log(z)
// z()

// function x() {
//     a=3
//      function y(){
//         console.log(a)// here its actually not points to  values its related to reference
        
//     }
//     a=100 
//    return y
// }
// var z=x()
// console.log(z)
// z()

// function z(){
//     var b=100
//     function x(){
//         var a=12
//         function y(){
//             console.log(a,b)
//         }
//          y()
//     }
//     x()
// }
// var w=z()
// console.log(w)

// function x(){
//     var a =3
//     var b=2
//     console.log(b)
//     setTimeout(function(){
//         console.log(a)
//     },2000)
//     console.log('dfdfdf')
// }
// x()
// function x(){
//     for(var i=0;i<=5;i++){
//         setTimeout(() => {
//             console.log(i)
//         }, i *1000);
//     }
// }
// x()
// function x(){
//     for(let i=0;i<=5;i++){
//         setTimeout(() => {
//             console.log(i)
//         }, i *1000);
//     }
// }
// x()
// function x(){
//    //create copy of the i every time n memory so it will not repeate same number
//         for(var i=0;i<=5;i++){
//             function closure(x){
//             setTimeout(() => {
//                 console.log(x)
//             }, i *1000);
//         }
//         closure(i) 
//     }
   
// }
// x()
// function x(b){
// var a =10
// function y(){
//     console.log(a,b)
// }return y

// }
// var closure = x('fgddggd')
// closure()

// function x(b){
// var a =10
// function y(){
//     console.log(a,b)
// }return y

// }
//  x('fgddggd')()


// function counter(){
//     var count=0
//     return function inc(){
//         count ++
//         console.log(count)
//     }
// }
// var out = counter()
// var out = counter()
// out()
// out()
// function Counter(){
//     var count=1
//      this.inc =function(){
//         count ++
//         console.log(count)
//     }
//     this.dec =function(){
//         count --
//         console.log(count)
//     }
// }
// var out = new Counter()
// out.dec()