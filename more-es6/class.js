class Support {
    name;
    address;
    designation = 'Support web Dev';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
        console.log(this.address);
    }
}

const aamir = new Support('Ammir Khan', 'Dhaka');
// console.log(aamir);
aamir.startSession();