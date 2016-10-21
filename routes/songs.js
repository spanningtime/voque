'use strict';

const express = require('express');
const router = express.Router();

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys} = require('humps');
// const ev = require('express-validation');
// const validations = require('../validations/users');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const multer = require('multer');
const upload = multer({inMemory: true});
const parseString = require('xml2js').parseString;

router.get('/api/songs/:adminId', (req, res, next) => {
  const adminId = Number.parseInt(req.params.adminId);

  knex('songs')
    .where('admin_id', adminId)
    .orderBy('artist_name', 'asc')
    .then((rows) => {
      console.log(rows)
      if (!rows) {
        return next();
      }
      const song = camelizeKeys(rows);
      res.send(song);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

router.post('/upload', upload.single('songlist'), (req, res, next) => {
  console.log(req.file);
  // const adminId = Number.parseInt(req.params.adminId);
  // const artistName = req.body.artistName;
  // const songTitle = req.body.songTitle;

  knex('songs')
    // .where('admin_id', adminId)
    .first()
    .then((songs) => {
      songs = camelizeKeys(songs);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
