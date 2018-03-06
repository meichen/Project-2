const mongoose = require('../db/connection');

module.exports = mongoose.model(
	'Playlist',
	new mongoose.Schema({
		title: String,
		description: String,
		createdAt: { type: Date, default: Date.now }
	})
);
