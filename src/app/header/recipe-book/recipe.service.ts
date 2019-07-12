import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  getRecipe(ide: number) {
    return this.recipes[ide];
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
    console.log("addIngredientsToSL");
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index);
    this.recipesChanged.next(this.recipes.slice());
  }
}
