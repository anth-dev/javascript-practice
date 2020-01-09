// Dark mode
const body = document.querySelector('body');
body.style.cssText = 'background-color: black; color: white;';
// Don't remove anything above this comment

// Exercise

var btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert('Hello World');
});

var btn3 = document.querySelector('#btn3');
btn3.onclick = alertFunction;

var btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', alertFunction);

var btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
});

var btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});

function alertFunction() {
    alert('YAY! YOU DID IT!');
}

// all your buttons are belong to us
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        alert(button.id);
    });
});
