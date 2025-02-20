// setTimeout(function(){
//     console.log('x')
// },4000)


// function x(y){
//     console.log('x')
//     y()

// }
// x(function y(){
//     console.log('y')
// })
// document.getElementById('clickME').addEventListener('click',function x(){
//     console.log('ddgfd')
// })

function attached(){
    var a=0
    document.getElementById('clickME').addEventListener('click',function x(){
    console.log('ddgfd',a++)
})
}
attached()