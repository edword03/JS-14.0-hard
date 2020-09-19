let text = 'string';

function getStr (arg) {
  if (typeof arg !== 'string') {
    alert('Переменная не является строкой');
  } else {
    if (arg.length > 30) {
      console.log(arg.substring(0, 30) + '...');
    } else {
      console.log( arg.trim());
    }
  }
}

getStr(text);