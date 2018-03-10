const express = require('express');
const router = express.Router();

router.get('/view', (req, res) => res.render('users/view'));
router.get('/edit', (req, res) => res.render('users/edit'));
router.get('/create', (req, res) => res.render('users/create'));

module.exports = router;
