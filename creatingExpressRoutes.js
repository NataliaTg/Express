const express = require('express');
const app = express();
const port = 3000;

app.listen(port, (error) => {
    if (error) {
      console.log('Something bad happened...');
    }else{
      console.log(`Server is listening on ${port}`);
    }
});

app.get('/', (request, response) => {
  response.send('Welcome to Express');
});
app.get('/api/movies', (request, response) => {
    response.send('All films');
  });
app.get('/api/movies/movie_id', (request, response) => {
    response.json({ id: '<movie id>'});
  });
app.get('/api/employee/', (request, response) => {
  res.sendStatus(304);
});
 app.get('/api/employee/john/', (request, response) => {
  res.status(404).send('Unable to retrieve employee');
});
