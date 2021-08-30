const userData = () => {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => displayUserData(data))
}

const displayUserData = (user) => {
    console.log(user);
    const person = user.results[0];
    const userSection = document.getElementById('user-section')
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${user.results[0].picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${person.name.title} ${person.name.first} ${person.name.last}</h5>
    <p class="card-text">${person.phone} ${person.email}</p>
        </div >
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${person.location.country}</li>
                <li class="list-group-item">${person.location.state}</li>
                <li class="list-group-item">${person.location.city}</li>
            </ul>
`;
    userSection.appendChild(div);
}

userData();