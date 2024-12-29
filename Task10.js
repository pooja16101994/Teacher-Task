/*
1. Create a Set with unique values from an array [1, 2, 2, 3, 4, 4].
2. Create a Map that stores a fruit name as a key and its color as a value (e.g., apple -> red). 
*/

var arr1 = [1, 2, 2, 3, 4, 4];
var uniqueSet = new Set(arr1);
console.log(uniqueSet);

const fruits = new Map();
fruits.set("apple", "red");
fruits.set("Mango", "Yellow");
fruits.set("Kiwi", "Green");
console.log(fruits);
