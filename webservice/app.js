const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
	apiKey = '' //fixme: enter your api key here

	//call the search endpoint
	const fetch = require('node-fetch');
	queryString = "the+avengers"//fixme this is hardcoded for now. user will type in a query string which will get passed into this endpoint through the req

	const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=' + queryString;
	const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + apiKey
	}
	}; //fixme: make the API key passed in through a env file

	fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json.results.slice(0,10))) //fixme: how to limit it throught the api call itself?? using the page parameter?? The documentation isn't clear. 
	.catch(err => console.error('error:' + err));


  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})