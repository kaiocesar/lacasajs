const PropertyModel = require('../models/Property');

module.exports = {
	async index(req, res) {
		return res.json({msg: "ok"});
	},
}
