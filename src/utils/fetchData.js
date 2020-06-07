let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

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

function fetchDataPromise(url) {
	return new Promise(promiseFetchData = (resolve, reject) => {
		let xhttp = new XMLHttpRequest()
		xhttp.open('GET', url, true)

		xhttp.onreadystatechange = function readyStateChangeEvent(event) {
			if (xhttp.readyState === 4) {
				if (xhttp.status === 200) {
					resolve(JSON.parse(xhttp.responseText))
				} else {
					const error = new Error('Error:', url)
					return reject(error)
				}
			}
		}

		xhttp.send()
	})
}

module.exports = {
	fetchData,
	fetchDataPromise
}