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

router.get('/api/songs/:adminId', (req, res, next) => {
  const adminId = Number.parseInt(req.params.adminId);

  knex('songs')
    .where('admin_id', adminId)
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

module.exports = router;
