
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128)
            .notNullable()
            .unique();
        tbl.string('creator', 128);
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128)
            .notNullable()
            .unique();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.decimal('ingredient_quantity')
            .unsigned()
            .notNullable()
        tbl.string('unit', 128)
            .notNullable()
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('step_number')
            .unsigned()
            .notNullable();
        tbl.string('instruction', 128)
            .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
