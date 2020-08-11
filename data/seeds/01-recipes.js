
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Dal', creator: 'Vanshika'},
        {id: 2, recipe_name: 'Rice', creator: 'Vanshika'},
        {id: 3, recipe_name: 'Roti', creator: 'Vanshika'},
      ]);
    });
};
