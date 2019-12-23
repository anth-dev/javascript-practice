// Dark mode
const body = document.querySelector('body');
body.setAttribute('style', 'background-color: black; color: white;');
// Don't remove anything above this comment

// Exercise

// Add the following elements to the container using ONLY javascript - do not add any
// HTML or CSS code.

// 1. a <p> with red text that says “Hey I’m red!”
// 2. an <h3> with blue text that says “I’m a blue h3!”
// 3. a <div> with a cornflowerblue border and pink background color with the following 
// elements inside of it:
//      * another <h1> that says “I’m in a div”
//      * a <p> that says “ME TOO!”
//      * Hint for this one: after creating the div with createElement, append the 
//          <h1> and <p> to it before adding it to the container.

const container = document.querySelector('#container');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');

p.style.cssText = 'color: red';
p.textContent = 'Hey I\'m red!';
container.appendChild(p);

h3.style.cssText = 'color: blue';
h3.textContent = 'I\'m a blue h3!';
container.appendChild(h3);


div.style.cssText = 'border-style: solid; border-color: cornflowerblue; background-color: pink'
container.appendChild(div);
