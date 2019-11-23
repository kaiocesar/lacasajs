const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
	city: String,
	district: String,
	state: String,
	country: String,
	zipcode: String,
	complement: String
});

module.exports = mongoose.model('Address', AddressSchema);
