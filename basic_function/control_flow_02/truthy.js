const gotEmail=function(){}
if(gotEmail){
    console.log('got email');
}else{
    console.log('not get ');
}

// falsy value

// false,0,-0, BigInt 0n,'',null,undefined,NaN

// truthy values
// '0','false',' ',[],{},function(){}


if(gotEmail.length==0){
    console.log('email?');
}else{
    console.log('found it');
}

const myfunc=function(){}
if(myfunc){
    console.log('empty');
}

// Nullish coalescing operator(??):null undefined

let val1;
val1=10??4
console.log(val1);
val1=null??4
console.log(val1);
val1=2??undefined
console.log(val1);
val1=null??undefined
console.log(typeof val1);
val1=NaN??undefined
console.log( val1);


// terniary operator(?)
//  condition ? true : false


const icecreamPrice=150
icecreamPrice >=90 ? console.log('greater then 90 ') :console.log('less then 90');




