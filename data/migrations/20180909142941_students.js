
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(tbl) {
        tbl.increments();
  
        tbl
            .string('name', 128)
            .notNullable();
        tbl.integer('cohorts_id').unsigned();
        tbl.foreign('cohorts_id').references('cohorts.id');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('students');
};
