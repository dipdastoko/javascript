const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);
// console.log(words);

//slice
const smallSlice = anthem.slice(5, 13);
//console.log(smallSlice);

//substr
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

const anotherPart2 = anthem.substring(11, 15);
// console.log(anotherPart2);

// concat
const first = 'Amader';
const second = 'City';
const fullString = first.concat(second).concat('Dhaka');
// console.log(fullString);

const words2 = ['a', 'b', 'c', 'd'];
const allJoined = words2.join(' X ');
console.log(allJoined);

