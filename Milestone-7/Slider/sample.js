let count = 11;
const slideFunction = () => {
    const sliderDiv = document.getElementById('slider');
    sliderDiv.innerHTML = `
        <img style="width: 500px" src="images/(${count}).jpg" alt="">`
}

const intervalID = setInterval(() => {
    slideFunction(count);
    count++;
    if (count === 21) {
        count = 11;
    }
    console.log(count);
}, 1000);

