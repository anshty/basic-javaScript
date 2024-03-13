const form= document.querySelector('form')

addEventListener('submit',(Event)=>{
    Event.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')

    if(height===''||height<0||isNaN(height)){
        result.innerHTML= `Height is not valid!!`
    }else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML= `weight is not valid!!`
    }else{
        const BMI=(weight/(height*height))*10000
        result.innerHTML=BMI
    }
    

})