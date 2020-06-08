const express = require('express');
const routes = express.Router();
const incomesController = require('./controllers/IncomesController');
const expensesController = require('./controllers/ExpensesController');

routes.get('/list-incomes', incomesController.index)
routes.get('/list-incomes/:id', incomesController.getById)
routes.post('/create-incomes', incomesController.create)
routes.put('/update-incomes/:id', incomesController.update)
routes.delete('/delete-incomes/:id', incomesController.delete)


routes.get('/list-expenses', expensesController.index)
routes.get('/list-expenses/:id', expensesController.getById)
routes.post('/create-expenses', expensesController.create)
routes.put('/update-expenses/:id', expensesController.update)
routes.delete('/delete-expenses/:id', expensesController.delete)

module.exports = routes;