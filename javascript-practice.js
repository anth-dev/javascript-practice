// Dark mode
const body = document.querySelector('body');
body.setAttribute('style', 'background-color: black; color: white;');
// Don't remove anything above this comment

const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);