// array like object-map
const students = [
    { name: 'jalil', roll: 2, batch: 7 },
    { name: 'khalil', roll: 6, batch: 8 },
    { name: 'rahim', roll: 8, batch: 9 },
    { name: 'karim', roll: 1, batch: 10 },
    { name: 'halim', roll: 3, batch: 6 },
]

const newStudent = students.forEach(student => {
    const newStd = {};
    newStd['fullname'] = student.name;
    newStd['roll'] = student.roll;
    newStd['class'] = student.batch;

    console.log(newStd);
})