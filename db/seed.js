const Playlist = require('../models/Playlist');
const Song = require('../models/Song');
const User = require('../models/User');

Playlist.remove({}).then(() => {
	Promise.all([
		Playlist.create({
			title: '',
			description: ''
		}),
		Playlist.create({
			title: '',
			description: ''
		})
	]).then(() => {
		console.log('done');
		process.exit();
	});
});
