const express = require('express');
const mysql = require('mysql');
const connection = require('./conf.js');
const company = require('./conf.js');
const app = express();
const port = 3000;

app.listen(port, (error) => {
  if (error) {
    console.log('Something bad happened...');
  } else {
    console.log(`Server is listening on ${port}`);

  }
});

// app.get('/', (request, response) => {
//   response.send('Welcome to Express');
// });
// app.get('/api/movies', (request, response) => {
//     response.send('All films');
//   });
// app.get('/api/movies/movie_id', (request, response) => {
//     response.json({ id: '<movie id>'});
//   });
// app.get('/api/employee/', (req, res) => {
//   res.sendStatus(304);
// });
//  app.get('/api/employee/john/', (req, res) => {
//   res.status(404).send('Unable to retrieve employee');
// });

//EJERCICIO ANTERIOR DE OTRO QUEST LO COMENTADO!! 

// Ruta GET para el Home localhost:3000
app.get('/', (request, response) => {
  response.send('Conectada correctamente al servidor');
})
// //Ruta GET para el Home localhost:3000/otro-mensaje
// app.get('/otro-mensaje', (request, response) => { 
//   response.send('Este es otro mensaje');
// })
// listen to "/api/movies"
app.get('/api/movies/', (request, response) => {

  // connection to the database, and selection of movies
  company.query('SELECT * from movie', (error, results) => {

    if (error) {
      //  If an error has occurred, then the user is informed of the error
      console.log('Ha habido un error');
      response.send(error)
    } else {
      // If everything went well, we send the result of the SQL query as JSON.
      console.log('Peliculas mostradas correctamente');
      response.send(results);
    }
  })
})

app.get('/api/movies/names', (request, response) => {

  // connection to the database, and selection of movies
  company.query('SELECT name from movie', (error, results) => {

    if (error) {
      //  If an error has occurred, then the user is informed of the error
      console.log('Ha habido un error');
      response.send(error)
    } else {
      // If everything went well, we send the result of the SQL query as JSON.
      console.log('Nombres mostrados correctamente');
      response.send(results)
    }
  })
})



