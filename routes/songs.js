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
  const buf = req.file.buffer;
  const str = buf.toString('utf8');
  const tracksArray = [];
  parseString(str, (err, result) => {
    const tracks = result.plist.dict[0].dict[0].dict;
    console.log(tracks);
    tracks.map((track) => {
      const trackObj = {}

      trackObj.title = track.string[0]
      trackObj.artist = track.string[1];
      tracksArray.push(trackObj);
    });

    console.log(tracksArray);
  });

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
