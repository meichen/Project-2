const mongoose = require('../db/connection');

module.exports = mongoose.model(
	'User',
	new mongoose.Schema({
		name: String,
		email: String,
		password: String,
		createdAt: { type: Date, default: Date.now }
	})
);
