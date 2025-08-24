const messageElem1 = document.querySelector('.message1');
const messageElem2 = document.querySelector('.message2');
const btnElem1 = document.querySelector('.btn1');
const btnElem2 = document.querySelector('.btn2');
const inputElem1 = document.querySelector('.userText1');
const inputElem2 = document.querySelector('.userText2');

// messageElem1.innerText = 'Initial Text';
inputElem1.focus();
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

// Allgemeine Function für beide addEventListeners()
const changeTheText = () => {
  messageElem1.innerText = inputElem1.value;
  // messageElem.innerText = inputElem2.value;
  inputElem1.value = '';
  inputElem1.focus();
};

// implement onkeydown
btnElem1.addEventListener('click', () => {
  // messageElem.innerText = 'The button was clicked!';
  // messageElem.innerHTML = 'the <b>button</b> was clicked!';
  console.log(inputElem1);
  if (inputElem1.value !== '') {
    // messageElem.innerText = inputElem.value;
    // inputElem.value = '';
    changeTheText();
  }

  // else {
  //   return;
  // }

  // if (inputElem.value === '') {
  //   messageElem.innerText = 'Initial Text';
  // }
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
inputElem1.addEventListener('keypress', (e) => {
  if (inputElem1.value !== '' && e.keyCode === 13) {
    // messageElem.innerText = inputElem.value;
    // inputElem.value = '';
    changeTheText();
  }

  // else {
  //   messageElem.innerText = 'Initial Text';
  // }
});
