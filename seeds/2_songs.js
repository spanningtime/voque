'use strict';

exports.seed = function(knex) {
  return knex('songs').del()
    .then(() => {
      return knex('songs').insert([
        {
          id: 1,
          admin_id: 1,
          title: 'I Wanna Dance With Somebody',
          artist_name: 'Whitney Houston',
          software_id: 'alsk345'
        },
        {
          id: 2,
          admin_id: 1,
          title: 'Nookie',
          artist_name: 'Limp Bizkit',
          software_id: 'aiejf32'
        },
        {
          id: 3,
          admin_id: 1,
          title: 'Make Me Bad',
          artist_name: 'Korn',
          software_id: 'akeru343'
        },
        {
          id: 4,
          admin_id: 1,
          title: "Gangstar's Paradise",
          artist_name: 'Coolio',
          software_id: 'akeid233'
        },
        {
          id: 5,
          admin_id: 1,
          title: 'Always Be My Baby',
          artist_name: 'Mariah Carey',
          software_id: 'akeqic387'
        },
        {
          id: 6,
          admin_id: 1,
          title: '1999',
          artist_name: 'Prince',
          software_id: 'owiufk836'
        },
        {
          id: 7,
          admin_id: 1,
          title: 'Damn I wish I was your lover',
          artist_name: 'Sophie B Hawkins',
          software_id: 'jifeas990'
        },
        {
          id: 8,
          admin_id: 1,
          title: 'I Will Always Love You',
          artist_name: 'Whitney Houston',
          software_id: 'audkjf883'
        },
        {
          id: 9,
          admin_id: 1,
          title: "I'll Be",
          artist_name: 'Edwin McCain',
          software_id: 'asdril811'
        },
        {
          id: 10,
          admin_id: 1,
          title: 'My Name Is Jonas',
          artist_name: 'Weezer',
          software_id: 'azjduf828'
        },
        {
          id: 11,
          admin_id: 1,
          title: 'Basket Case',
          artist_name: 'Green Day',
          software_id: 'aydjsk389'
        },
        {
          id: 12,
          admin_id: 1,
          title: 'My Heart Will Go On',
          artist_name: 'Celine Dion',
          software_id: 'ajidur937'
        },
        {
          id: 13,
          admin_id: 1,
          title: 'Wonderwall',
          artist_name: 'Oasis',
          software_id: 'audkjs192'
        },
        {
          id: 14,
          admin_id: 1,
          title: '3 AM',
          artist_name: 'Matchbox 20',
          software_id: 'uwksfc837'
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('songs_id_seq', (SELECT MAX(id) FROM songs));"
      );
    });
};
