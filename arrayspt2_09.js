const marvel_heros =['ironman','thor','hulk','captan amarica']
const dc_heros =['superman','batman','flash']

// marvel_heros.push()
let all_Hero =marvel_heros.concat(dc_heros)
 console.log( all_Hero);/*object =>[
    /*'ironman',
    'thor',
    'hulk',
    'captan amarica',
    'superman',
    'batman',
    'flash'
  ]*/

let all_superHero = marvel_heros+dc_heros
 console.log(typeof all_superHero);//string =>ironman,thor,hulk,captan amaricasuperman,batman,flash

// console.log(all_Hero [2]);

//spered tec to marge
const all_new_Heros=[...marvel_heros,...dc_heros]
console.log(all_new_Heros);

// flat tech array in array
 marvel_heros.push(dc_heros)
console.log(marvel_heros);

console.log(marvel_heros.flat(Infinity));


console.log(Array.isArray('ankit'));
console.log(Array.from('ankit'));
console.log(Array.from({name:'ankit'}));//=>[]

name1='ankit'
name2='amit'
name3='hitesh'

console.log(Array.of(name1,name2,name3))

