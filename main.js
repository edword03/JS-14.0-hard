let num = 266219;

num = String(num).split('').reduce((sum, current) => {
  return sum * current;
});
console.log(num);

num = num**3;
console.log(String(num).slice(0, 2));