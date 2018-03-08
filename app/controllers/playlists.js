const express = require('express');
const Bluebird = require('bluebird');
const { PlaylistModel } = require('../models/Playlist');

const router = express.Router();
const VIEW_DIR = 'playlists';

// View All Playlists
router.get('/', (req, res) =>
	PlaylistModel.find().then(playlists =>
		res.render(`${VIEW_DIR}`, {
			playlists
		})
	)
);

// New Playlist
router
	.route('/create')
	.get((req, res) => res.render(`${VIEW_DIR}/create`))
	.post(({ body: { title, description } }, res) =>
		PlaylistModel.create({
			title,
			description
		}).then(playlist => res.redirect(`/playlists/${playlist._id}`))
	);

// Single Playlist
router
	.route('/:id')
	.get(({ params: { id } }, res) =>
		PlaylistModel.findById(id).then(playlist =>
			res.render(`${VIEW_DIR}/view`, {
				playlist
			})
		)
	)
	.post(({ params: { id }, body: { title, description } }, res) => {
		PlaylistModel.findByIdAndUpdate(id, {
			title,
			description
		}).then(playlist => res.redirect(`/playlists/${playlist._id}`));
	});

// Edit a Playlist
router.get('/:id/edit', ({ params: { id } }, res) =>
	PlaylistModel.findById(id).then(playlist =>
		res.render(`${VIEW_DIR}/edit`, {
			playlist
		})
	)
);

// Delete a Playlist
router.get('/:id/delete', ({ params: { id } }, res) =>
	PlaylistModel.findByIdAndRemove(id).then(playlist => res.redirect(`/playlists`))
);

// Create a Song
router.post('/:id/songs/create', ({ params: { id }, body: { title, uri } }, res) =>
	PlaylistModel.findById(id)
		.then(playlist => {
			playlist.songs.push({ title, uri });
			return playlist.save();
		})
		.then(() => res.redirect(`/playlists/${id}`))
);

// Delete a Song
router.get('/:playlistId/songs/:songId/delete', ({ params: { playlistId, songId } }, res) =>
	PlaylistModel.findById(playlistId)
		.then(playlist => {
			playlist.songs.id(songId).remove();
			return playlist.save();
		})
		.then(() => res.redirect(`/playlists/${playlistId}`))
);

module.exports = router;
