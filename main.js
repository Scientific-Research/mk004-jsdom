const messageElem = document.querySelector('.message');
const btnElem = document.querySelector('.btn');
const inputElem = document.querySelector('.userText');

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

// const changeText = () => {
//   messageElem.innerText = 'The Button was clicked!!!!!';
// };

// implement onkeydown
btnElem.addEventListener('click', () => {
  // messageElem.innerText = 'The button was clicked!';
  // messageElem.innerHTML = 'the <b>button</b> was clicked!';
  // console.log(inputElem);
  console.log(inputElem.value);
  if (inputElem.value !== '') {
    messageElem.innerText = inputElem.value;
  }

  // else {
  //   return;
  // }

  // if (inputElem.value === '') {
  //   messageElem.innerText = 'Initial Text';
  // }
  inputElem.value = '';
});

// keydown
// inputElem.addEventListener('keyup', () => {
// inputElem.addEventListener('keydown', () => {
// inputElem.addEventListener('keyup', () => {
//   console.log('test');
//   if (inputElem.value !== '') {
//     messageElem.innerText = inputElem.value;
//   } else {
//     messageElem.innerText = 'Initial Text';
//   }
// });
// inputElem.value = '';

// do the same but mit ENTER key:
inputElem.addEventListener('keypress', (e) => {
  if (inputElem.value !== '' && e.keyCode === 13) {
    messageElem.innerText = inputElem.value;
    inputElem.value = '';
  }

  // else {
  //   messageElem.innerText = 'Initial Text';
  // }
});
