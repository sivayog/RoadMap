// Microtask
console.log('start')
// macroTask
setTimeout(function(){
    console.log('timeout')
},0)
// microtask
Promise.resolve().then(function(){
    console.log('promise')
})