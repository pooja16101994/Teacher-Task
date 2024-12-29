/*Q: Create a promise that resolves after 2 seconds with the message "Promise resolved!". Log the message to the console when it resolves.
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});
p1.then((msg) => {
  console.log(msg);
});
