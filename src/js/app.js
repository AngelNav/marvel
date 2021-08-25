const API = 'https://gateway.marvel.com:443/v1/public/characters?limit=50&ts=1&apikey=22fd5653b45808263128483cf3240a90&hash=6f47c4d94f6c820f322cc22412b7d8a1'
let cards = document.querySelector('#marvel-content')


const fetchData = async(url_api) => {
    try {
        let response = await fetch(url_api)
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

const getCharacters = async(url_api) => {
    const response = await fetchData(url_api)
    return response.data.results
}

const renderCharacters = async() => {
    const characters = await getCharacters(API)
    console.log(characters)
    let htmlContent = '';

    characters.forEach(hero => {
        let urlHero = hero.urls[0].url
        htmlContent += `
        <div class="card">
                <img class="card__img" src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
                <h3 class="card__title">${hero.name}</h3>
                <p class="card__content">${hero.description}</p>
                <a class="card__link" href="${urlHero}">Learn more <i class="fas fa-angle-double-right"></i></a>
            </div>
        `;
    })
    cards.innerHTML = htmlContent
}

renderCharacters()