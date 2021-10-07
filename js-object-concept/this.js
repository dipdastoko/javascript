// console.log(this);
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
