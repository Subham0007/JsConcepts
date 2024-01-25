// Function expression with anonymous function.
const lol = function () {
  console.log("lol");
};
// First class functions
// IIFE : Immediatly Invoked function expressions
(function () {
  console.log("gg");
})();
// Functions are hoisted to the top.
// params vs arguments
function test(x, y) {
  // params
  return x * y;
}
test(5, 6); // arguments
// Rest vs Spread operator
function test2(a, b, ...arr) {
  console.log(a + arr[1]);
}
let arr = [1, 2, 3, 4];
test2(...arr); // Spread operator
// Callback function : function which is passed into another function as an agrument.
// which is invoked inside the outer function to complete some kind of action or routine.
// e.g : setTimeout(), map(), reduce() etc.

// Arrow functions
// syntax is different
const arrow = (test, test2) => test + test2;
// return is different from normal function.
// arguments is not defined in an arrow function.
// this key word : its point towards the global scope.
