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

router.post('/api/requests/:adminId', (req, res, next) => {
  console.log(req.body);
  const songId = req.body.id;
  const adminId = req.params.adminId;
  console.log(adminId)
  const singerId = 2;
  console.log(singerId);


  knex('songs')
    // .select(knex.raw('1=1'))
    .where('id', songId)
    .first()
    .then((song) => {
      song = camelizeKeys(song);
      console.log(song.songTitle);
      const { artistName, songTitle } = song;
      const request = { adminId, singerId, artistName, songTitle, songId }
      const row = decamelizeKeys(request);
      return knex('requests')
        .insert(row, '*');
    })
    .then((rows) => {
      const request = camelizeKeys(rows[0]);
      res.send(request);
    })
    .catch((err) => {
      next(err);
    });


});

module.exports = router;
