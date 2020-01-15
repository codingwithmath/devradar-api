const { Router } = require('express')
const DevController = require('./controllers/Dev');
const SearchController = require('./controllers/Search');

const routes = Router();

routes
.post('/dev', DevController.store)
.get('/devs', DevController.index)
.post('/dev/:id', DevController.update)
.delete('/dev/:id', DevController.destroy)

.get('/search', SearchController.index );

module.exports = routes;