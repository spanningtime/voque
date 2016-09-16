
exports.seed = function(knex) {
  return knex('users').insert([
    {
      id: 1,
      user_id: 1,
      title: 'I Wanna Dance With Somebody',
      artist_name: 'Whitney Houston',
      software_id: null,
    },
  }])
};
