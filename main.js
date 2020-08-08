const num = 266219;

console.log(String(num).split('').reduce((sum, current) => {
  return sum * current;
})**3);

