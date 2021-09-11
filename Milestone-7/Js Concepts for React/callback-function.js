// // normal way to function
function modifyArray(arr) {
    arr.push(100);
    return arr;
}

var arr = [1, 2, 3, 4, 5];
console.log('array has been modified', modifyArray(arr));

// same task with callback function
function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
    console.log("array has been modified", arr);
});

// -------------------
// another example
const message = function () {
    console.log('This is 3 second late');
}

setTimeout(message, 3000);

// now we can rewrite the program without declaring 'const message' and replace the 'message' inside the setTimeout function--

setTimeout(function () {
    console.log('This is 3 second late');
}, 3000);

