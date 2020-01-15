const mongoose = require('mongoose');

const URI = 'mongodb+srv://omnistack10:omnistack@cluster0-zpbpu.mongodb.net/test?retryWrites=true&w=majority'

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