const student = {
    id: 101,
    money: 5000,
    name: 'Rj kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'is taking exam');
    },
    treatDey: function (expense, boksish) {
        this.money = this.money - expense - boksish;
        return this.money;
    }
}

student.takeExam();
const remaining = student.treatDey(900, 50);
console.log(remaining);
