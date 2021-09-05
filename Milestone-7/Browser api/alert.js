// alert --> only ok
const momComing = () => {
    alert("I'm here!");
}

// confirm --> ok & no
const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response == true) {
        alert("Give me the money!!")
    }
    else {
        alert("DGM !!");
    }
}

// prompt
const askName = () => {
    const name = prompt('What is your name');
    if (name) {
        console.log(name);
    }

}