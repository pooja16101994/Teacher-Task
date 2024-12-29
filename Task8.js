/*Q: Given the array:
const numbers = [1, 2, 3, 4, 5];
1. Use map to create a new array where each number is doubled.
2. Use filter to create a new array with only the even numbers.
 */

const numbers = [1, 2, 3, 4, 5];
var newArr = numbers.map((ele) => ele + ele);
console.log(newArr);

var newArr1 = numbers.filter((ele) => ele % 2 == 0);
console.log(newArr1);
