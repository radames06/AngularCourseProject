import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './header/recipe-book/recipe-book.component';
import { RecipeListComponent } from './header/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './header/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './header/shopping-list/shopping-list.service';
import { RecipeStartComponent } from './header/recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './header/recipe-book/recipe-edit/recipe-edit.component';
import { RecipeService } from './header/recipe-book/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService, 
    RecipeService,
  {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule { }
