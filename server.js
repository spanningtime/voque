'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const port = process.env.PORT || 8001;
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

app.disable('x-powered-by');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

    default:
}

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// REQUIRE IN ROUTERS
const users = require('./routes/users');
const token = require('./routes/token');
const songs = require('./routes/songs');
const requests = require('./routes/requests');

//ROUTE HANDLERS
app.use(users);
app.use(token);
app.use(songs);
app.use(requests);

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((_req, res) => {
  res.sendStatus(404);
})

app.use((err, _req, res, _next) => {
  if (err.status || err.output && err.output.statusCode) {
    return res.status(err.status || err.output.statusCode).send(err);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('Listening on port,', port);
});

module.exports = app;
