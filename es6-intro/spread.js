

// console.log(numbers);
// console.log(...numbers);

const numbers = [1, 2, 3, 4, 5, 6];

const max = Math.max(1, 2, 4);
const maxInArray = Math.max(...numbers);

console.log(max, maxInArray);

const numbers2 = [22, ...numbers, 88];
numbers.push(7);

console.log(numbers);
console.log(numbers2);