const express = require('express')
const routes = express.Router()
const PropertyController = require('./controllers/PropertyController')

routes.get('/', PropertyController.index)

module.exports = routes