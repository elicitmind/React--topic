var numbers = [3, 56, 2, 48, 5];

numbers.map((e) => console.log(e + Math.random()));

const newNum = numbers.map((e) => console.log(e * 5 + 5));
console.log(newNum);

numbers.map((e) => {
  if (e > 10) {
    return console.log("my number higher than 10 is " + e);
  } else {
    return console.log("number lower or equal 10 is " + e);
  }
});

numbers.forEach((e) => console.log(e + 1));
numbers.map((e) => console.log(e + 1));

//Map -Create a new array by doing something with each item in an array.
