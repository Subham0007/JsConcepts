// Currying is a technique in functional programming where a function is transformed into a series of functions, each taking a single argument.
function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(f(5)(6));
// The curried function returns a new function for each argument until all arguments are provided, at which point it returns the final result.
