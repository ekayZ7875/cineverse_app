/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users',(table)=>{
        table.increments('user_id').primary()
        table.string('fullName').notNullable()
        table.string('email').notNullable()
        table.date('DOB')
        table.string('password').notNullable()
        table.enum('gender',['male','female'])
        table.timestamps(true,true)
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Users');
};
