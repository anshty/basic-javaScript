if(true){
    const a=10
    // console.log(a);
}

function myFunction(){
    const b=20
}
// console.log(b);

const obj={
    c:30
}
// console.log(c);

// +++++++nested scope ++++++++

function one(){
    const name='ankit';

    function two(){
        const myWork='insta'
        console.log(name);
        

    }
    // console.log(myWork);

    two()
}

// one()


if(true){
    const username='ankit'
     if(username==='ankit'){
        const ide='vscode'
        console.log(username+ide);
     }
    //  console.log(ide);
    console.log(username);
}
// console.log(username);


// +++++ interesting++++

function addone(num){
    return num+1
}
addone(5)


const addTwo=function(num){
    return num+2
}
addTwo(5)