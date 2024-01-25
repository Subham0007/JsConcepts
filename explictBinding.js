// call
var obj = { name: "subham" };
function foo(age) {
  return "Hello " + this.name + " age :" + age;
}
console.log(foo.call(obj, 26));

// apply
var obj1 = { name: "subham" };
function foo(age) {
  return "Hello " + this.name + " age :" + age;
}
console.log(foo.apply(obj1, [26]));

// bind
var obj2 = { name: "subham" };
function foo(age) {
  return "Hello " + this.name + " age :" + age;
}
const bindFunc = foo.bind(obj2);
console.log(bindFunc(26));

let arr = [1, 2, 3, 4, 2, 1];
let arr1 = ["a", "b"];
let arr2 = [...arr, ...arr1];
console.log(arr2);
arr.push.apply(arr, arr1);
console.log(arr);
let arr3 = [...new Set(arr)];
console.log(arr3);

// max

let arr4 = [1, 2, 3, 4, 2, 1];
console.log(Math.max.apply(null, arr4));
console.log(Math.min.apply(null, arr4));

// bind chaining doesnt happen
function f() {
  console.log(this.name);
}
f = f.bind({ name: "hello" }).bind({ name: "hi" });
f(); // hello

// we cant manipulate the context of an arrow function with help of explict binding.
