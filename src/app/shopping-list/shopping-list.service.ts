import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    shoppingListChanged = new EventEmitter<Ingredient[]>();

    private shoppingList: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 3)
    ];

    getShoppingList() {
        return this.shoppingList.slice();
    }

    push(ingredient: Ingredient) {
        this.shoppingList.push(ingredient);
        this.shoppingListChanged.emit(this.shoppingList.slice());
    }
}