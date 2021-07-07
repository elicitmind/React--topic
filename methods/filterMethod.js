var numbers = [3, 56, 2, 48, 5];

const moreThanTen = numbers.filter((e) => e > 10);
const lessThanTen = numbers.filter((e) => e < 10);

console.log(moreThanTen);
console.log(lessThanTen);

let words = [
  "might",
  "abundance",
  "exuberant",
  "discipline",
  "elite",
  "present"
];

const result = words.filter((word) => word.length > 6);

console.log(result);

//Filter - Create a new array by keeping the items that return true.
