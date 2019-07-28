import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './header/recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './header/recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './header/recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './header/recipe-book/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './header/recipe-book/recipes-resolver.service';


const appRoutes: Routes = [
  { path: '',  redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeBookComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent, resolve: [RecipesResolverService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
