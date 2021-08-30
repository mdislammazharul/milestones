const sportData = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
        .then(res => res.json())
        .then(data => displaysportData(data))
}

const displaysportData = (sports) => {
    // console.log(sports.sports);
    const sportDiv = document.getElementById('sport-div');
    for (const sport of sports.sports) {
        // console.log(sport);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <img src="${sport.strSportThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${sport.strSport}</h5>
                <p class="card-text">${sport.strSportDescription.slice(0, 150)}</p>
            </div >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${sport.idSport}</li>
                    <li class="list-group-item">${sport.strFormat}</li>
                </ul>
    `;
        sportDiv.appendChild(div);
    }

}

const searchSport = () => {
    const searchText = document.getElementById('input-sport').value;
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
        .then(res => res.json())
        .then(data => displayTeam(data))
}

const displayTeam = (teams) => {
    console.log(teams);
    const teamDiv = document.getElementById('team-div');
    for (const team of teams.teams) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <img src="${team.strStadiumThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${team.strAlternate}</h5>
                <p class="card-text">${team.strDescriptionEN}</p>
            </div >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${team.strSport}</li>
                    <li class="list-group-item">${team.strStadium}</li>
                </ul>
        `
        teamDiv.appendChild(div);
    }
}

function myFunction() {
    document.getElementById("page").style.display = "none";
    document.getElementById("loading").style.display = "block";
}