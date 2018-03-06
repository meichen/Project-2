const mongoose = require('../db/connection');

module.exports = mongoose.model(
	'Song',
	new mongoose.Schema({
		title: String,
		url: String,
		createdAt: { type: Date, default: Date.now }
	})
);
