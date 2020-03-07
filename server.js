const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const express = require('express');

//'require' routers here

const app = express();
const PORT = process.env.PORT || 4000;

//Spotify API variables
const client_id = '1df847690a434522b6194652b2dc79bb';
const client_secret = '9cd2b264279545b19be4eefe92a92fa7';
const redirect_uri = 'http://localhost:' + PORT + '/callback';

app.use(bodyParser.json());
app.use(cors());

//app.use('/path', routerVar);

app.use(errorHandler());

//start the server:
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

module.exports = app;