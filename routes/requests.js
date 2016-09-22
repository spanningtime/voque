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
  const songId = req.body.id;
  const adminId = req.params.adminId;
  const singerId = 2;

  knex('songs')
    // .select(knex.raw('1=1'))
    .where('id', songId)
    .first()
    .then((song) => {
      song = camelizeKeys(song);
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

router.get('/api/requests/:adminId', (req, res, next) => {
  const adminId = req.params.adminId;

  knex('requests')
    .where('admin_id', adminId)
    .then((rows) => {
      const requests = camelizeKeys(rows)
      res.send(requests);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/api/requests/:adminId/:requestId', (req, res) => {
  const adminId = req.params.adminId;
  const requestId = req.params.requestId;

  knex('requests')
    .where('admin_id', adminId)
    .andWhere('id', requestId)
    .del()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err)
    })
});


module.exports = router;
