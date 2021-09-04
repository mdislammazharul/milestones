// setTimeout delays an instruction for given seconds. 5000 milisecond = 5 second
// setTimeout, fetch --> works as asynchronous

function fourthConsole() {
    console.log('4th console');
}

console.log('1st console');
console.log('2nd console');
console.log('3rd console');
setTimeout(fourthConsole, 5000);
console.log('5th console');
console.log('6th console');
setTimeout(function () {
    console.log('7th console');
}, 4000);
console.log('8th console');