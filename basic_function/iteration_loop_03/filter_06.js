const coding=['js','java','cpp','python']

const value = coding.forEach( (item)=>{
    // console.log(item);
})
// console.log(value);

const myNum=[1,2,3,4,5,6,7]
// const newNum=myNum.filter( (num)=>num>4)
// console.log(newNum);

newNum=[]

myNum.forEach((num)=>{
    if (num>3) {
        newNum.push(num)
        return newNum
    }
})
// console.log(newNum);

newCoding=[]
coding.forEach( (code)=>{
    if(code.length>2){
        newCoding.push(code)
        return newCoding
    }
})
// console.log(newCoding);


const library=[
    {BookName:'book one',BookType:'cartoon',Publish:1995,
edition:2002},
    {BookName:'book two',BookType:'Anime',Publish:1998,
edition:2008},
    {BookName:'book three',BookType:'history',Publish:1985,
edition:2009},
    {BookName:'book four',BookType:'Fiction',Publish:1999,
edition:2010},
    {BookName:'book five',BookType:'non-Fiction',Publish:1995,
edition:2005},
    {BookName:'book six',BookType:'Science',Publish:2011,
edition:2022},
    {BookName:'book seven',BookType:'history',Publish:1982,
edition:2022},
    {BookName:'book eight',BookType:'history',Publish:1982,
edition:2022},
]

let userbook=library.filter( (bk)=>bk.BookType==='cartoon')
// console.log(userbook)

userbook=library.filter((bk)=>bk.BookType==='Anime')
// console.log(userbook);

userbook=library.filter((bk)=>bk.Publish===1995)
// console.log(userbook);

userbook=library.filter((bk)=>bk.Publish<=2000)
// console.log(userbook);
userbook=library.filter( (bk)=>bk.Publish>=1980 && bk.BookType==='history')
console.log(userbook);