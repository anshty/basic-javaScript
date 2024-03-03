const user ={
    username:'ankit verma',
    price:500,


    welcome_message:function(){
        console.log(`welcome to our web side ${this.username}`);
 console.log(this);
    },
    
}
// welcome_message(username)
// user.welcome_message()    //context means value 


// function coffee(){
//     let username='ankit'
//     console.log(this.username);
// }

const coffee=() =>{
    let username='ankit'
    console.log(this.username);
}
// coffee()

// ++++++adding num using arrow function in some way


const addTwo=(num1,num2)=>{

    return num1+num2
}

// console.log(addTwo(3,7))

// const addtwonum=(num,num0)=>(num+num0 ) 

// arrow function into object
const addtwonum=(num,num0)=>({name:'ankit'})

console.log(addtwonum(3,8))