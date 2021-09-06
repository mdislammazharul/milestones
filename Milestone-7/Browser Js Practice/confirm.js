const pressConfirm = () => {
    const result = window.confirm('Dow you want to show the href?');
    if (result) {
        showHref();
    }
}

const showHref = () => {
    const div = document.getElementById('show-href');
    const p = document.createElement('p');
    p.innerText = location.href;
    div.appendChild(p);
}