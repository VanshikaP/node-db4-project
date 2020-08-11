const db = require('../data/db-config.js');

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipeID) {
    return db('ingredients as i')
        .join('recipe_ingredients as ri', 'i.id', 'ri.ingredient_id')
        .select('i.ingredient_name', 'ri.ingredient_quantity', 'ri.unit')
        .where('ri.recipe_id', '=', recipeID)
        .orderBy('i.ingredient_name');
}

function getInstructions(recipeID) {
    return db('instructions')
        .where({recipe_id: recipeID})
        .orderBy('step_number');
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}