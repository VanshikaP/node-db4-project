
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, ingredient_quantity: 1.25, unit: 'cup'},
        {id: 2, recipe_id: 1, ingredient_id: 2, ingredient_quantity: 2.5, unit: 'cup'},
        {id: 3, recipe_id: 1, ingredient_id: 5, ingredient_quantity: 2, unit: 'tsp'},
        {id: 4, recipe_id: 2, ingredient_id: 2, ingredient_quantity: 1, unit: 'cup'},
        {id: 5, recipe_id: 2, ingredient_id: 3, ingredient_quantity: 1.5, unit: 'cup'},
        {id: 6, recipe_id: 3, ingredient_id: 2, ingredient_quantity: 1, unit: 'cup'},
        {id: 7, recipe_id: 3, ingredient_id: 4, ingredient_quantity: 2, unit: 'cup'}
      ]);
    });
};