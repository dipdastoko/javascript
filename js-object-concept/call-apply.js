const kibria = {
    id: 101,
    money: 5000,
    name: 'Rj kibria',
    treatDey: function (expense, boksish) {
        this.money = this.money - expense - boksish;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 6000

}
const normalGolam = {
    id: 103,
    name: 'Normal Golam',
    money: 8000
}

//call
// kibria.treatDey.call(heroBalam, 500, 100);
// kibria.treatDey.call(normalGolam, 500, 50);

kibria.treatDey.apply(heroBalam, [500, 100]);