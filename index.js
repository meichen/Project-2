const express = require('express');
const bodyParser = require('body-parser');
const pkg = require('./package.json');
const PlaylistsController = require('./controllers/playlists');
const UsersController = require('./controllers/users');
const path = require('path');

const app = express();
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3000);

// TODO: Home page is pretty blank right now. Just redirecting ftm.
// app.get('/', (req, res) => res.render('index'));
app.get('/', (req, res) => res.redirect('/playlists'));

app.use('/playlists', PlaylistsController);
app.use('/users', UsersController);

app.listen(app.get('port'), () =>
	console.log(`${pkg.name} listening on port ${app.get('port')}...`)
);
