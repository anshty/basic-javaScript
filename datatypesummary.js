//primitive datatype

//7 types=> String,number,Boolean,Null,undefined,Symbol,BigInt

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id ===anotherid);//false

//const bigNumber = BigInt('111111111111111111111111111111111111111111111111111111111111111111')
const bigNumber=123456789098765431234567890n
console.log(bigNumber);


//reference(non primitive)

//Array,Objects ,Funtions




//++++++++++++++++++++++++++++++++++++++++++++


/*

#stack(primitive),heap(non primitive)

*/

//stack => not change real but change copyed one
let myname ="ankit"
let iAm=myname
iAm="ansh"
console.log(iAm);
console.log(myname);

//heap => heap don't use copy they have same refrance

let firstperson ={
       Name:"ankit",
       Age:12
}

secondperson=firstperson
 console.log(secondperson);

 secondperson.name='ansh'
 console.log(firstperson.name);//ansh
 console.log(secondperson.name);//ansh



