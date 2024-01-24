/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('tickets_1', function (table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('users.id')
        table.integer('show_id').unsigned().references('shows.id')
        table.integer('ticket_price').notNullable()
        table.integer('seats_booked').notNullable()
               
        table.timestamps(true, true);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('tickets_1');
  
};
