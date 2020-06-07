let fetchData = require('../utils/fetchData').fetchDataPromise

let BASE_URL = 'https://rickandmortyapi.com/api/'
let ENDPOINT = BASE_URL + 'character/'

async function getCharacterInfo(url) {
	try {
		const data = await fetchData(url)
		const totalCharacters = data.info.count

		const character = await fetchData(url + data.results[0].id)
		const characterName = character.name

		const location = await fetchData(character.origin.url)
		const characterOrigin = location.dimension

		console.log("Total Personajes:", totalCharacters)
		console.log("Nombre:", characterName)
		console.log("Origen:", characterOrigin)

	} catch (error) {
		console.error(error)
	}
}

getCharacterInfo(ENDPOINT)
