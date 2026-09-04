'use strict'
// selecting element 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const holdGame = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let playing = true;
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;     
currentScore = 0;
activePlayer = activePlayer === 0 ? 1: 0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
}

// Rolling dice function
diceRoll.addEventListener('click', ()=> {
  if (playing) {
    
  
// generating a random dice roll
let dice = Math.trunc(Math.random() * 6) + 1;
// display the dice
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
//check for rolled 1 : if true switch to next;add the score
if (dice !== 1) {
  currentScore += dice;
   document.getElementById(`current--${activePlayer}`).textContent = currentScore;

}else{
switchPlayer()
}
}
});

holdGame.addEventListener('click', ()=>{
 // add current score to score of active player
 if (playing) {
  
 
   scores[activePlayer] += currentScore;
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];   
 // check if score is >= 100
 if (scores[activePlayer] >= 20){
 //finish game 
 document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
playing = false;
 }else{
  switchPlayer(); 
 }
 }
});
newGame.addEventListener('click', ()=>{
  playing = true;
  score0El.textContent = 0;
score1El.textContent = 0;
current0.textContent = 0;
scores.fill(0);
document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
 currentScore = 0;
 dice = 0;
})