const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

mongoose.connect(
	(process.env.MONGODSN || 'url fail'), {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
)

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

module.exports = app