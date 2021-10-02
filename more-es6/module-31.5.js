//1
const num1 = 5;
let num2 = 3;
const product = { name: 'xiomi', price: 15000 };

//2
const str1 = `${num1} is greater than ${num2}. ${product.name} remi note 7 price is ${product.price}`;


//3.1
const output = x => x / 5;

//3.2
const output2 = (x, y) => (x + 2) * (y + 2);

//3.3
const output3 = (x, y, z) => x * y * z;

//3.4
const arrowMultiLine = (x, y) => {
    x = x + 2;
    y = y + 2;
    return x * y;
}

//5
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mapped = array.map(x => x * 5);

//6
const filtered = array.filter(x => x % 2 != 0);

//7
const products = [
    { name: 'phone', price: 4000 },
    { name: 'watch', price: 5000 }

];
const found = products.find(product => product.price == 5000);

//8
const obj = { name: 'phone', price: 4000, color: 'red' };
const { name, price } = obj;

//9
const [zero, one, two, three] = [...array];
console.log(three);

//10
function defaultValue(x, y, z = 5) {
    return x + y + z;
}
// console.log(defaultValue(5, 5));

//11
const obj11 = {
    name: {
        name: {
            name1: 'Dip',
            name2: 'Das'
        },
        price: [1000, 2000, 3000]
    },
    color: 'red'
};
console.log(obj11.name.name.name1?.names);