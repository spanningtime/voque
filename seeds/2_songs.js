'use strict';

exports.seed = function(knex) {
  return knex('songs').del()
    .then(() => {
      return knex('songs').insert([
        {
          id: 1,
          user_id: 1,
          title: 'I Wanna Dance With Somebody',
          artist_name: 'Whitney Houston',
          software_id: 'alsk345'
        },
        {
          id: 2,
          user_id: 1,
          title: 'Nookie',
          artist_name: 'Limp Bizkit',
          software_id: 'aiejf32'
        },
        {
          id: 3,
          user_id: 1,
          title: 'Make Me Bad',
          artist_name: 'Korn',
          software_id: 'akeru343'
        }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('songs_id_seq', (SELECT MAX(id) FROM songs));"
      );
    });
};
