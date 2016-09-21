'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('songs', (table) => {
    table.increments();
    table.integer('admin_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.text('title')
      .notNullable()
      .defaultTo('');
    table.string('artist_name')
      .notNullable()
      .defaultTo('');
    table.string('software_id')
      .unique();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('songs');
};
