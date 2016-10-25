'use strict';

const express = require('express');
const router = express.Router();

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
// const ev = require('express-validation');
// const validations = require('../validations/users');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const multer = require('multer');
const upload = multer({ inMemory: true });
const parseString = require('xml2js').parseString;

router.get('/api/songs/:adminId', (req, res, next) => {
  const adminId = Number.parseInt(req.params.adminId);

  knex('songs')
    .where('admin_id', adminId)
    .orderBy('artist_name', 'asc')
    .then((rows) => {
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

router.post('/upload/songs/:adminId', upload.single('songlist'), (req, res, next) => {
  const adminId = Number.parseInt(req.params.adminId);
  const buf = req.file.buffer;
  const str = buf.toString('utf8');
  const tracksArray = [];

  knex('songs')
    .where('admin_id', adminId)
    .then((exists) => {
      parseString(str, (err, result) => {
        const tracks = result.plist.dict[0].dict[0].dict;

        tracks.map((track) => {
          const trackObj = {};

          trackObj.adminId = adminId;
          trackObj.songTitle = track.string[0];
          trackObj.artistName = track.string[1];

          for (let x = 0; x < exists.length; x++) {
            if (
                exists[x].song_title === trackObj.songTitle
                &&
                exists[x].artist_name === trackObj.artistName
              ) {
              return false;
            }
            else if (x === exists.length - 1) {
              tracksArray.push(trackObj);
            }
          }
        });
      });

      const rows = decamelizeKeys(tracksArray);

      return knex('songs').insert(rows, '*');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
