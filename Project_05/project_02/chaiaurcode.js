const form=document.querySelector('form')
// const hight=parseInt(document.querySelector('#height').value)
// this usecase will give you empty value 

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result= document.querySelector('#results')

    if(height===' '||height===''||height<0||isNaN(height)){
        result.innerHTML=`Please give a valid Height${ height}`
    }else if(weight===' '||weight===''||weight<0||isNaN(weight)){
        result.innerHTML=`Please give a valid weight${weight}`
    }else{
       const bmi= (weight/((height*height)/10000)).toFixed(2)
    //    show the result
    result.innerHTML=`<span>${bmi}</span>`
    }
    
})
