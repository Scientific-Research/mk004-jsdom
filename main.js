const messageElem = document.querySelector('.message');
const btnElem = document.querySelector('.btn');

messageElem.innerText = 'Initial Text';

// Event mit addEventListener
// btnElem.addEventListener('click', () => {
//   messageElem.innerText = 'The button was clicked!';
//   // messageElem.innerHTML = 'the <b>button</b> was clicked!';
// });

// Event mit Onclick()
// const test = () => {
//   messageElem.innerText = 'The Button was clicked!!!!!';
// };

const changeText = () => {
  messageElem.innerText = 'The Button was clicked!!!!!';
};
