// Q: Write code that:
// 1. Combines two arrays [1, 2, 3] and [4, 5, 6] into one array using the spread operator.
// 2. Uses the rest operator to collect arguments passed to a function into an array.
// Promises

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var arr3 = [...arr1, ...arr2];
console.log("New Array = ", arr3);

function Task6(...arg) {
  console.log("Collectec as arguments = ", arg);
}
Task6(1, 2, 3, 4, 5, 6, 7);
