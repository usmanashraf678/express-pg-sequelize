// the router file contains all the routes that can be accessed
const customerController = require('../controllers/customerController.js')

// create a Router object from express
const router = require('express').Router()

// add a new customer to the table
router.post('/add', customerController.addCustomer)

// access all the customers in the table
router.get('/all', customerController.getAllCustomers)

// access one customer by id
router.get('/:id', customerController.getOneCustomer)

// modify one customer by id
router.put('/:id', customerController.updateCustomer)

// delete one customer by id
router.delete('/:id', customerController.deleteCustomer)

module.exports = router