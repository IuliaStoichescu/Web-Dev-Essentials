const p1Button = document.querySelector("#p1Btn");
const p2Button = document.querySelector("#p2Btn");
const rstButton = document.querySelector("#reset");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const playToSelect = document.querySelector("#playto");
let winningScore = 5;
let isGameOver = false;
let p1S = 0;
let p2S = 0

p1Button.addEventListener('click', function (e) {
   if (!isGameOver) {
      // if (winningScore != p1Score.innerText) {
      p1S++;
      if (p1S === winningScore) {
         isGameOver = true;
         p1Score.classList.add('winner');
         p2Score.classList.add('loser');
         p1Button.disabled = true;
         p2Button.disabled = true;
      }
      // }
      p1Score.textContent = p1S
   }
   //p1Score.style.color = "#cdb4db";
})

p2Button.addEventListener('click', function (e) {
   if (!isGameOver) {
      //if (winningScore != p2Score.innerText) {
      p2S++;
      if (p2S === winningScore) {
         isGameOver = true;
         p2Score.classList.add('winner');
         p1Score.classList.add('loser');
         p1Button.disabled = true;
         p2Button.disabled = true;
      }
      // }
      p2Score.textContent = p2S
   }
   //p2Score.style.color = "#ffafcc";
})

playToSelect.addEventListener('change', function () {
   winningScore = parseInt(this.value);
   reset();
})

rstButton.addEventListener('click', reset)

function reset() {
   isGameOver = false;
   p1S = 0;
   p2S = 0;
   p1Score.textContent = 0;
   p2Score.textContent = 0;
   p1Score.classList.remove('winner', 'loser');
   p2Score.classList.remove('winner', 'loser');
   p1Button.disabled = false;
   p2Button.disabled = false;
}
