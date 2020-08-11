const express = require('express');

const Recipes = require('./recipe-book-model.js');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        if (recipes) {
            res.status(200).json(recipes);
        } else {
            res.status(404).json({ message: 'No Recipes Found'});
        }
    }
    catch(err) {
        res.status(500).json({ error: err });
    }
});

router.get('/:id/shoppingList', async(req, res) => {
    try {
        const shoppingList = await Recipes.getShoppingList(req.params.id);
        if (shoppingList) {
            res.status(200).json(shoppingList);
        } else {
            res.status(404).json({ message: 'No ingredients to shop'});
        }
    }
    catch (err) {
        res.status(500).json({ error: err});
    }
});

router.get('/:id/instructions', async(req, res) => {
    try {
        const instructions = await Recipes.getInstructions(req.params.id);
        if (instructions) {
            res.status(200).json(instructions);
        } else {
            res.status(404).json({ message: 'No instructions found'});
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
})

module.exports = router;