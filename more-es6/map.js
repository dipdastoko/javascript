const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
console.log(output2);
//1. loop korsi
//2. element diye function ke call korsi
//3. result ekta array er moddhe push korsi
// ei 3 ta kaj ekta line e kora possible

const output = numbers.map(doubleIt);//numbers.map nubers array er upor loop chalabe and prrottekta element er jonno doubleIt function k call korbe and prottekta elemnt er jonno function er result left side output er moddhe array hisebe store korbe

const output3 = numbers.map(x => x * 2);
//function call na kore direct arrow function map er vitor lekha jay
console.log(output);
console.log(output3);