'use strict';

const express = require('express');
const router = express.Router();

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const ev = require('express-validation');
// const validation = require('../validations/users');

router.post('/api/users', (req, res, next) => {
  const { email, password } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.badRequest('This email is already in registered');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      const { firstName, lastName, kj, code  } = req.body;
      const user = { firstName, lastName, email, hashedPassword, kj };
      const row = decamelizeKeys(user);

      return knex('users').insert(row, '*');
    })
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;

      return user;
    })
    .then((user) => {
      const expiry = new Date(Date.now() + 1000 * 60 * 6);
      const token = jwt.sign({ userId: user.id },
        process.env.SESSION_SECRET,
        { expiresIn: '6h'});

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

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/users/:userId', (req, res, next) => {
  const userId = Number.parseInt(req.params.userId);

  knex('users')
    .where('id', userId)
    .then((rows) => {
      if (!rows) {
        return next();
      }
      const user = camelizeKeys(rows [0]);

      delete user.hashedPassword;

      res.send(user);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

router.get('/api/users/code/:code', (req, res, next) => {
  const { code } = req.params;
  const data = {};

  knex('users')
    .where('code', code)
    .then((rows) => {
      if (rows.length === 0) {
        throw boom.badRequest('Invalid KJ Code')
      }
      const user = rows[0];
      data.kjName = user.first_name
      return knex('songs')
        .where('admin_id', user.id)
    })
    .then((rows) => {
      data.songs = camelizeKeys(rows);
      res.send(data);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

router.patch('/api/users/:id/:accept', (req, res, next) => {
  console.log('hey')
  const { id, accept } = req.params;
  console.log(id)

  knex('users')
    .where('id', id)
    .update({ accept })
    .then((rows) => {
      const user = rows[0];
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
