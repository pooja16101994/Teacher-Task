/*Q: Given the object:
const user = { name: "Alice", age: 30, city: "New York" };
Extract the name and city properties using destructuring.
 */

const user = { name: "Alice", age: 30, city: "New York" };

const { name, city } = user;
console.log(name);
console.log(city);
