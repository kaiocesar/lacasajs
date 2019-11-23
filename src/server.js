const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const app = express()

// definição da conexão com o mongoose
mongoose.connect(
	(process.env.MONGODSN || 'url fail'), {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
)

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(4003)

module.exports = app