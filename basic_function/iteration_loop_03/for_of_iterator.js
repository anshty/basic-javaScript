// for of loop

// ["","",""] array in string
// [{},{},{}] array in object


const myarray=[1,2,3,4]

for (const num of myarray) {

    // console.log(num);
    
}


const myarobj=[{name:'ankit'},{lastname:'verma'},{class:'Bca sem4'}]
for(const num of myarobj){
    // console.log(num.name);
    // console.log(num.lastname);
    console.log(num);
    continue
}

const greetings="Hello world"
for(const greet of greetings){
    // console.log(`Each charater is ${greet}`);
}



// maps
const map=new Map()

map.set('India',"Bharat")
map.set('CG',"Chhattishghar")
map.set('MP',"Madhayapradesh")

// console.log(map);


for(const [area,value] of map){
    // console.log(`this is the area of India ${area ,value}`);
}


const movies={
    'movie01':'its okay not to be okay',
    'movie02':'Snow drop',
    'movie03':'Sweet home'
};
// for(const [movieseries] of movies){
//     console.log(movieseries);
// } not work