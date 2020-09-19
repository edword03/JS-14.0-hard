'use strict';
const start = document.querySelector('.start'),
  reset = document.querySelector('.reset'),
  elem = document.querySelector('.elem');


let interval,
count = 0;
// const getRandom = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

const moveCicrle = () => {
  count++;
  console.log('count: ', count);

  if (count < 500) {
    elem.style.left = `${count}px`;
    elem.style.top = `${count}px`;
  } else if (count === 500) {
    // count = 0;
    elem.style.left = `${500}px`;
    elem.style.top = `${500}px`;
  } else if (count > 500) {
    elem.style.top = `${1000 - count}px`;
  } else if (count === 900) {
    elem.style.top = `${900}px`;
  } else if (count > 900) {
    elem.style.left = `${count}px`;
  }

  interval = requestAnimationFrame(moveCicrle);
};

let animate = false;
start.addEventListener('click', () => {
    if (animate) {
      interval = requestAnimationFrame(moveCicrle);
      animate = false;
    } else {
      animate = true;
      cancelAnimationFrame(interval);
    }
});

reset.addEventListener('click', () => {
  count = 0;
  cancelAnimationFrame(interval);
  
  elem.style.left = 10 + '%';
  elem.style.top = 10 + '%';
});