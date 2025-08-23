const messageElem = document.querySelector('.message');
const btnElem = document.querySelector('.btn');

messageElem.innerText = 'Initial Text';

btnElem.addEventListener('click', () => {
  messageElem.innerText = 'The button was clicked!';
  // messageElem.innerHTML = 'the <b>button</b> was clicked!';
});
