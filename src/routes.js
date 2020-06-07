const express = require('express');
const routes = express.Router();
const incomesController = require('./controllers/IncomesController');

routes.get('/list', incomesController.index)
routes.get('/list/:id', incomesController.getById)
routes.post('/create', incomesController.create)
routes.put('/update/:id', incomesController.update)
routes.delete('/delete/:id', incomesController.delete)

module.exports = routes;