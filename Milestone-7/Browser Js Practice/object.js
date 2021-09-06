const student = {
    id: 1404017,
    name: 'Md Mazharul Islam',
    address: 'kushtia',
    dept: 'CSE',
    year: 2019
}

function input() {
    const cls = document.getElementById('input').value;
    hello(cls);
}

function hello(cls) {
    student[cls] = 10;
    console.log(student);
}

