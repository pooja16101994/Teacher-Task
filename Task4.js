/* Q: Create a function that calculates the area of a rectangle, where the height has a default value of 10 if not provided.
 */
function area(width, height = 10) {
  var area = width * height;
  return area;
}
console.log("With Height = ", area(3, 4));
console.log("Without Height = ", area(3));
