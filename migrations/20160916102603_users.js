'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name')
    .notNullable()
    .defaultTo('');
    table.string('last_name')
      .notNullable()
      .defaultTo('');
    table.string('email')
      .unique()
      .notNullable()
      .defaultTo('');
    table.specificType('hashed_password', 'char(60)')
      .notNullable();
    table.boolean('kj')
      .notNullable()
      .defaultTo(false);
    table.string('code').defaultTo(null);
    table.boolean('accept').defaultTo('false');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
