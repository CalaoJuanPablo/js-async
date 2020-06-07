function doSomethingAsync() {
	return new Promise(doSomethingAsyncPromise = (resolve, reject) => {
		true
		? setTimeout(resolveDoSomethingAsync = () => {
			resolve('Do something async')
		}, 3000)
		: reject(new Error('Test Error'))
	})
}

async function executeDoSomethingAsync() {
	let something = await doSomethingAsync()
	console.log(something)
}

console.log('Before')
executeDoSomethingAsync()
console.log('After')

async function executeAnotherDoSomethingAsync() {
	try {
		let something = await doSomethingAsync()
		console.log(something)
	} catch (error) {
		console.error(error)
	}
}

console.log('Another Before')
executeAnotherDoSomethingAsync()
console.log('Another After')