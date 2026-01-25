//a document object contains representation of all the content on a page
//a document is an object , created automaticly by the browser whenever we load a new page
//is created using the contents , its based upon the contents of the page
//console.dir(document)

//selecting
const element = document.getElementById(id); //selecting elements
const elementsTag = document.getElementsByTagName('img')//or p and returns a collection

for (let img of elementsTag) {
   console.log(img.src); //iteratee through links
}

const elementsClass = document.getElementsByClassName('class_name');//gets elements from the same class

//better way
const firstElementOfType = document.querySelector('h1');//finds first h1 element, by id with #idName , and for class .idName
//can also do document.querySelector('img:nth-of-type(2)')
const allEelementsOfType = document.querySelectorAll('p');//all p elements
//can also do document.querySelectorAll('p a'); - all a in p

//manipulating
const insideText = document.querySelector('p').innerText;
//if we do document.querySelector('p').innerText = "Some text" we change its text
const insideTextBasedOnMarkup = document.querySelector('p').textContent; // every element will show
const allLinks = document.querySelectorAll('a');
for (let i of allLinks) {
   i.innerText = "I AM A LINK";
}
const insideHTML = document.querySelector('p').innerHTML; //we get all tags from the p or markup
const addTag = document.querySelectorAll('p');
for (tag of addTag) {
   tag.innerHTML = "<i>I have some marshmellows</i>"; //italic
   tag.innerHTML += "<i>I can add stuff!!</i>";
}

//attributes
const someExample = document.querySelector('#idName').id = "chosenNewName";
//can have src (source) href, title
//or use getAttribute('href) - getting dirrectly from html with .href we get the javascript object
//someExample.setAttribute("href","another link")
//const input = document.querySeelector('input[type = "text"]')
//input.setAttribute('type','text')

//change styles
const h1 = document.querySelector('h1');
h1.style.color = 'magenta';
h1.style.fontSize = '1em';
//not preffered
//to get attr - window.getComputedStyle(h1) or .color or .fontSize
// EXERCISE
const red = document.querySelector('span');
red.style.color = "red";
const orange = document.querySelector('span:nth-of-type(2)');
red.style.color = "orange";
//and so on

//ClassList
const h2 = document.querySelector("h2");
h2.classList.add('purple');//object to control the classes of an element 
h2.classList.add('border'); //class = "purple border"
h2.classList.remove('purple');
h2.classList.contains('purple');//false
h2.classList.toggle('purple');//removes token and returns false or true

//Traversing Parent/Child/Sibling
const firstBold = document.querySelector('b');
firstBold.parentElement; //gives p is <p><b></b></p>
//we can also do .parentEelment.parentElement etcc
const paragraph = firstBold.parentElement;
paragraph.childElementCount; //counts nr of nested children
paragraph.children; // HTMLCollection(8) [b,b,a,a,a,a] 
firstBold.nextSibling; /// gives the corresponding node
firstBold.previousSibling;
firstBold.nextElementSibling;//difference 

//Append
const newImg = document.createElement('img');
newImg.src = "link"; //creating of img elem
//we need to append it on the page
document.body.appendChild(newImg); //appends as last child
newImg.classList.add("square");//made it smaller
const newH3 = document.createElement('h3');
newH3.innerText = "I am a h3";
document.body.appendChild(newH3);

const p = document.querySelector('p');
p.append('i am new text iei', "another text");

//prepend
const newB = document.createElement('b');
newB.append('I am bold hi');
p.prepend(newB); // newB will appear before p

newB.insertAdjacentElement('beforebegin', element); //between 
//h1.after(h3), before etc
//remove and removeChild
//get the parent element and removeChild
//newB.parentElement.removeChild(b)
//remove automaticly removes the element