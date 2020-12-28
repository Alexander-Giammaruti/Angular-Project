import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is only a test of the emergency recipe system', 
            'https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/buildyourownpizza_0.png?itok=fgzFck86',
            [
                new Ingredient('Pepperoni', 12),
                new Ingredient('Cheese', 2),
                new Ingredient('pizza sauce', 1)
            ]
        ),
        new Recipe(
            'A Second Test Recipe', 
            'This is only a secondary test of the emergency recipe system', 
            'https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/buildyourownpizza_0.png?itok=fgzFck86',
            [
                new Ingredient('Imagination', 0),
                new Ingredient('Death', 1),
                new Ingredient('DEPRESSION', 9000)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice(); // returns an exact copy of the array without endangering the original reference
    }
}