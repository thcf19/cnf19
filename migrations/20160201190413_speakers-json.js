'use strict';

exports.up = function (knex) {
  return knex.schema.table('speakers', function (table) {
    table.json('data', true);
  });
};

exports.down = function (knex) {
  return knex.schema.table('speakers', function (table) {
    table.dropColumn('data');
  });
};
