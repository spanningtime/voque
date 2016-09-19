'use strict';

const express = require('express');
const router = express.Router();

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys} = require('humps');
const ev = require('express-validation');
const validations = require('../validations/users');
const jwt = require('jsonwebtoken');
const knex = require('../knex');

router.post('/api/requests/', (req, res, next) => {

  knex('requests')
    .then((rows) => {
      const { adminId, singerId, songId } = req.body;
      const request = { adminId, singerId, songId};
      const row = decamelizeKeys(request);

      return knex('requests').insert(row, '*');
    })
    .then((rows) => {
      const request = camelizeKeys(rows[0]);

      return request;
    })
    .then((request) => {
      res.send(request);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
