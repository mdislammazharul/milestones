const students = [
    { name: 'jalil', roll: 2, class: 7 },
    { name: 'khalil', roll: 6, class: 8 },
    { name: 'rahim', roll: 8, class: 9 },
    { name: 'karim', roll: 1, class: 10 },
    { name: 'halim', roll: 3, class: 6 },
]

// if we try to find a property from the arraym, and use map/filter/find, then we dont need to add the [].
// here 'student' after filter is not the main array 
const rahim = students.filter(student => student.name === 'rahim');

// but we have to add the [] array after the main array (students / rahim), if we want to find a property from it.
console.log(rahim[0].roll);
console.log(students[3].class);
console.log(rahim[0]);