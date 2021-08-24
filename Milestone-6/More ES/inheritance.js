class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    designation = 'Support Web Dev';
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log('Start a support session.');
    }
}

class StudentCare extends TeamMember {
    designation = 'Student Care';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    designation = 'Software Engineer';
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);

const aamir = new Support('Amir Khan', 'BD', 11);
const solaiman = new Support('Solaiman Khan', 'Dubai', 04);
console.log(aamir);
console.log(solaiman);

const ash = new NeptuneDev('Ash', 'Mumbai', 'Android Studio');
console.log(ash);
ash.releaseApp('5.6.1');