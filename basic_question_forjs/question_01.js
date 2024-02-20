/* 1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
 Current time is : 10  : 30 : 38 pm */

 let currentDay_Time= new Date()
 console.log(`Today is : ${currentDay_Time.toLocaleString('en-in',{weekday:'long'})}`);
console.log(new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric',second:'numeric' })); 
//  console.log(`Current time is :${currentDay_Time.getHours()}:${currentDay_Time.getMinutes()}:${currentDay_Time.getSeconds()}`);

