const student = {
    id: 101,
    name: 'RJ Kibrea',
    money: 5000,
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        // this.name --> name is a property of this object, so use this. here
        console.log(this.name, 'taking exam');
    },
    treateDey: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}

// calling function from student object
student.takeExam();
const remaining = student.treateDey(900);
console.log(remaining);