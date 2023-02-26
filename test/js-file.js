//add paragraph with red text
const container = document.querySelector("#container");

const paragraphRed = document.createElement('p');
paragraphRed.classList.add('pRed');
paragraphRed.textContent = "Hey I'm red!";
paragraphRed.style.color = "red";
container.appendChild(paragraphRed);

//add h3 with blue text
const header3 = document.createElement('h3');
header3.classList.add('header3Blue');
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";
container.appendChild(header3);

//add div with black border and pink background
const divParent = document.createElement('div');
divParent.classList.add('divParentPink');
divParent.style.borderColor = "black";
divParent.style.backgroundColor = "pink";

//add h1 under div
const divHeader = document.createElement('h1');
divHeader.classList.add('divHeaderBlack');
divHeader.textContent = "I'm in a div";
divParent.appendChild(divHeader);

//add p
const divParagraph = document.createElement('p');
divParagraph.classList.add('divParagraphBlack');
divParagraph.textContent = "ME TOO!";
divParent.appendChild(divParagraph);

//append div to container
container.appendChild(divParent);


//button
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const btn = document.querySelector('#btn');
btn.addEventListener('click', alertFunction);
btn.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue';
})

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});