const app = require('./app');
const dbConnection = require('./services/dbConnection');

const port = 3333

app.listen(port, (err) => {
  if (err) {
    console.log('Error');
  }
  console.log(`Connected to http://localhost:${port}`);
})

dbConnection();

