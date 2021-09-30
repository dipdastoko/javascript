const fish = { id: 34, name: 'Hilsha', price: 9000, phone: '01712903903', address: 'chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;

console.log(phone);
console.log(price);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: { work: 'website development', employee: 22, framework: 'react' }
}
// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;
const { food } = company.ceo;

console.log(work, framework, food);