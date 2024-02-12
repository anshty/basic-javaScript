// conversion
// let score = 123
// console.log(typeof score); //number{or to use console.log(typeof(score));}

// score = "123"
// console.log(typeof score);//string
// let valueInnumber = Number(score)
// console.log(typeof valueInnumber);//number


// score = '123abc'
// let valueInnumber1 = Number(score)
// console.log(typeof valueInnumber1);//it number but the input is 123abc 
// console.log(valueInnumber1);//value is NaN (not a number)

// score=null
// let valueInnumber2 = Number(score)
// console.log('null');
// console.log(valueInnumber2);// value is 0 null in number is 0 
// console.log(typeof valueInnumber2);//it shows number


// sore = undefined;
// let valueInnumber3 = Number(sore)
// console.log('undefined');
// console.log(valueInnumber3);//here NaN  
// console.log(typeof valueInnumber3);//number bcz value must be in number form

// /*   
//  "33"=> 33
//  "33abc"=> NaN
//  true =>1 ; false=>0

// */



// let isloggedIn =1

// let booleanisLoggedin =Boolean(isloggedIn)
// console.log(booleanisLoggedin);//true
// console.log(typeof booleanisLoggedin);//boolean

/*
1=>true ; 0=>false
""=>false ; "ankit"=>true

*/
//this is how conversion work it convert value of vareable into deferent data type

//Object

// console.log(1+1);
// console.log(1-2);
// console.log(1*2);
// console.log(2**2);//use for power 
// console.log(2/2);
// console.log(2%2);

console.log('1'+2);// answer 12 
console.log('1'+2+2);//answer 122
console.log(1+2+'2');//answer 32
//console.log(3+4 *5 /2); //do not use this way of code insted of use
// => console.log((3+4) *5 /2); 
console.log(true);
// do not do this thing
console.log(+true);
console.log(+"");


//study prefix and postfix in js mdn .