import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Sweet Shrimp','Tasty shrimp on a bed of zesty rice','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg', [new Ingredient('Shrimp', 10), new Ingredient('Rice', 50)] ),
    new Recipe('Steak Dream','Tasy steak in beautiful sauce','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg' , [new Ingredient('Steak', 1), new Ingredient('Sauce', 10)] )
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();

  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }
}
