/* problem04.js */
function sumUpToTen(n) {
  let sum = 0;
  let i = 1;

  while (i <= n) {
    if (i > 10) i++; // 🚨
    sum += i;
    i++;
  }

  return sum;
}
module.exports = sumUpToTen;
