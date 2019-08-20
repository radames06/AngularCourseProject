import { NgModule } from "@angular/core";
import { ShoppingListService } from "./header/shopping-list/shopping-list.service";
import { RecipeService } from "./header/recipe-book/recipe.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";

@NgModule({
    providers: [
        ShoppingListService, 
        RecipeService,
      {
        provide: HTTP_INTERCEPTORS, 
        useClass: AuthInterceptorService, 
        multi: true
      }
    ]
})
export class CoreModule {}