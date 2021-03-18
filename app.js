// HTML Element
const status = document.querySelector('.status')
const action = document.querySelector('.action')
const gameBox = document.querySelectorAll('.game-box')

// game variable 
let gameIsLive = true;
let xIsNext = true;

// event listener
const handleReset = (e)=>{
    console.log(e)
}
status.addEventListener('click',handleReset)