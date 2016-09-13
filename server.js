'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const port = process.env.PORT || 8000;
const path = require('path');

const app = express();

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'public')));

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(port, () => {
  console.log('Listening on port,', port);
});

module.exports = app;
