'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/api/token', (req, res, next) => {
  let user;

  knex('users')
    .where('email', req.body.email)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(401, 'User could not be logged in');
      }

      user = camelize(row);

      return bcrypt.compare(req.body.password, user.hashedPassword);
    })
    .then(() => {
      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 6);

      const token = jwt.sign({ userId: user.id }, process.env.SESSION_SECRET, { expiresIn: '6h' });

      res.cookie('accessToken', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.cookie('loggedIn', true, {
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.cookie('userId', user.id, {
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.sendStatus(200);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(401, 'User could not be logged in.');
    })
    .catch((err) => {
      next(err);
    }); 
});

router.delete('/api/token', (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('loggedIn');
  res.clearCookie('userId');
  res.sendStatus(200);
});

module.exports = router;
