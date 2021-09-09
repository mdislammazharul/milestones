// declaring array --> type --> number[]
const friendSalaries: number[] = [7500, 12300, 17200, 9400, 8300];

// string array
const friends: string[] = ['Rahim', 'Karim', 'Habib'];

// updating array
friendSalaries[0] = 10500;
friendSalaries.push(13100);

// array operation
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}