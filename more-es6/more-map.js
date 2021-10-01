const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Bardy', 'Tom Solaiman'];

const fLength = friends.map(friend => friend.length);
console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productsName = products.map(product => product.name);
const productsPrices = products.map(x => x.price);
console.log(productsName);
console.log(productsPrices);

products.map(x => console.log(x));
products.forEach(product => console.log(product));