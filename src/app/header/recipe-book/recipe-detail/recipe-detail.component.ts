import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log("recipe-detail init");
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
          console.log("recipe-detail subscribe - id = ", this.id);
          console.log("recipe-detail recipe = ", this.recipe);
        }
      );
      console.log("recipe-detail init 2");
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToSL(this.recipe.ingredients);
    console.log("onAddToShoppingList");
  }
  onEditRecipe() {
    // this.router.navigate(['..', this.id, 'edit'], {relativeTo: this.route});
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
