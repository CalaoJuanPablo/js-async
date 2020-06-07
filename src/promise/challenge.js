let fetchData = require('../utils/fetchData').fetchDataPromise

let BASE_URL = 'https://rickandmortyapi.com/api/'
let ENDPONT = BASE_URL + 'character/'

fetchData(ENDPONT)
	.then(data => {
		console.log("Total Personajes:", data.info.count)
		return fetchData(ENDPONT + data.results[0].id)
	})
	.then(data => {
		console.log("Nombre:", data.name)
		return fetchData(data.origin.url)
	})
	.then(data => {
		console.log("Origen:", data.dimension)
	})
	.catch(error => console.error(error))