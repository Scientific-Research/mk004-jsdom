console.log('javascript works!');

const messageElem = document.querySelector('.message');

console.log(messageElem.innerText);
console.log(messageElem.innerHTML);

messageElem.innerText = "Hallo, wie geht's";
messageElem.innerHTML = "Hallo, wie geht's";
console.log(messageElem);
