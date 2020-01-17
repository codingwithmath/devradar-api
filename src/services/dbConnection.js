const mongoose = require('mongoose');

const URI = 'MONGO_URL'

const dbConnection = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connected')
  })
  .catch((err) => {
    throw err;
  });
}

module.exports = dbConnection;