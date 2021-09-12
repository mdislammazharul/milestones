// setTimeout --> setTimeout (function , interval)
// function --> () => {}
setTimeout(() => {
    console.log("I'm 3 sec late");
}, 3000)

setTimeout(() => {
    console.log("I'm faster than the previous one");
}, 2000)