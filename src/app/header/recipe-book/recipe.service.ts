import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Crumble',
      'description of crumble',
      'https://www.papillesetpupilles.fr/wp-content/uploads/2015/11/Crumble-aux-pommes-et-cannelle-600x413.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Frites', 3)
      ]
    ),
    new Recipe(
      'Crumble 2',
      'description of crumble 2',
      'https://www.papillesetpupilles.fr/wp-content/uploads/2015/11/Crumble-aux-pommes-et-cannelle-600x413.jpg',
      [
        new Ingredient('pommes', 4),
        new Ingredient('Beurre', 250)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
    console.log("addIngredientsToSL");
  }

}
