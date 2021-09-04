let seconds = 0;

// setInterval sets a fixed time interval to show something. we can stop the continious iteration by declaring clearInterval.

// clearInterval needs a input parameter.
const timeId = setInterval(() => {
    seconds++;
    console.log(seconds);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 5000);