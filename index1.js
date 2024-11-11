// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number where the application will run
const port = 3000; // Express website URL: http://localhost:3000

// Define a GET route for the root URL ('/')
// This route sends a simple HTML response when the root URL is accessed
app.get('/', (req, res) => {
  res.send('<h1>la#3 assignment made by Felipe</h1> <h2>Group 4 name: Felipe BG</h2>');
});

// Start the server and listen on the defined port
// Logs a message indicating where the server is running
app.listen(port, () => {
  console.log(`My app is listening at http://localhost:${port}`);
});