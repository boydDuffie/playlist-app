const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const session = require('express-session');
const passport = require('passport');
const swig = require('swig');
const SpotifyStrategy = require('passport-spotify').Strategy;
const consolidate = require('consolidate');

//'require' routers here

const app = express();
const PORT = 8888;

//Spotify API variables
const client_id = '1df847690a434522b6194652b2dc79bb';
const client_secret = '9cd2b264279545b19be4eefe92a92fa7';
const redirect_uri = 'http://localhost:' + PORT + '/callback';

app.use(bodyParser.json());
app.use(cors());

//app.use('/path', routerVar);

app.use(errorHandler());

/*
This next bit is from the skeleton code provided at https://github.com/JMPerez/passport-spotify/blob/master/examples/login/app.js
It will likely need to be modified moving forward but it is a good start.
*/
passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((obj, done) => {
	done(null, obj);
});

passport.use(
	new SpotifyStrategy(
		{
			clientID: client_id,
			clientSecret: client_secret,
			callbackURL: redirect_uri
		},
		function(accessToken, refreshToken, profile, done)
		{
			process.nextTick( () => {
				console.log(`Profile: ${profile}`);
				// The code below is an example that gets more valuable info on the user and stores it (our schema will be different)
				// User.findOrCreate({
				// 	where: {
				// 		SpotifyID: profile.id
				// 	},
				// 	defaults: {
				// 		name: profile.displayName,
				// 		SpotifyID: profile.id,
				// 		accessToken: accessToken,
				// 		pfp: profile.photos[0],
				// 		refreshToken: refreshToken
				// 	}
				// }).spread( user => {
				// 	console.log(`Making user: ${user}`);
				// 	done(null, user);
				// }).catch(done);
				return done(null, profile);
			});
		}
	)
);

app.set('views', __dirname + '/views');
app.set('view-engine', 'ejs');
app.use(session({secret: 'holy guacamole', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
app.engine('html', consolidate.swig);

app.get('/', (req, res) => {
	res.render('index.html', {user: req.user});
});

app.get('/account', ensureAuthenticated, (req, res) => {
	res.render('account.html', {user: req.user});
});

app.get('/login', (req, res) => {
	res.render('login.html', {user: req.user});
});

app.get(
	'/auth/spotify', 
	passport.authenticate('spotify', {
		scope: ['user-read-email', 'user-read-private'],
		showDialogue: true
	}),
	(req, res) => {
		//this should not get called, as the request should be redirected to spotify.
	}
);

app.get(
	'/callback',
	passport.authenticate('spotify', {failureRedirect: '/login'}),
	(req, res) => {
		res.redirect('/');
	}
);

app.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

//start the server:
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

const ensureAuthenticated = (req, res, next) => {
	if(req.isAuthenticated) return next();
	res.redirect('/login');
};

module.exports = app;