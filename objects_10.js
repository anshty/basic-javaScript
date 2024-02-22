// singleton => is made from constructor known as singleton object(one object)


// object literal
const objMy=Symbol("key1")
const jsUser={
    name:"ankit",
    [objMy]:"akash",
    age:18,
    class:"bcasem4",
    "email":"ankitverma1234@gmail.com",
    "fullname":'ankitverma'

}//name=>key & "ankit"/20 =>value

//there are 2 way to access any object

// console.log(jsUser.name);
// console.log(jsUser['name']);//squre notaion

// console.log(jsUser["email"]);
// console.log(jsUser.email);
// console.log(jsUser.fullname);
// console.log('hello');
// console.log(jsUser.objMy);//symbol not define
// console.log( jsUser[objMy]);//symbol defined

// over write object
jsUser.email="ankit@123gmail.com"
// freeze is use not to access value 
//Object.freeze(jsUser)
jsUser.age=20//after freeze no value will be change
// console.log(jsUser);


jsUser.greeting = function(){
    console.log('hello js usser');
}
console.log(jsUser.greeting());

jsUser.greetingTwo= function(){
    console.log(`hello, ${this.name}`);
}
console.log(jsUser.greetingTwo());