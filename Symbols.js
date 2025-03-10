// const sym1 = Symbol() 
// const sym12 = Symbol()
// console.log(sym1==sym12)
// console.log(sym1,sym12)
// let user ={
//     name:"siva",
//     id:"2244322"
// }
// user.id='5354353'

//the aove statement overwirte the obect id 
//using of symbol
// const idsym =Symbol('unique_id')
// user[idsym]='5433453'
// console.log(user)


// let user ={
//     name:"siva",
//     id:"2244322"
// }
// // user.id='5354353'

// //the aove statement overwirte the obect id 
//using of symbol
//below is the example of using inline symbol in our object
// const idsym =Symbol('unique_id')
// let user ={
//     name:"siva",
//     id:"2244322",
//     [idsym]:"ffddg"
// }

// // user[idsym]='5433453'
// console.log(user)


// for compareing the globle reference we can use the symbol.for()

// const s1 = Symbol.for('id')
//     const s2 = Symbol.for('id')

//         console.log(s1===s2)//true it will retur in this case

// const red =Symbol('red')
// const blue =Symbol('blue')//here the value is different 
// const cat ='blue'//here the value is dfferent

// const getlevel=(color)=>{
//     switch (color) {
//         case blue:
//             return console.log('sky')
           
//         case red:
//             return console.log('fire')
          
//         default:
//            console.log('error')
//     }
// }
// getlevel (cat)

// const red = Symbol('red');
// const blue = Symbol('blue'); // This is a unique Symbol
// const cat = 'blue'; // This is a string, not a Symbol

// const getlevel = (color) => {
//     switch (color) {
//         case blue:
//             return 'sky'; // Returning a value
//         case red:
//             return 'fire'; // Returning a value
//         default:
//             return 'error';
//     }
// };

// // ✅ Print the return value
// console.log(getlevel(cat)); // Output: error

//real time example of alert services using symbol unique 
//identifier


// const ALERT_INFO = Symbol('info');
// const ALERT_WARNING = Symbol('warning');
// const ALERT_ERROR = Symbol('error');

// class AlertService {
//     constructor() {
//         this.alerts = [];
//     }

//     addAlert(type, message) {
//         this.alerts.push({ type, message });
//     }

//     showAlerts() {
//         this.alerts.forEach(alert => {
//             switch (alert.type) {
//                 case ALERT_INFO:
//                     console.log(`ℹ️ INFO: ${alert.message}`);
//                     break;
//                 case ALERT_WARNING:
//                     console.log(`⚠️ WARNING: ${alert.message}`);
//                     break;
//                 case ALERT_ERROR:
//                     console.log(`❌ ERROR: ${alert.message}`);
//                     break;
//                 default:
//                     console.log(`❓ UNKNOWN ALERT: ${alert.message}`);
//             }
//         });
//     }
// }

// // ✅ Using the Alert Service
// const alertService = new AlertService();
// alertService.addAlert(ALERT_INFO, 'System is running smoothly.');
// alertService.addAlert(ALERT_WARNING, 'CPU usage is high.');
// alertService.addAlert(ALERT_ERROR, 'Server is down!');
// alertService.addAlert('dsds', 'Server is down!');

// // ✅ Display Alerts
// alertService.showAlerts();

