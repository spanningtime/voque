'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('requests', (table) => {
    table.increments();
    table.integer('admin_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('singer_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('song_id')
      .notNullable()
      .references('id')
      .inTable('songs')
      .onDelete('CASCADE')
      .index();
    table.string('artist_name');
    table.string('song_title');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('requests')
};
