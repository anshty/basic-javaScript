//Immediately Invoked Function Expressions(IIFE) 
// it is use to make globle scope less pollute
// +++normal function work

function chai01(){
    console.log(`hello normal function`);
}
chai01();

// IIFE using local function
(function chai02(){
    // named iife
    console.log(`hello IIFE`);
})();

// IIFE using arrow function 
(()=>{
    // simple iife
console.log(`hello IIFE using arrow function`);
})();

((name)=>{
    console.log(`hello Mr ${name}`)
})('Ankit')

