/*
Data Types

Primitive-
1. Number
2. String
3. Boolean
4. Undifined
5. Null

7. Symbol

Non-primitive
6. Object
*/
let a = 'hello';
let b = a;
a = 'gello';
// console.log(a, b);

const x = { job: 'web developer' };
const y = x;
y.job = 'front end web developer';
console.log(x, y);