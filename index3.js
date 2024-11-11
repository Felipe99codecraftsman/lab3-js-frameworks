// Import the express module
import express from 'express';

// Import the JSON data from the 'games.json' file
// The 'with {type: "json"}' ensures it is treated as a JSON module
import data from './data/games.json' with {type: 'json'};

// Create an instance of an Express application
const app = express();

// Define the port number where the application will run
const port = 3000; // Express website URL: http://localhost:3000

// Define a GET route for the root URL ('/')
// This route sends the JSON data from 'games.json' as a response
app.get('/', (req, res) => {
    res.send(data);
});

// Define a GET route for '/crud'
// This route simulates reading data using the GET method
app.get('/crud', (req, res) => {
    res.send("read get() method");
});

// Define a POST route for '/crud'
// This route simulates creating data using the POST method
app.post('/crud', (req, res) => {
    res.send("create post() method");
});

// Define a PUT route for '/crud'
// This route simulates updating data using the PUT method
app.put('/crud', (req, res) => {
    res.send("update using put() method");
});

// Define a DELETE route for '/crud'
// This route simulates deleting data using the DELETE method
app.delete('/crud', (req, res) => {
    res.send("delete using delate() method");
});

// Start the server and listen on the defined port
// Logs a message indicating where the server is running
app.listen(port, () => {
    console.log(`My app is listening at http://localhost:${port}`);
});
