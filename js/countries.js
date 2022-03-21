const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    console.log(countries[0]);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(allCountriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}

const getCountryHTML = ({name, flag, population, region}) => {
    return `
        <div class="country">
        <h2>${name}</h2>
        <p>Population: ${population}</p>
        <p>Region: ${region}</p>
        <img src="${flag}">
        </div>
    `
}


loadCountries()