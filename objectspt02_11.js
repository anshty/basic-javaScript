// const idUser=new Object();//singletone
// const idUser={};//non singletone object
const regularUser={
    email:"ankitverma@gmail.com",
userinfo:{
    username:"ankit verma",
    userid:"123abc",
    DOB:"01/04/2004"

}
}
// console.log(regularUser.userinfo.DOB);


const instaId= new Object({
    userid:"ankit122_",
    userinfo:{
        userContect:{
            phone_no:7587760093,
            email_id:"ankitverma@gmail.com"
        },
        
    }
})
// console.log(instaId.userinfo.userContect.phone_no);


const obj ={1:"b",2:"c"}
const obj2={3:"d",4:"e"}
// const obj3={obj,obj2}//=>{ obj: { '1': 'b', '2': 'c' }, obj2: { '3': 'd', '4': 'e' } 
// const obj3=Object.assign(obj,obj2)//=>{ '1': 'b', '2': 'c', '3': 'd', '4': 'e' }
//const obj3=Object.assign({},obj,obj2)//{ '1': 'b', '2': 'c', '3': 'd', '4': 'e' }


// ++++++sperd+++
const obj3={...obj,...obj2}
// console.log(obj3);


// coming value from database

const users=[
    {
        id:123,
        email:"user1.gmail.com"
    },
    {
        id:13,
        email:"user2.gmail.com"
    },{
        id:12,
        email:"user3.gmail.com"
    }
]

console.log(Object.keys(instaId));
console.log(Object.values(instaId));
console.log(Object.entries(instaId));
console.log(instaId.hasOwnProperty('userid'));