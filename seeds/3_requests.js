'use strict';

exports.seed = function(knex) {
  return knex('requests').del()
    .then(() => {
      return knex('requests').insert([
        {
          id: 1,
          user_id: 2,
          song_id: 2,
      }]);
    })
    .then(() => {
      return knex.raw("SELECT setval('requests_id_seq', (SELECT MAX(id) FROM requests));"
      );
    });
};
