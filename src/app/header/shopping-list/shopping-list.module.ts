import { NgModule } from "@angular/core";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { RouterModule } from "@angular/router";
import { RecipesResolverService } from "../recipe-book/recipes-resolver.service";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent, resolve: [RecipesResolverService] }
        ]), 
        FormsModule,
        SharedModule
    ]

})
export class ShoppingListModule {
 
}