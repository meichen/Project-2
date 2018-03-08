const mongoose = require('../db/connection');

const SongSchema = new mongoose.Schema({
	title: String,
	uri: String,
	createdAt: { type: Date, default: Date.now }
});

const SongModel = mongoose.model('Song', SongSchema);

module.exports = {
	SongModel,
	SongSchema
};
