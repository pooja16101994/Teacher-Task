/*Q1: What's the difference between let and const? Write code that demonstrates their behavior in a block scope.
Ans: 
1) let = let keyword is used to declare the variable, the let variable is only used in block scope cannot use outside the block. We can reassigned the let variable to new value.
2) Const = const is used to declare constant variable(e.g. pi = 3.14, as pi value will not be change ), we can not reassign the const variable. Cannot use outside the block. */

function Task1() {
  let a = 10;
  const b = 22;

  console.log("a = ", a);
  console.log("b = ", b);

  a = 111;
  //   b = 555; //TypeError: Assignment to constant variable.
  console.log("After Updation a = ", a);
  console.log("After Updation b = ", b);
}
Task1();
// a and b is not defined
// console.log("a = ", a);
// console.log("b = ", b);
