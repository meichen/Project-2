const express = require('express');
const Bluebird = require('bluebird');
const Playlist = require('../models/Playlist');

const router = express.Router();
const VIEW_DIR = 'playlists';

router.get('/', (req, res) =>
	Playlist.find().then(playlists =>
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
		Playlist.create({
			title,
			description
		}).then(playlist => res.redirect(`/playlists/${playlist._id}`))
	);

// Single Playlist
router
	.route('/:id')
	.get(({ params: { id } }, res) =>
		Playlist.findById(id).then(playlist =>
			res.render(`${VIEW_DIR}/view`, {
				playlist
			})
		)
	)
	.post(({ params: { id }, body: { title, description } }, res) => {
		Playlist.findByIdAndUpdate(id, {
			title,
			description
		}).then(playlist => res.redirect(`/playlists/${playlist._id}`));
	});

router.get('/:id/edit', ({ params: { id } }, res) =>
	Playlist.findById(id).then(playlist =>
		res.render(`${VIEW_DIR}/edit`, {
			playlist
		})
	)
);

router.get('/:id/delete', ({ params: { id } }, res) =>
	Playlist.findByIdAndRemove(id).then(playlist => res.redirect(`/playlists`))
);

router.post('/:id/song/create', (req, res) => {
	// create a song to a `:id` playlist
});
router.post('/:id/song/delete', (req, res) => {
	// delete a song from `:id` playlist
});

module.exports = router;
