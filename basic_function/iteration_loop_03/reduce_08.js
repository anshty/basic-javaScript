const myNum=[1,2,3]

// const myTotal=myNum.reduce(function(acc,currval){
//     // console.log(`acc:${acc} and currval :${currval}`);
//     return acc+currval
// },0)

// console.log(myTotal);

const myTotal =myNum.reduce( (acc,curr)=>( acc+curr),0)
console.log(myTotal);

const myShoping=[
    {itemname:'java',
     price:999
    },
    {itemname:'javascript',
     price:299
    },
    {itemname:'cpp',
     price:2999
    },
    {itemname:'react-native',
     price:2999
    },
    {itemname:'firebase',
     price:599
    },

]

const totalPrice=myShoping.reduce( (acc,item)=>acc+item.price,0)

console.log(totalPrice);