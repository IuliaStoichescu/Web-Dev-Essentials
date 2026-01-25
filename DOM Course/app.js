const container = document.querySelector('#container');
const link = './pokeIcons/'

for (let i = 1; i <= 143; i++) {
   const newImg = document.createElement('img');
   newImg.src = `${link}${i}.png`;
   // container.appendChild(newImg);
   const newDiv = document.createElement('div');
   newDiv.classList.add('pokemon');
   const newSpan = document.createElement('span');
   newSpan.innerText = `#${i}`;
   newDiv.appendChild(newImg);
   newDiv.appendChild(newSpan);
   container.appendChild(newDiv);
}