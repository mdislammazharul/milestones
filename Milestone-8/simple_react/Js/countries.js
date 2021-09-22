const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
}
const getCountryHTML = country => {
    const { name, capital, flag } = country;
    const { name: currenciesName } = country.currencies[0]; // destructuring
    return `
        <div class="country">
            <h2>${name}</h2>
            <h4>Capital: ${capital}</h4>
            <h4>Currencie: ${currenciesName}</h4>
            <img src="${flag}">
        </div>`
}
loadCountries();