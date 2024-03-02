function sayMyname(){
console.log('h');
console.log('i');
console.log('t');
console.log('e');
console.log('s');
console.log('h');
}//all are function defination

// sayMyname()//function refrance


function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}

// addTwoNumbers(5,8)


function myFunction(num1,num2){
  let result =num1+num2
  return result
}

const result=myFunction(1,2)
// console.log(result);


function loginUsermsg(username){

  return`${username} just logged in`
}

/*const result_login=loginUsermsg('ankit verma')
console.log(result_login);*/

// console.log(loginUsermsg('Ankit verma'));

function instaUser_login(userId){
  if(!userId){
    return 'not loggin'
  }else{
    return`${userId} just loggin`
  }
}
console.log(instaUser_login());