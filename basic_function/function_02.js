function calulatecardlist(...num){//rest oprator (...) to take bundle of data
    return num
}
// console.log(calulatecardlist(50,60));

/*const mydata={
    username:'ansh',
    userid:1230
}*/

function objectEnter(myname){
    return`enter username ${myname.username} and user ${myname.userid}`
}

console.log(objectEnter({
    username:'ankit verma',
    userid:1234
}));

const myWeding=['ankit','ansh','anku','anshu']

function weding_choice(getmarried){
    return`my goju weds ${getmarried[1]}`
}

// console.log(weding_choice(myWeding[1]))

console.log(weding_choice(['ankit','ansh','anshu','anku']))