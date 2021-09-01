const student = {
    id: 1404017,
    name: {
        first_name: 'Md Mazharul',
        last_name: 'Islam',
    },
    subjects: ['CSE 1101', 'CSE 1102', 'MATH 1101', 'PHY 1101'],
    totalCredit: function () {
        return this.subjects.length * 3;
    },
    creditCost: function (perCredit) {
        return this.totalCredit() * perCredit;
    },
    fullName: function () {
        return `${this.name.first_name} ${this.name.last_name}`;
    },
    subjectTaken: function () {
        return `${this.name.first_name} takes ${this.subjects[1]} and ${this.subjects[3]}`
    }
}

const credits = student.totalCredit();
console.log(credits);
const cost = student.creditCost(500);
console.log(cost);
const name = student.fullName();
console.log(name);
console.log(student.subjectTaken());