import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../header/recipe-book/recipe.service';
import { Recipe } from '../header/recipe-book/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipesService: RecipeService) {}

    storeRecipes() {
        console.log("storeRecipe");
        const recipes = this.recipesService.getRecipes();
        this.http.put('https://recipe-book-5da85.firebaseio.com/recipes.json', recipes)
            .subscribe(response => {
                console.log(response);
            });
    }
    fetchData() {
        return this.http.get<Recipe[]>('https://recipe-book-5da85.firebaseio.com/recipes.json')
        .pipe(map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
        }),
        tap(recipes => {
            this.recipesService.setRecipes(recipes);
        }));
    }
}