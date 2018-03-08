const mongoose = require('../db/connection');

module.exports = mongoose.model(
	'Playlist',
	new mongoose.Schema({
		title: String,
		description: String,
		// songs: [array of songs goes here],
		createdAt: { type: Date, default: Date.now }
	})
);
