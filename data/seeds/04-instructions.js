
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, step_number: 1, instruction: 'Add Toor Dal and Water in Pressure Cooker'},
        {id: 2, recipe_id: 1, step_number: 2, instruction: 'Cook at high for 2 whistles'},
        {id: 3, recipe_id: 1, step_number: 3, instruction: 'Add Seasoning'},
        {id: 4, recipe_id: 2, step_number: 1, instruction: 'Add Rice and Water in Pressure Cooker'},
        {id: 5, recipe_id: 2, step_number: 2, instruction: 'Cook at high for 1 whistle'},
        {id: 6, recipe_id: 3, step_number: 1, instruction: 'Slowly knead the flour with water into a soft dough for about 10 minutes'},
        {id: 7, recipe_id: 3, step_number: 2, instruction: 'Cover and Rest the dough for about 30 minutes'},
        {id: 8, recipe_id: 3, step_number: 3, instruction: 'Roll out into thin circles of 5 inches diameter'},
        {id: 9, recipe_id: 3, step_number: 4, instruction: 'Roast on pan evenly on both sides, Puff using a cotton cloth'}
      ]);
    });
};
