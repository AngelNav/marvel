const API = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=22fd5653b45808263128483cf3240a90&hash=6f47c4d94f6c820f322cc22412b7d8a1'
const cards = document.querySelector('marvel-content')


const fetchData = async (url_api) => {
    try {
        let response = await fetch(url_api)
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

const getCharacters = async (url_api) => {
    const response = await fetchData(url_api)
    return response.data.results
}

const renderCharacters = async () => {
    const characters = await getCharacters(API)
    console.log(characters)
    let html = '';

    characters.forEach(character => {

    });
}

renderCharacters()