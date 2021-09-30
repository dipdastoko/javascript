const add = (num1, num2) => num1 + num2;
const sum = add(10, 15);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 4);

const fiveTimes = (num) => num * 5;
const output = fiveTimes(17);

const tenTimes = num => num * 10;
const value = tenTimes(17);

const getNames = () => 'Brandon'
const name = getNames();

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(5, 1);

console.log(sum);
console.log(result);
console.log(output);
console.log(value);
console.log(name);
console.log(total);


