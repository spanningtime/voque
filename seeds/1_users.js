'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
      {
        id: 1,
        first_name: 'Wayne',
        last_name: 'Dank',
        email: 'waynedank@gmail.com',
        hashed_password: '$2a$12$Q3fh1jeJZ2Q19Yr12aVOxO54a/IvBhS01qWCqxNAZc0ABRxq0NnYq',
        role: 'admin',
        code: 'danksongs'
      },
      {
        id: 2,
        first_name: 'Chantal',
        last_name: 'Singsong',
        email: 'ilovekaraoke@gmail.com',
        hashed_password: '$2a$12$Q3fh1jeJZ2Q19Yr12aVOxO54a/IvBhS01qWCqxNAZc0ABRxq0NnYq',
        role: 'singer',
        code: null
      }])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
