// Closure : when a function remembers its lexical scope even when its executed outside lexical scope.
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// Closure scope chain
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// Time optimization
function find() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const Closure = find();
console.time("6");
Closure(6);
console.timeEnd("6");
console.time("20");
Closure(20);
console.timeEnd("20");

// Private counter
function counter() {
  var _counter = 0;

  function add(incr) {
    _counter += incr;
  }
  function retrive() {
    console.log(`counter = ${_counter}`);
  }

  return {
    add,
    retrive,
  };
}
const c = counter();
c.add(10);
c.add(9);
c.retrive();
