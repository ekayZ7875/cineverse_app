/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('tickets', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('ticket_name').notNullable();
      // Add other ticket-related fields as needed
      table.timestamps(true, true);
    });
  }
 
 /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
 exports.down = function(knex) {
 
    return knex.schema.dropTable('tickets');
   
 };
 