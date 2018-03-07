const express = require('express');
const router = express.Router();

const VIEW_DIR = 'playlists';

router.get('/view', (req, res) => res.render(`${VIEW_DIR}/view`));
router.get('/edit', (req, res) => res.render(`${VIEW_DIR}/edit`));
router.get('/create', (req, res) => res.render(`${VIEW_DIR}/create`));

module.exports = router;
