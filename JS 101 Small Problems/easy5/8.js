console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

function digitList(num) {
  return String(num).split('').map(element => Number(element));
}

/*
function digitList(num) {
  let arr = [];
  while (num >= 1 ) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  return arr.reverse();
}
*/
