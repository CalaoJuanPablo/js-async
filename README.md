# Asynchronism in Javascript
This is a quick implementation of asynchronism in JavaScript. I solve the same challenge with callbacks, promises and async await.

The challenge is to get the total number of characters, the name and the origin dimension of the first character from the [Rick and Morty's API](https://rickandmortyapi.com/)

## How to test
To try this locally, you must have installed node in your local machine. 

```
$ git clone <repo_url>
$ cd js-async
```

Once in the project directory, you will find an individual folder for each implementation inside `src` directory containing two files (`index.js, challenge.js`).

- `index.js` file is a quick example of the implementation
- `challenge.js` solves the challenge using the implementation

In `package.json` you have 6 available scripts:

```
- callback
- callback:challenge
- promise
- promise:challenge
- async
- async:challenge
```

All the `:challenge` run the `challenge.js` script.

To test the implementation you want, you can run in your terminal:

```
npm run <script_name>
```

You should see the output result.

This is the content developed in the [asynchronism with javascript course](https://platzi.com/clases/asincronismo-js/) at [Platzi](https://platzi.com/)
