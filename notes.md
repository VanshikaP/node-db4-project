### Data mapping

Recipes(many) <==> Ingredients (many)

### Tables

* Recipes
- id
- recipe_name
- creator

* Ingredients
- id
- ingredient_name

* Recipe_Ingredients
- id
- recipe_id
- ingredient_id
- ingredient_quantity
- unit

* Instructions
- id
- recipe_id
- step_number
- instruction