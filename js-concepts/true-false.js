/* 
Falsy:
false
0
empty string
undefined
null
NaN

-----------------
Truthy:
true
any number(positive or negative)
string(including single white space)
[]
{}
anything else that is not falsy is truthy
*/
let x = {};
console.log(x);
if (x) {
    console.log('varible is truthy');

}
else {
    console.log('variable is falsy');
}