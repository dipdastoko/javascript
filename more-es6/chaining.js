//destructuring object
const myObject = { x: 2, y: 50, Z: 600, a: 25, b: 68, }
const { a, b } = myObject;
console.log(b);

//destructuring array
const [best, faltu] = [38, 49];
console.log(best, faltu);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: { work: 'website development', employee: 22, framework: 'react' }
}

console.log(company.web?.tech?.third); //here tech and third is not defined. To avoid error we put ? mark before dot(.)  and it is called chaining.