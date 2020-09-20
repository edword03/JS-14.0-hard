'use strict';
let text = '         ddddddddddddddddddddddd                ';
const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getStr (arg) {
  if (typeof arg !== 'string') {
    alert('Переменная не является строкой типом данных String');
  } else {
    let str = arg.trim();
    if (str.length > 30) {
      console.log(arg.substring(0, 30).trim() + '...');
    } else if (isNumber(str)) {
      alert('Переменная не является строкой');
    } else {
      console.log(str);
    }
  }
}

getStr(text);