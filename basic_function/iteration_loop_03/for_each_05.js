const coding =['js','ruby','java','python']
coding.forEach( function (item){
    // console.log(item);
})

coding.forEach( (languages)=>{
    // console.log(languages);
})

function printME(item){
    console.log(item);
}
// coding.forEach(printME)


const printItem=(item)=>{
  console.log(item);
}
// coding.forEach(printItem)

coding.forEach( (item ,index ,arr)=>{

    // console.log(item ,index ,arr);
})

const coding_Shortcut=[
    {
    language:'javaScript',
    filename :'js'
   },
    {
    language:'Cpp',
    filename :'c++'
   },
    {
    language:'java',
    filename :'java'
   },
    {
    language:'ruby',
    filename :'rb'
   }


]
coding_Shortcut.forEach( (item)=>{
    console.log(item.filename,item.language);
})