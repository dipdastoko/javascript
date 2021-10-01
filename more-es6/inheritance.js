class TeamMember {
    name;
    address;
    designation = 'Support web Dev';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}


class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session at', this.groupSupportTime);
        console.log(this.address);
    }
}

class StudentCare {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class neptuneDev {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(version) {
        console.log(this.name, 'Release App', version);
    }
}

const aamir = new Support('Ammir Khan', 'Dhaka', 4);
// console.log(aamir);
// aamir.startSession();

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(aamir);