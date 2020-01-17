const app = require('./app');
const dbConnection = require('./services/dbConnection');
const http = require('http');
const {setupWebSocket} = require('./services/websocket');

const port = 3333

const server = http.Server(app);

setupWebSocket(server);

dbConnection();

server.listen(port, (err) => {
  if (err) {
    console.log('Error');
  }
  console.log(`Connected to http://localhost:${port}`);
})


