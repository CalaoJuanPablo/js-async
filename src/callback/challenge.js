let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

let BASE_URL = 'https://rickandmortyapi.com/api/'

function fetchData(url, callback) {
	let xhttp = new XMLHttpRequest()
	xhttp.open('GET', url, true)

	xhttp.onreadystatechange = function(event) {
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText))
			} else {
				const error = new Error(xhttp.status + xhttp.statusText)
				return callback(error, null)
			}
		}
	}

	xhttp.send()
}

fetchData(BASE_URL + 'character/', function getCharacter(error1, data1) {
	if (error1) return console.error(error1)

	fetchData(BASE_URL + 'character/' + data1.results[0].id, function getCharacterOriginEndpoint(error2, data2) {
		if (error2) return console.error(error2)

		fetchData(data2.origin.url, function getCharacterOrigin(error3, data3) {
			if (error3) return console.error(error3)

			console.log("Total de personajes:", data1.info.count)
			console.log("Nombre:", data2.name)
			console.log("Origen:", data3.dimension)
		})
	})
})