const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', async (req, res) => {
	var apiKey = '' //fixme: enter your api key here
  //fixme: make the API key passed in through a env file
  console.log(req.query.query)

	//call the search endpoint
	const fetch = require('node-fetch');
	var queryString = req.query.query || "the+avengers" //search for the avengers by default

	const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=' + queryString;
	const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + apiKey
	}
	}; 

try {
    const response = await fetch(url, options);
    const json = await response.json();

    //Filter results to only return what we care about
    //fixme: how to limit it throught the api call itself?? using the page parameter?? The documentation isn't clear. 
    const filteredResults = json.results.slice(0, 10).map(movie => ({
      movie_id: movie.id,
      title: movie.title,
      poster_image_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      popularity_summary: `${movie.popularity} out of ${movie.vote_count}`,
    }));

    res.json(filteredResults); // Send the filtered JSON response
  } catch (err) {
    console.error('error:' + err);
    res.status(500).json({ error: 'Internal Server Error' }); // Handle errors and send a JSON response
  }

})


export default {
  path: '/api',
  handler: app
}