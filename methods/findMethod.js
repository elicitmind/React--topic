var numbers = [51, 3, 56, 2, 48, 5, 100, 2];

const num = numbers.find((e) => e > 50);

console.log(num);

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 }
];

const result = inventory.find(({ name }) => name === "bananas");

console.log(result);

const test = [
  { random: 4334, x: 1, b: "helo" },
  { xtra: 32, x: 5, b: "aye" },
  { boom: "headshot", x: 7, b: "hooor" }
];

const lookup = test.find(({ b }) => b === "hooor");
console.log(lookup);

//Find - find the first item that matches from an array.

const index = numbers.findIndex((e) => e < 3);

// console.log(index);

//FindIndex - find the index of the first item that matches.
