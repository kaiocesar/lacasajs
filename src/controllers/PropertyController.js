const PropertyModel = require('../models/Property');

module.export = {
	async index(req, res) {
		return res.json({msg: "ok"});
	}

}
