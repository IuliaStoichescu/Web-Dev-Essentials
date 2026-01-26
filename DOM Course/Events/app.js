const btn = document.querySelector("#v2");
btn.onclick = function () {
   console.log("You clicked me ");
}
btn.onmouseenter = function () {
   console.log("I just hovered");
   btn.style.color = "magenta";
}

const btn3 = document.querySelector("#v3");
btn3.addEventListener('click', () => {
   alert("You are clicking me");
}) //better because if you want more than one event it doesnt get overwritten

const textRandom = document.querySelector('h2');
const btnRandom = document.querySelector("#random");
const body = document.querySelector('body');

const makeRandomColor = () => {
   const r = Math.floor(Math.random() * 255) + 1;
   const g = Math.floor(Math.random() * 255) + 1;
   const b = Math.floor(Math.random() * 255) + 1;
   return `rgb(${r},${g},${b})`;
}

btnRandom.addEventListener('click', () => {
   body.style.backgroundColor = makeRandomColor();;
   textRandom.innerText = makeRandomColor();;
})

const buttons = document.querySelectorAll('button')
for (let button of buttons) {
   button.addEventListener('click', colorize)
}

function colorize() {
   this.style.backgroundColor = makeRandomColor();
   this.style.color = makeRandomColor();
}

// const input = document.querySelector('input');
// input.addEventListener('keydown', function () {
//    console.log("KEYDOWN")
// })

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//    console.log(e.key);
//    console.log(e.code);
// })

// window.addEventListener('keydown', function (e) {
//    switch (e.code) {
//       case 'ArrowUp':
//          console.log("UP");
//          break;
//       case 'ArrowDown':
//          console.log("DOWN");
//    }
// })

const form = document.querySelector('#shelter');
form.addEventListener("submit", function (e) {
   e.preventDefault();
   console.log("Submitted!!");
})
//input.value - what is put into the input
//document.createElement
//append to the page
//input.value = "" if we want reset
// input and change events exist
//toggle exits

//event bubbling
//method e.stopPropagation
//event delegation
//attach to parents 275 videos, we are interested to ,,target"
//e.target.remove
//e.target.nodeName ==='Li' && e.target.remove