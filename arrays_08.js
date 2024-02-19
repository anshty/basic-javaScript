/*array  The Array object, as with arrays in other programming languages, enables storing a collection of 
multiple items under a single variable name, and has members for performing common array operations */

 const myArry=[0,1,2,3,4];
// console.log(myArry[4]);

myHero=['ironman','spiderman','hulk','thor']
// console.log(myHero);
// console.log(myHero.length);//show length of array
// myHero.push('deadpool')//add value at last
// console.log(myHero)

// myHero.pop() //remove last value 
// console.log(myHero)

// myHero.unshift('captan marvel')//add values at first 
// console.log(myHero);

// myHero.shift()//remove value at first
// console.log(myHero);


// console.log(myHero.push('hello'));

// console.log(myHero.includes('captan marval'));//false
// console.log(typeof myHero.includes('captan marval'));

// console.log(myHero.indexOf('ironman'));

// const newarray =myArry.join()
// console.log(newarray);

//slice,splice

console.log("a",myArry);
const myn1=myArry.slice(0,3)
console.log(myArry);
console.log(myn1);//[ 0, 1, 2, 3 ]



console.log("b",myArry);
const myn2=myArry.splice(0,3)
console.log(myArry);//[ 3, 4 ] *splice remove 0,1,2 and print 3,4
console.log(myn2);
