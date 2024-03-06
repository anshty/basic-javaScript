const myObject={
    series01:'its okay not to be okay',
    series02:'snow drop',
    series03:'sweet home'
}
for (const all_series in myObject) {
    // console.log(`hey there here are some list of series ${all_series} with there series name which are ${myObject[all_series]}`);
   
}

const codingLanguage=['js','rb','c++','java']
for(const program in codingLanguage){
    // console.log(codingLanguage[program]);
}

const map=new Map()

map.set('India',"Bharat")
map.set('CG',"Chhattishghar")
map.set('MP',"Madhayapradesh")
for (const key in map) {
    console.log(map.key);
}