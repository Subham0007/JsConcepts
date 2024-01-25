// this
let user1 = {
  name: "subham",
  age: 26,
  new: {
    newName: "Aich",
    getName1() {
      console.log(this.newName, this.name);
    },
  },
  getName() {
    console.log(this.name);
  },
  getArName: () => {
    console.log(this.name);
  },
  New2: {
    newName: "Aich",
    getArName1: () => {
      console.log(this.name);
    },
    getArParent() {
      const arrow = () => console.log(this.newName, this.name);
      arrow();
    },
  },
  getNameParent() {
    const arrow = () => console.log(this.name);
    arrow();
  },
};
user1.getName(); // "Subham"
user1.new.getName1(); // "Aich"  undefined
user1.getArName(); // undefined its pointing to the window object(it points to parent function).
user1.New2.getArName1(); // undefined its pointing to the window object(it points to parent function).
user1.getNameParent(); // "Subham" takes value from its parent function
user1.New2.getArParent(); // "Aich"  undefined takes value from its parent function

// this and class
class test {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}
const Test = new test("subham");
Test.getName("subham"); //"Subham"

// Output Questions 1 //
const user = {
  firstName: "Subham",
  getName() {
    const firstName = "Aich";
    return this.firstName;
  },
};

console.log(user.getName()); //Subham

// Output Questions 2 //
function makeUser() {
  return {
    name: "Subham",
    ref: this,
  };
}
let user2 = makeUser();
console.log(user2.ref.name); // undefined as this is point towards its parent window object here.

function makeUser1() {
  return {
    name: "Subham",
    ref() {
      return this;
    },
  };
}
let user3 = makeUser1();
console.log(user3.ref().name); // Subham here this returns its parent object.

// Output Questions 3 //
let cal = {
  read() {
    this.a = +prompt("a =", 0); // + converts input to int
    this.b = +prompt("b =", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
cal.read();
console.log(cal.sum());
console.log(cal.mul());
