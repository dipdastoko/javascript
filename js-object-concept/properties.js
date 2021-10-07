const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

//getting all property name
const keys = Object.keys(bottle);
// console.log(keys);

//getting all values
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 49;
delete bottle.isCleaned;
console.log(bottle);