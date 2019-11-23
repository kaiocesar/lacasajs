const express = require('express')
const routes = express.Router()
const PropertyController = require('./controllers/PropertyController')

routes.get('/', (req, res)=>{ res.json({msg: "ok"}) })

module.exports = routes