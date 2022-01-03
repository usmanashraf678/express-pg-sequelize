// require the db created in the index file
const db = require('../models/index')

// get the customers model
const Customer = db.Customers

// main work
const addCustomer = async (req, res) => {
    let input_data = {
        name: req.body.name,
        email: req.body.email
     }
     // using the builtin 'create' function on Customer Model
     const customer = await Customer.create(input_data)
     
     // send a 200 response with the created entry
     res.status(200).send(customer)
}

const getAllCustomers = async (req, res) => {

    // using the builtin 'findAll' function on Customer Model
    let customers = await Customer.findAll({})
    res.status(200).send(customers)
}

const getOneCustomer = async (req, res) => {
    
    // getting the id from the params in the req
    let id = req.params.id

    // using the builtin 'findAll' function on Customer Model
    let customers = await Customer.findOne({where: {id: id}})
    res.status(200).send(customers)
}

const updateCustomer = async (req, res) => {
    let id = req.params.id

    // using the builtin 'findAll' function on Customer Model
    const customer = await Customer.update(req.body, { where: {id: id}})
    res.status(200).send(customer)
}

const deleteCustomer = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Customer Model
    await Customer.destroy({where :{id: id}})
    res.status(200).send(`customer with id: ${id} is deleted`)
}

// export all the controller functions
module.exports = {
    addCustomer,
    getAllCustomers,
    getOneCustomer,
    updateCustomer,
    deleteCustomer
}