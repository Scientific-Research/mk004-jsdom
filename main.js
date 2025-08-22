const messageElem = document.querySelector('.message');
const btnElem = document.querySelector('.btn');

messageElem.innerText = 'Initial Text';

btnElem.addEventListener('click', () => {
  messageElem.innerText = 'Text button was clicked!';
});
