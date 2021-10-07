//uusing object literal
const student = { name: 'sakib', job: 'cricketer' };

//constructor
const person = new Object();

// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const pepo = new People('Manush', 12);
// console.log(pepo);

//function
function Manus(name) {
    this.name = name;
}
const man = new Manus('Kader');
console.log(man);
