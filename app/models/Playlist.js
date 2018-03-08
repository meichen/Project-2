const mongoose = require('../db/connection');
const { SongSchema } = require('./Song');

const PlaylistSchema = new mongoose.Schema({
	title: String,
	description: String,
	songs: [SongSchema],
	createdAt: { type: Date, default: Date.now }
});

const PlaylistModel = mongoose.model('Playlist', PlaylistSchema);

module.exports = {
	PlaylistModel,
	PlaylistSchema
};
