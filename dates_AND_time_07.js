// january 1,1970

let myDate = new Date()
// console.log(myDate);//2024-02-16T12:57:27.334Z
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());//2024-02-16T12:59:09.433Z
// console.log(myDate.toJSON());//2024-02-16T12:57:27.334Z
//console.log(myDate.toLocaleDateString());//2/16/2024
// console.log(myDate.toTimeString());//18:25:31 GMT+0530 (India Standard Time)
// console.log(typeof myDate);//object
// let mycreatedDate= new Date(2001,4,18)
let mycreatedDate= new Date()


// console.log(mycreatedDate.toLocaleString());//1/14/2023, 5:30:00 AM

// +++timestamp+++

let myTimeStamp = Date.now()
// console.log(myTimeStamp);//use for hotal or poll registration app =>1708093421888
// console.log(mycreatedDate.getDate());
// console.log(typeof mycreatedDate.getHours());

// console.log(Math.floor(Date.now()/1000));//1708093421888


let newdate= new Date()

// console.log(newdate);//2024-02-16T14:47:00.290Z

console.log(newdate.getFullYear());//2024
console.log(newdate.getMonth());//1
console.log(newdate.getDay());//5
console.log(newdate.getMinutes());//19
console.log(newdate.getUTCDate());//16


