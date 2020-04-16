
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Toor Dal'},
        {id: 2, ingredient_name: 'Water'},
        {id: 3, ingredient_name: 'Rice'},
        {id: 4, ingredient_name: 'Whole wheat flour'},
        {id: 5, ingredient_name: 'Seasoning'}
      ]);
    });
};
