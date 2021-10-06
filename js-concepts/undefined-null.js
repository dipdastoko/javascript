/* 
List of undefined-
1. variable value not assigned
2. function but didn't return anything
3. wrote return in a function but didn't return anything
4. parameterr that isn't passed
5. property that doesn't exist in a object
6. accessing array element out of range
7. accessing deleted element of an array
8. explicitly set value to undefined
*/
let first;
// console.log(first);

function second(x, y) {
    const sum = x + y;
}
const result = second(9, 31);
// console.log(result);

function add(a, b) {
    const sum = a + b;
    return;
    if (b < 10) {
        return;
    }
    const fun = a + b;
    return sum;
}

const fourth = add(2, 7);
// console.log(fourth);
function double(a, b) {
    const result = a * b;
    console.log(b);
    return result;
}
// console.log(double(32));
const fifth = { name: 'sogir' };
// console.log(fifth.age);

const sixth = [2, 3, 4];
// console.log(sixth[3]);
delete sixth[2];
// console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh);

const myObject = { name: 'samad', profession: null };