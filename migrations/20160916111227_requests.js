'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('requests', (table) => {
    table.increments();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable();
    table.integer('song_id')
      .references('id')
      .inTable('songs')
      .notNullable();
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('requests')
};
