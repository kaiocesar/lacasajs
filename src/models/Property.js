const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
	transaction_type: String,
	property_type: String,
	bedroom: Number,
	suites: Number,
	garage_vacancies: Number,
	footage: Number,
	image: [String],
	active: Boolean,
	created_at: String,
	address: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Address'
	}

});

module.exports = mongoose.model('Property', PropertySchema);
