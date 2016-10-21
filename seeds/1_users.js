'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
      {
        id: 1,
        first_name: 'Ryan',
        last_name: 'sobol',
        email: 'ryan@gmail.com',
        hashed_password: '$2a$12$4cd6LDwjFXVv3dZ4W4B5JexkgeLzdhgvVbmlORDOXsjKJtCzNZeyq',
        kj: true,
        code: 'pleasehirewilliam',
        accept: false
      },
      {
        id: 2,
        first_name: 'Chantal',
        last_name: 'Singsong',
        email: 'ilovekaraoke@gmail.com',
        hashed_password: '$2a$12$4cd6LDwjFXVv3dZ4W4B5JexkgeLzdhgvVbmlORDOXsjKJtCzNZeyq',
        kj: false,
        code: null,
        accept: false
      }])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
