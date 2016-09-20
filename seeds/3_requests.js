'use strict';

exports.seed = function(knex) {
  return knex('requests').del()
    .then(() => {
      return knex('requests').insert([
        {
          id: 1,
          admin_id: 1,
          singer_id: 2,
          song_id: 1,
          artist_name: 'The Pixies',
          song_title: 'Hey'
      }]);
    })
    .then(() => {
      return knex.raw("SELECT setval('requests_id_seq', (SELECT MAX(id) FROM requests));"
      );
    });
};
