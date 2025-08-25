const messageElem1 = document.querySelector('.message1');
const messageElem2 = document.querySelector('.message2');
const btnElem1 = document.querySelector('.btn1');
const btnElem2 = document.querySelector('.btn2');
const inputElem1 = document.querySelector('.userText1');
const inputElem2 = document.querySelector('.userText2');
const btnToggleElem = document.querySelector('.btnToggle');
const hiddenElem = document.querySelector('.hidden');
const scoresContentElem = document.querySelector('.scoresContent');

const scoreItems = [
  {
    user: 'EJT',
    score: '01842',
  },
  {
    user: 'PPB',
    score: '01812',
  },
  {
    user: 'EJT',
    score: '01442',
  },
];

inputElem1.focus();
inputElem1.value = '';
inputElem2.value = '';

// General Function
const changeTheText = (messageElem, inputElem) => {
  messageElem.innerText = inputElem.value;
  inputElem.value = '';

  if (inputElem === inputElem1) {
    inputElem2.focus();
  } else {
    inputElem1.focus();
  }
};

// const changeTheText = () => {
//   messageElem1.innerText = inputElem1.value;
//   inputElem1.value = '';
//   inputElem2.focus();
// };

// implement onkeydown
btnElem1.addEventListener('click', () => {
  console.log(inputElem1);
  if (inputElem1.value !== '') {
    changeTheText(messageElem1, inputElem1);
  }
});

// do the same but mit ENTER key:
inputElem1.addEventListener('keypress', (e) => {
  if (inputElem1.value !== '' && e.keyCode === 13) {
    changeTheText(messageElem1, inputElem1);
  }
});

// implement onkeydown
btnElem2.addEventListener('click', () => {
  console.log(inputElem2);
  if (inputElem2.value !== '') {
    changeTheText(messageElem2, inputElem2);
  }
});

// do the same but mit ENTER key:
inputElem2.addEventListener('keypress', (e) => {
  if (inputElem2.value !== '' && e.keyCode === 13) {
    changeTheText(messageElem2, inputElem2);
  }
});

// Toggle Button using Ternary Operator
// First Solution => OK
// hiddenElem.style.display = 'none';
// btnToggleElem.addEventListener('click', () => {
//   // hiddenElem.style.display = 'block';
//   hiddenElem.style.display =
//     hiddenElem.style.display === 'none' ? 'block' : 'none';
// });

// Toggle Button using classList.toggle()
// Second Solution => OK
btnToggleElem.addEventListener('click', () => {
  hiddenElem.classList.toggle('hidden');
});

// SCORES
scoresContentElem.innerHTML = 'kkk';
// scores.forEach((s) => {
//   (scoresContentElem.innerHTML = s.user),
//     (scoresContentElem.innerHTML = s.score);
// });

scoresContentElem.innerHTML = scoreItems
  .map((s) => {
    return `<div style = "margin : 1rem 0; background-color: #2b1527ff;width:110px; padding:1rem">${s.user} -> ${s.score}</div>`;
  })
  .join(' ');
