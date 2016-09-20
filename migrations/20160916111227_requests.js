'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('requests', (table) => {
    table.increments();
    table.integer('admin_id')
      .references('id')
      .inTable('users')
      .notNullable();
    table.integer('singer_id')
      .references('id')
      .inTable('users')
    table.integer('song_id')
      .references('id')
      .inTable('songs')
      .notNullable();
    table.string('artist_name');
    table.string('song_title')
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('requests')
};
