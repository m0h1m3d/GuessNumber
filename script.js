'use strict';
const body = document.querySelector('body');
const checkBtn = document.querySelector('.check');
const restartBtn = document.querySelector('.restart');
const msg = document.querySelector('.message');
const defaultScore = document.querySelector('.score');
const highScore = document.querySelector('.high');
const result = document.querySelector('h1')
const btns = document.querySelectorAll('button');

let secretNumber = Math.trunc(Math.random()*20) + 1;
const number = document.querySelector('.Qst');
// number.textContent = secretNumber;
let score = 20;
let hS = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
      setTimeout(function(){
        button.classList.remove('clicked');
      }, 200);

    })
})

checkBtn.addEventListener('click', function(){
    const userInput = Number(document.querySelector('.input').value);


    if(!userInput){
        msg.textContent = '🟥 pick a number!';
        msg.style.color = 'rgb(240, 74, 74)';
        checkBtn.style.background = 'rgb(240, 74, 74)';
    }
    else if(userInput === secretNumber){
        number.textContent = secretNumber;
        result.textContent = '🎆 Correct!';
        result.style.color = "green";
        msg.textContent = 'Awsome! you won!';
        msg.style.color = "green";
        number.style.background = '#98fb98';
        number.style.color = '#fff';
        number.style.borderBottom = 'transparent';

        if(score > hS){
            hS = score;
            highScore.textContent = hS;
        }
    }

    else if(userInput !== secretNumber){
        if(score > 1){
            msg.textContent = userInput > secretNumber ?  '⏫ Too High': '⏬ Too Low';
            msg.style.color = 'grey';
            score--;
            defaultScore.textContent = score;
        }else{
            number.textContent = secretNumber;
            result.textContent = '❌Game Over!';
            result.style.color = 'rgb(240, 74, 74)';
            msg.textContent = 'Better luck next time!'
            msg.style.color = 'rgb(240, 74, 74)';
            number.style.background = 'rgb(240, 74, 74)';
            number.style.color = '#fff';
            defaultScore.textContent = 0;
        }
    } 
})

restartBtn.addEventListener('click', function(){
    score = 20;
    defaultScore.textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    result.textContent = 'Guess My Number!';
    result.style.color = 'rgb(129, 55, 55)';
    number.textContent = '?';
    number.style.background = 'transparent';
    number.style.borderBottom = '1px solid black';
    number.style.color = 'rgb(173, 168, 168)';
    msg.textContent = 'Start guessing...';
    msg.style.color = 'rgb(129, 55, 55)';
    document.querySelector('.input').value = '';
    checkBtn.style.background = 'pink';
})
