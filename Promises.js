// const cart =['fgdg','dgdggfd','gdgdf']
// //dummy api with call back api
// createOrder(cart,function (orderid){
// proceedpayment(orderid)
// })

//with promise
// const cart =['fgdg','dgdggfd','gdgdf']
// const promise = createorder(cart)
// // intial data is empty object
// // once promise done it will get the data
// promise.then(function(orderid){
//     proceedpayment(orderid)
// })

// const cart = ["fgdg", "dgdggfd", "gdgdf"];
// const promise = createorder(cart);
// // intial data is empty object
// // once promise done it will get the data calllback hell
// promise.then(function (orderid) {
//   proceedpayment(orderid, function (paymentinfo) {
//     showpayment(paymentinfo, function (updateedinfo) {
//       updatefinal(updateedinfo);
//     });
//   });
// });

// const cart = ["fgdg", "dgdggfd", "gdgdf"];
// createorder(cart)
//   .then(function (orderid) {
//     return processedPayment(orderid); toget the data and pass it to next we neeed return
//   })
//   .then(function (paymentinfo) {
//   return  showsummary(paymentinfo);
//   });
