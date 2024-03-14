let random_num=parseInt(Math.round(Math.random()*10+1))
const user_input=document.querySelector('.guessField')
const submit=document.querySelector('#subt')
const prev_guesses=document.querySelector('.guesses')
const guesses_rem=document.querySelector('.lastResult')
const lowORhigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playgame=true;

if(playgame){
    submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess=parseInt(user_input.value)
    validate_guess(guess)
    })
}


function validate_guess(guess) {

if(isNaN(guess)){
    alert('Please enter a valid number !!')
}else if(guess<1){
     alert('Please enter number greater then zero!!')
}else if(guess>10){
    alert('Please enter number smaller then eleven')
}else{
    prevGuess.push(guess)
    
    if(numGuess===10){
        cleaner_guess(guess)
        display_message(`Game over ,Random number was ${random_num}`)
        end_game()
    }else{
        cleaner_guess(guess)
        check_guess(guess)
    }
}
    
}
function check_guess(guess){
   if(guess===random_num){
    display_message(`Win , you guessed it right`)
    end_game()
   exit();
   }else if(guess < random_num){
    display_message(`Number is TOOO low`)
   }else if(guess > random_num){
    display_message(`Number is TOOO high`)
   }
}
function cleaner_guess(guess){
user_input.value=''
prev_guesses.innerHTML+=`${guess} `
numGuess++;
guesses_rem.innerHTML=`${11-numGuess}`
}
function display_message(message){
lowORhigh.innerHTML=`<h2>${message}</h2>`
}
function end_game(){
  user_input.value=''
  user_input.setAttribute('disable','')
  p.classList.add('button')
  p.innerHTML=`<h2 id='startNewGame'>Start New game</h2>`
  startOver.appendChild(p)
  playgame=false
  new_game()
}
function new_game(){
const newGamebutton=document.querySelector('#startNewGame')
 newGamebutton.addEventListener('click',(e)=>{
     random_num=parseInt(Math.round(Math.random()*10+1))
      prevGuess=[]
      numGuess=1
      prev_guesses.innerHTML=''
     guesses_rem.innerHTML=`${11-numGuess}`
     user_input.removeAttribute('disable')
     startOver.removeChild(p)
    playgame=true
 })
}