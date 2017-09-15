const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Load configuration
var config = require('./server/config');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Main App
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', config.port);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

const server = http.createServer(app);

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World2\n');
// });

server.listen(config.port,  () => {
  console.log(`Server running at http://localhost:${config.port}/`);
});
