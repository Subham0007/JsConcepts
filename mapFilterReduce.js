Array.prototype.customMap = function (call) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(call(this[i], i, this));
  }
  return temp;
};

let num = [1, 2, 3];
let num2 = num.customMap((e, i, arr) => {
  return e * 5;
});

console.log(num2);

Array.prototype.customFilter = function (call) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (call(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

let num3 = num.customFilter((e, i, arr) => {
  return e > 2;
});

console.log(num3);

Array.prototype.customReducer = function (call, initailVal) {
  var accumulator = initailVal;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? call(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};
let num4 = num.customReducer((e, i, arr) => {
  return e * i;
});

console.log(num4);
