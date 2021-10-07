const kibria = {
    id: 101,
    money: 5000,
    name: 'Rj kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
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
kibria.treatDey(100);

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);

const golamTreatDey = kibria.treatDey.bind(normalGolam);
golamTreatDey(1000);