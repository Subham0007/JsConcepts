/* // function duplicateValue (arr) {
//   arr.array.forEach(element => {
//     if (arr.indexOf(element.value) > 1) {
//       console.log('duplicate value'+ element.value)
//     } else {
//       console.log('unique value' + element.value))
//     }
//   });
// }
//  let arr2 = [... new Set(arr)]

function test(arr) {
  // only returns unique
  let arr2 = [...new Set(arr)];
  console.log(arr2);
  let arr3 = [];
  arr.forEach((element) => {
    console.log(element);
    if (arr2.indexOf(element) == -1) {
      arr3.push(element);
      // Only returns duplicate value
      console.log(arr3);
    }
  });
  return arr2;
}

let arr = [1, 1, 1, 12, 2, 2, 3, 4, 5, 6, 7];
test(arr);
// input string: "this is javascript"

// output string: "siht si tpircsavaj"

// function reverse(str){
//   let i=0;
//   let space = str.indexOf(" ");
//   let str1 = str.substring(0,space);
//   let revstr1 = str.reverse();

//  for (i,i< str.length, i++) {
//     str.reverse
//  }
// }

function getNonUniqueValues(arr) {
  const uniqueSet = new Set();
  const nonUniqueArray = [];

  for (const element of arr) {
    if (uniqueSet.has(element)) {
      // If the element is already in the set, it's a duplicate
      nonUniqueArray.push(element);
    } else {
      // If the element is not in the set, add it
      uniqueSet.add(element);
    }
  }

  return nonUniqueArray;
}

const inputArray = [1, 2, 2, 3, 4, 4, 5];
const nonUniqueArray = getNonUniqueValues(inputArray);
console.log(nonUniqueArray); // Output: [2, 2, 4, 4]

function getNonUniqueValues(arr) {
  const uniqueSet = new Set();
  const nonUniqueArray = [];

  for (const element of arr) {
    if (uniqueSet.has(element)) {
      nonUniqueArray.push(element);
    } else {
      uniqueSet.add(element);
    }
  }
}

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("gg");
    } else {
      reject("boo");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });



// Call the function to start processing the items
processItems();
 */

// // for-of loop arrays
// let emp = ["qwrrr", "efersfgdg", "dfsdfddfd"];
// for (let employee of emp) {
//   console.log(employee);
// }

// // for-of loop objects - reliable
// const emp1 = {
//   name: "subham",
//   company: "Ideagen EHS",
//   experience: 4.5,
// };

// console.log(Object.keys(emp1));
// console.log(Object.values(emp1));
// console.log(Object.entries(emp1));

// for (let key of Object.keys(emp1)) {
//   console.log(key + " : " + emp1[key]);
// }
