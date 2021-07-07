//Reduce - Accumulate a value by doing something to each item in an array.

var numbers = [3, 56, 2, 48, 5];

const sumOfArrayElements = numbers.reduce((accumulator, e) => {
  console.log("accumulator = " + accumulator);
  console.log("e = " + e);

  return accumulator + e;
});

console.log(sumOfArrayElements);

const numbers2 = [1, 5, 6, 7, 10, 15];

const multiplyElements = numbers2.reduce((acc, curr) => {
  console.log("acc = " + acc);
  console.log("curr = " + curr);
  return acc * curr;
});
console.log(multiplyElements);

// The first time the callback is called, accumulator and currentValue can be
//  one of two values. If initialValue is provided in the call to reduce(),
//   then accumulator will be equal to initialValue, and currentValue will be
//   equal to the first value in the array. If no initialValue is provided,
//   then accumulator will be equal to the first value in the array, and
//   currentValue will be equal to the second.
